// Type imports
import { BunqInstallResponse, Payment, PaymentEntry, SessionData } from "./types.d.ts";
////////////////////////////////////////////////////
import * as crypto from "node:crypto";
import { Buffer } from "node:buffer";
import { UserPerson } from "./types.d.ts";
import { MonetaryAccountData, MonetaryAccountBank } from "./types.d.ts";
import { addEntry, createDb, executeSql } from "./db.ts";

// token from instalation needs to go to the AUTHORIZATION HEADER !!!
// IN ORDER FOR SCRIPT TO WORK YOU NEED TO MAKE RSA KEY PAIRS

const bunqUrl = "https://api.bunq.com/v1/";

async function readPublicKey(): Promise<string> {
    const publicKey = await Deno.readTextFile("./public_key.pem");
    const pbKeyString = publicKey.toString();
    return pbKeyString;
}

let signatureHeader = "";

async function getTokens(publicKey: string): Promise<BunqInstallResponse> {
    const data = {
        client_public_key: publicKey,
    };

    const jsonData = await JSON.stringify(data);

    const request = new Request(bunqUrl + "installation", {
        method: "POST",
        body: jsonData,
    });

    const response = await fetch(request);
    console.log(response.status);
    const responseHeaderData = response.headers.entries();
    for (const pair of responseHeaderData) {
        console.log(pair[0], ": ", pair[1]);
        if (pair[0] == "x-bunq-server-signature") {
            signatureHeader = pair[1];
        }
    }
    const responseData = (await response.json()) as BunqInstallResponse;

    if (response.status !== 200) {
        console.log("******** CAN'T GET INSTALLATION TOKEN - STEP 1 *********");
        console.log(responseData);
        throw new Error("Cant get installation running");
    }

    console.log("GOT INSTALLATION TOKEN SUCCESFULLY");

    return responseData;
}

async function generateDeviceBody() {
    console.log(Deno.env.get("API_KEY"));
    const data = {
        description: "bla",
        secret: Deno.env.get("API_KEY"),
        permitted_ips: ["84.28.52.234"],
    };

    const stringData = JSON.stringify(data);
    return stringData;
}

async function readPrivateKey() {
    const privateKey = await Deno.readTextFile("./private_key.pem");
    const privateKeyString = privateKey.toString();
    return privateKeyString;
}

async function signRequestBody(requestBody: string, privateKey: string) {
    const signature = crypto.sign("sha256", Buffer.from(requestBody), {
        key: privateKey,
    });
    return signature;
}

// FAILING
async function verifySignature(data: string, signature: string, publicKey: string) {
    const isVerified = crypto.verify(
        "sha256",
        Buffer.from(data),
        {
            key: publicKey,
        },
        Buffer.from(signature)
    );

    return isVerified;
}

async function postDevice(signature: string, postBody: string, apiKey: string, authToken: string) {
    const request = new Request(bunqUrl + "device-server", {
        method: "POST",
        body: postBody,
        headers: {
            "X-Bunq-Client-Signature": signature,
            "X-Bunq-Client-Authentication": authToken,
            Authentication: `Bearer ${apiKey}`,
        },
    });

    const response = await fetch(request);
    if (response.status !== 200) {
        console.log("****** FAILED TO POST DEVICE *******");
    } else {
        console.log("DEVICE POSETED SUCESSFULLY");
    }
}

async function postSession(authToken: string): Promise<[UserPerson, string]> {
    const apiKey = Deno.env.get("API_KEY") as string;

    const data = {
        secret: apiKey,
    };

    const postBody = JSON.stringify(data);
    const privateKey = await readPrivateKey();

    const signature = await signRequestBody(postBody, privateKey);
    const signatureString = signature.toString("base64");

    const request = new Request(bunqUrl + "session-server", {
        method: "POST",
        body: postBody,
        headers: {
            "X-Bunq-Client-Signature": signatureString,
            "X-Bunq-Client-Authentication": authToken,
        },
    });

    const response = await fetch(request);

    const responseData = (await response.json()) as SessionData;
    const [id, token, userData] = responseData.Response;

    return [userData.UserPerson, token.Token.token];
}

async function createRequest(url: string, token: string): Promise<Request> {
    return new Request(url, {
        method: "GET",
        headers: {
            "X-Bunq-Client-Authentication": token,
        },
    });
}

async function getMonetaryAccounts(
    token: string,
    user: UserPerson
): Promise<MonetaryAccountBank[]> {
    const url = bunqUrl + `/user/${user.id}/monetary-account`;
    const request = await createRequest(url, token);

    const response = await fetch(request);

    const repsonseObj = (await response.json()) as MonetaryAccountData;

    const responseTransformed = repsonseObj.Response.map((bankAccount) => {
        return bankAccount.MonetaryAccountBank;
    });
    return responseTransformed;
}

async function getPayments(token: string, userId: number, accountId: number) {
    let dataAvaliable = true;
    let iteration = 0;
    let url = bunqUrl + `user/${userId}/monetary-account/${accountId}/payment?count=200`;

    while (dataAvaliable) {
        const request = await createRequest(url, token);

        const response = await fetch(request);

        const responseData = await response.json();
        console.log(response.status);
        console.log(responseData);

        for await (const payment of responseData.Response as [{ Payment: Payment }]) {
            try {
                const pym = payment.Payment as Payment;
                const created = new Date(pym.created);
                const createdInt = Math.round(created.getTime() / 1000);
                const updated = new Date(pym.updated);
                const updatedInt = Math.round(created.getTime() / 1000);
                const pymentEntry: PaymentEntry = {
                    id: pym.id,
                    created: createdInt,
                    updated: updatedInt,
                    monetary_account_id: pym.monetary_account_id,
                    amount: parseFloat(pym.amount.value),
                    currency: pym.amount.currency,
                    description: pym.description,
                    type: pym.type,
                    iban: pym.counterparty_alias.iban,
                    name: pym.counterparty_alias.display_name,
                    category_code: pym.counterparty_alias.merchant_category_code,
                    subtype: pym.subtype,
                    balance_after: parseFloat(pym.balance_after_mutation.value),
                };

                Object.keys(pymentEntry).forEach((key: string) => {
                    if (pymentEntry[key] === undefined) {
                        pymentEntry[key] = null;
                    }
                });

                await addEntry(pymentEntry);
            } catch (error) {
                console.log(error);
            }
        }

        iteration++;

        const olderUrl = responseData.Pagination.older_url as string | null;

        if (olderUrl === null) {
            dataAvaliable = false;
        }

        if (olderUrl !== null) {
            url = bunqUrl + olderUrl.substring(4, olderUrl.length);
        }

        if (iteration > 0 && iteration % 10 === 0) {
            console.log("BATCHED 10 REQUESTS");
        }
    }
}

try {
    const publicKey = await readPublicKey();
    const privateKey = await readPrivateKey();
    const installData = await getTokens(publicKey);
    const deviceBody = await generateDeviceBody();
    const signature = await signRequestBody(deviceBody, privateKey);
    const signatureString = signature.toString("base64");
    const apiKey = Deno.env.get("API_KEY") as string;
    await postDevice(signatureString, deviceBody, apiKey, installData.Response[1].Token.token);
    const [userData, token] = await postSession(installData.Response[1].Token.token);
    const bankAccounts = await getMonetaryAccounts(token, userData);
    // TO OD  -- FIND MAIN BANK ACCOUNT ON REAL API
    const mainAccount = bankAccounts[2];
    await getPayments(token, userData.id, 3664456);
} catch (error) {
    console.error(error);
}

try {
    await createDb();
} catch (error) {
    console.log(error);
}
