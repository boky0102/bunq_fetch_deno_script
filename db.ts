import { Database } from "jsr:@db/sqlite";
import { PaymentEntry } from "./types.d.ts";

export const db = await new Database("transactions.db");

export async function createDb() {
    try {
        await db
            .prepare(
                `
            CREATE TABLE IF NOT EXISTS transactions (
                id UNIQUE PRIMARY KEY,
                created INTEGER,
                updated INTEGER,
                monetary_account_id INTEGER,
                amount REAL,
                currency TEXT,
                description TEXT,
                type TEXT,
                iban TEXT,
                name TEXT,
                category_code TEXT,
                subtype TEXT,
                balance_after REAL
        );`
            )
            .run();
    } catch (error) {
        console.log(error);
    }
}

export function addEntry(entry: PaymentEntry): Promise<void> {
    return new Promise((resolve, reject) => {
        const changed = db.exec(
            "insert or ignore into transactions VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            entry.id,
            entry.created,
            entry.updated,
            entry.monetary_account_id,
            entry.amount,
            entry.currency,
            entry.description,
            entry.type,
            entry.iban,
            entry.name,
            entry.category_code,
            entry.subtype,
            entry.balance_after
        );
        if (changed) {
            resolve();
        } else {
            reject("Existing entry");
        }
    });
}
