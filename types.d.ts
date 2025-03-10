export type BunqInstallResponse = {
    Response: [
        {
            Id: {
                id: number;
            };
        },
        {
            Token: {
                id: number;
                created: string;
                updated: string;
                token: string;
            };
        },
        {
            ServerPublicKey: {
                server_public_key: string;
            };
        }
    ];
};

///////////////////// SESSION RESPONSE /////////////////////////////////

export type SessionData = {
    Response: [
        { Id: Session["Id"] },
        { Token: Session["Token"] },
        { UserPerson: Session["UserPerson"] }
    ];
};

export interface Session {
    Id: Id;
    Token: Token;
    UserCompany: UserCompany;
    UserPerson: UserPerson;
    UserApiKey: UserApiKey;
    UserPaymentServiceProvider: UserPaymentServiceProvider;
}
export interface Id {
    id: number;
}
export interface Token {
    id: number;
    token: string;
}
export interface UserCompany {
    name: string;
    public_nick_name: string;
    address_main: AddressMainOrAddressPostal;
    address_postal: AddressMainOrAddressPostal;
    language: string;
    region: string;
    country: string;
    ubo?: UboEntity[] | null;
    chamber_of_commerce_number: string;
    legal_form: string;
    status: string;
    sub_status: string;
    session_timeout: number;
    daily_limit_without_confirmation_login: LimitAmountMonthlyOrSpentAmountMonthlyOrCardLimitOrCardLimitAtmOrAmountLimitMonthlyOrAmountSpentMonthlyOrDailyLimitWithoutConfirmationLogin;
    id: number;
    created: string;
    updated: string;
    public_uuid: string;
    display_name: string;
    alias?: AliasEntityOrPointerCounterUserOrPointerMonetaryAccountOrLegalGuardianAlias[] | null;
    type_of_business_entity: string;
    sector_of_industry: string;
    counter_bank_iban: string;
    avatar: Avatar;
    version_terms_of_service: string;
    directors?: DirectorsEntityOrLabelUserOrCounterLabelUser[] | null;
    notification_filters?: NotificationFiltersEntity[] | null;
    customer: Customer;
    customer_limit: CustomerLimit;
    billing_contract?: BillingContractEntity[] | null;
    deny_reason: string;
    relations?: RelationsEntity[] | null;
    tax_resident?: TaxResidentEntity[] | null;
}
export interface AddressMainOrAddressPostal {
    street: string;
    house_number: string;
    po_box: string;
    postal_code: string;
    city: string;
    country: string;
    extra: string;
    mailbox_name: string;
    province: string;
    is_user_address_updated: boolean;
}
export interface UboEntity {
    name: string;
    date_of_birth: string;
    nationality: string;
}
export interface LimitAmountMonthlyOrSpentAmountMonthlyOrCardLimitOrCardLimitAtmOrAmountLimitMonthlyOrAmountSpentMonthlyOrDailyLimitWithoutConfirmationLogin {
    value: string;
    currency: string;
}
export interface AliasEntityOrPointerCounterUserOrPointerMonetaryAccountOrLegalGuardianAlias {
    type: string;
    value: string;
    name: string;
}
export interface Avatar {
    uuid: string;
    anchor_uuid: string;
    image?: ImageEntity[] | null;
    style: string;
}
export interface ImageEntity {
    attachment_public_uuid: string;
    content_type: string;
    height: number;
    width: number;
}
export interface DirectorsEntityOrLabelUserOrCounterLabelUser {
    uuid: string;
    display_name: string;
    country: string;
    avatar: Avatar;
    public_nick_name: string;
}
export interface NotificationFiltersEntity {
    notification_delivery_method: string;
    notification_target: string;
    category: string;
}
export interface Customer {
    billing_account_id: string;
    invoice_notification_preference: string;
    id: number;
    created: string;
    updated: string;
}
export interface CustomerLimit {
    limit_monetary_account: number;
    limit_monetary_account_remaining: number;
    limit_card_debit_maestro: number;
    limit_card_debit_mastercard: number;
    limit_card_debit_wildcard: number;
    limit_card_wildcard: number;
    limit_card_replacement: number;
    limit_amount_monthly: LimitAmountMonthlyOrSpentAmountMonthlyOrCardLimitOrCardLimitAtmOrAmountLimitMonthlyOrAmountSpentMonthlyOrDailyLimitWithoutConfirmationLogin;
    spent_amount_monthly: LimitAmountMonthlyOrSpentAmountMonthlyOrCardLimitOrCardLimitAtmOrAmountLimitMonthlyOrAmountSpentMonthlyOrDailyLimitWithoutConfirmationLogin;
}
export interface BillingContractEntity {
    subscription_type: string;
    id: number;
    created: string;
    updated: string;
    contract_date_start: string;
    contract_date_end: string;
    contract_version: number;
    subscription_type_downgrade: string;
    status: string;
    sub_status: string;
}
export interface RelationsEntity {
    user_id: string;
    counter_user_id: string;
    label_user: DirectorsEntityOrLabelUserOrCounterLabelUser;
    counter_label_user: DirectorsEntityOrLabelUserOrCounterLabelUser;
    relationship: string;
    status: string;
    user_status: string;
    counter_user_status: string;
    company_employee_setting_adyen_card_transaction: CompanyEmployeeSettingAdyenCardTransaction;
    all_company_employee_card?: AllCompanyEmployeeCardEntity[] | null;
}
export interface CompanyEmployeeSettingAdyenCardTransaction {
    pointer_counter_user: AliasEntityOrPointerCounterUserOrPointerMonetaryAccountOrLegalGuardianAlias;
    status: string;
    monetary_account_payout_id: number;
}
export interface AllCompanyEmployeeCardEntity {
    pointer_counter_user: AliasEntityOrPointerCounterUserOrPointerMonetaryAccountOrLegalGuardianAlias;
    pointer_monetary_account: AliasEntityOrPointerCounterUserOrPointerMonetaryAccountOrLegalGuardianAlias;
    company_name_on_card: string;
    amount_limit_monthly: LimitAmountMonthlyOrSpentAmountMonthlyOrCardLimitOrCardLimitAtmOrAmountLimitMonthlyOrAmountSpentMonthlyOrDailyLimitWithoutConfirmationLogin;
    status: string;
    card: Card;
    amount_spent_monthly: LimitAmountMonthlyOrSpentAmountMonthlyOrCardLimitOrCardLimitAtmOrAmountLimitMonthlyOrAmountSpentMonthlyOrDailyLimitWithoutConfirmationLogin;
    number_of_company_employee_card_receipt_pending: number;
}
export interface Card {
    status: string;
    order_status: string;
    card_limit: LimitAmountMonthlyOrSpentAmountMonthlyOrCardLimitOrCardLimitAtmOrAmountLimitMonthlyOrAmountSpentMonthlyOrDailyLimitWithoutConfirmationLogin;
    card_limit_atm: LimitAmountMonthlyOrSpentAmountMonthlyOrCardLimitOrCardLimitAtmOrAmountLimitMonthlyOrAmountSpentMonthlyOrDailyLimitWithoutConfirmationLogin;
    country_permission?: CountryPermissionEntity[] | null;
    pin_code_assignment?: PinCodeAssignmentEntity[] | null;
    primary_account_numbers?: PrimaryAccountNumbersEntity[] | null;
    monetary_account_id_fallback: number;
    preferred_name_on_card: string;
    second_line: string;
}
export interface CountryPermissionEntity {
    country: string;
    id: number;
}
export interface PinCodeAssignmentEntity {
    type: string;
    routing_type: string;
    monetary_account_id: number;
    status: string;
}
export interface PrimaryAccountNumbersEntity {
    id: number;
    description: string;
    status: string;
    monetary_account_id: number;
    uuid: string;
    four_digit: string;
    type: string;
}
export interface TaxResidentEntity {
    country: string;
    tax_number: string;
    status: string;
    id: number;
}
export interface UserPerson {
    first_name: string;
    middle_name: string;
    last_name: string;
    public_nick_name: string;
    address_main: AddressMainOrAddressPostal;
    address_postal: AddressMainOrAddressPostal;
    tax_resident?: TaxResidentEntity[] | null;
    date_of_birth: string;
    nationality: string;
    all_nationality?: string[] | null;
    language: string;
    region: string;
    gender: string;
    status: string;
    sub_status: string;
    legal_guardian_alias: AliasEntityOrPointerCounterUserOrPointerMonetaryAccountOrLegalGuardianAlias;
    session_timeout: number;
    daily_limit_without_confirmation_login: LimitAmountMonthlyOrSpentAmountMonthlyOrCardLimitOrCardLimitAtmOrAmountLimitMonthlyOrAmountSpentMonthlyOrDailyLimitWithoutConfirmationLogin;
    display_name: string;
    id: number;
    created: string;
    updated: string;
    public_uuid: string;
    legal_name: string;
    alias?: AliasEntityOrPointerCounterUserOrPointerMonetaryAccountOrLegalGuardianAlias[] | null;
    place_of_birth: string;
    country_of_birth: string;
    avatar: Avatar;
    version_terms_of_service: string;
    notification_filters?: NotificationFiltersEntity[] | null;
    relations?: RelationsEntity[] | null;
}
export interface UserApiKey {
    id: number;
    created: string;
    updated: string;
    requested_by_user: RequestedByUserOrGrantedByUser;
    granted_by_user: RequestedByUserOrGrantedByUser;
}
export interface RequestedByUserOrGrantedByUser {
    UserPerson: UserPerson;
    UserCompany: UserCompany;
    UserPaymentServiceProvider: UserPaymentServiceProvider;
}
export interface UserPaymentServiceProvider {
    id: number;
    created: string;
    updated: string;
    certificate_distinguished_name: string;
    alias?: AliasEntityOrPointerCounterUserOrPointerMonetaryAccountOrLegalGuardianAlias[] | null;
    avatar: Avatar;
    status: string;
    sub_status: string;
    public_uuid: string;
    display_name: string;
    public_nick_name: string;
    language: string;
    region: string;
    session_timeout: number;
}

///////////////////// SESSION RESPONSE /////////////////////////////////

///////////////////// MONETARY ACCOUNTS RESPONSE ////////////////////////

export type MonetaryAccountData = {
    Response: [
        {
            MonetaryAccountBank: MonetaryAccountBank;
        }
    ];
};

export interface Weather {
    MonetaryAccountLight: MonetaryAccountLight;
    MonetaryAccountBank: MonetaryAccountBank;
    MonetaryAccountExternal: MonetaryAccountExternal;
    MonetaryAccountInvestment: MonetaryAccountInvestment;
    MonetaryAccountJoint: MonetaryAccountJoint;
    MonetaryAccountSavings: MonetaryAccountSavings;
    MonetaryAccountSwitchService: MonetaryAccountSwitchService;
    MonetaryAccountExternalSavings: MonetaryAccountExternalSavings;
    MonetaryAccountCard: MonetaryAccountCard;
}
export interface MonetaryAccountLight {
    currency: string;
    description: string;
    daily_limit: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    status: string;
    sub_status: string;
    reason: string;
    reason_description: string;
    setting: Setting;
    id: number;
    created: string;
    updated: string;
    avatar: Avatar;
    balance: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    alias?: AliasEntityOrBunqMe[] | null;
    public_uuid: string;
    user_id: number;
    balance_maximum: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    budget_month_used: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    budget_month_maximum: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    budget_year_used: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    budget_year_maximum: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    budget_withdrawal_year_used: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    budget_withdrawal_year_maximum: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
}
export interface DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal {
    value: string;
    currency: string;
}
export interface Setting {
    color: string;
    icon: string;
    default_avatar_status: string;
    restriction_chat: string;
    sdd_expiration_action: string;
}
export interface Avatar {
    uuid: string;
    anchor_uuid: string;
    image?: ImageEntity[] | null;
    style: string;
}
export interface ImageEntity {
    attachment_public_uuid: string;
    content_type: string;
    height: number;
    width: number;
}
export interface AliasEntityOrBunqMe {
    type: string;
    value: string;
    name: string;
}
export interface MonetaryAccountBank {
    currency: string;
    description: string;
    daily_limit: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    status: string;
    sub_status: string;
    reason: string;
    reason_description: string;
    display_name: string;
    setting: Setting;
    id: number;
    created: string;
    updated: string;
    avatar: Avatar;
    overdraft_limit: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    balance: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    alias?: AliasEntityOrBunqMe[] | null;
    public_uuid: string;
    user_id: number;
    monetary_account_profile: MonetaryAccountProfile;
    all_auto_save_id?: AllAutoSaveIdEntity[] | null;
}
export interface MonetaryAccountProfile {
    profile_fill: ProfileFill;
    profile_drain: ProfileDrain;
}
export interface ProfileFill {
    status: string;
    balance_preferred: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    balance_threshold_low: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    issuer: Issuer;
}
export interface Issuer {
    bic: string;
    name: string;
}
export interface ProfileDrain {
    status: string;
    balance_preferred: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    balance_threshold_high: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    savings_account_alias: SavingsAccountAlias;
}
export interface SavingsAccountAlias {
    iban: string;
    display_name: string;
    avatar: Avatar;
    label_user: LabelUserOrAlias;
    country: string;
    bunq_me: AliasEntityOrBunqMe;
    is_light: boolean;
    swift_bic: string;
    swift_account_number: string;
    transferwise_account_number: string;
    transferwise_bank_code: string;
    merchant_category_code: string;
}
export interface LabelUserOrAlias {
    uuid: string;
    display_name: string;
    country: string;
    avatar: Avatar;
    public_nick_name: string;
}
export interface AllAutoSaveIdEntity {
    id: number;
}
export interface MonetaryAccountExternal {
    currency: string;
    service: string;
    description: string;
    daily_limit: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    status: string;
    sub_status: string;
    reason: string;
    reason_description: string;
    display_name: string;
    setting: Setting;
    id: number;
    created: string;
    updated: string;
    avatar: Avatar;
    overdraft_limit: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    balance: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    alias?: AliasEntityOrBunqMe[] | null;
    public_uuid: string;
    user_id: number;
    monetary_account_profile: MonetaryAccountProfile;
    all_auto_save_id?: AllAutoSaveIdEntity[] | null;
    open_banking_account: OpenBankingAccount;
}
export interface OpenBankingAccount {
    status: string;
    iban: string;
    time_synced_last: string;
    provider_bank: ProviderBank;
    balance_booked: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    balance_available: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
}
export interface ProviderBank {
    account_information_service_status: string;
    payment_information_service_status: string;
    name: string;
    aiia_provider_id: string;
    country: string;
    all_payment_method_allowed_sepa?: string[] | null;
    all_payment_method_allowed_domestic?: string[] | null;
    audience_business_status: boolean;
    audience_private_status: boolean;
    avatar: Avatar;
}
export interface MonetaryAccountInvestment {
    currency: string;
    description: string;
    daily_limit: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    status: string;
    sub_status: string;
    reason: string;
    reason_description: string;
    display_name: string;
    setting: Setting;
    birdee_investment_portfolio: BirdeeInvestmentPortfolio;
    amount_deposit_initial: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    id: number;
    created: string;
    updated: string;
    avatar: Avatar;
    balance: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    alias?: AliasEntityOrBunqMe[] | null;
    public_uuid: string;
    user_id: number;
    monetary_account_profile: MonetaryAccountProfile;
    all_auto_save_id?: AllAutoSaveIdEntity[] | null;
}
export interface BirdeeInvestmentPortfolio {
    risk_profile_type: string;
    investment_theme: string;
    name: string;
    goal: Goal;
    status: string;
    number_of_strategy_change_annual_maximum: number;
    number_of_strategy_change_annual_used: number;
    external_identifier: string;
    balance: Balance;
    allocations?: AllocationsEntity[] | null;
}
export interface Goal {
    amount_target: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    time_end: string;
}
export interface Balance {
    amount_available: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    amount_deposit_total: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    amount_withdrawal_total: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    amount_fee_total: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    amount_profit: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    amount_deposit_pending: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    amount_withdrawal_pending: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
}
export interface AllocationsEntity {
    instrument_currency: string;
    instrument_asset_class: string;
    instrument_asset_class_name: string;
    instrument_isin: string;
    instrument_name: string;
    instrument_region_name: string;
    instrument_key_information_document_uri: string;
    weight: string;
    quantity: string;
    price: string;
    amount: string;
}
export interface MonetaryAccountJoint {
    currency: string;
    description: string;
    daily_limit: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    overdraft_limit: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    alias?: AliasEntityOrBunqMe[] | null;
    status: string;
    sub_status: string;
    reason: string;
    reason_description: string;
    all_co_owner?: AllCoOwnerEntity[] | null;
    setting: Setting;
    id: number;
    created: string;
    updated: string;
    avatar: Avatar;
    balance: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    public_uuid: string;
    user_id: number;
    monetary_account_profile: MonetaryAccountProfile;
    all_auto_save_id?: AllAutoSaveIdEntity[] | null;
}
export interface AllCoOwnerEntity {
    alias: LabelUserOrAlias;
    status: string;
}
export interface MonetaryAccountSavings {
    currency: string;
    description: string;
    daily_limit: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    status: string;
    sub_status: string;
    reason: string;
    reason_description: string;
    all_co_owner?: AllCoOwnerEntity[] | null;
    setting: Setting;
    savings_goal: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    id: number;
    created: string;
    updated: string;
    avatar: Avatar;
    balance: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    alias?: AliasEntityOrBunqMe[] | null;
    public_uuid: string;
    user_id: number;
    monetary_account_profile: MonetaryAccountProfile;
    savings_goal_progress: number;
    number_of_payment_remaining: string;
    all_auto_save_id?: AllAutoSaveIdEntity[] | null;
}
export interface MonetaryAccountSwitchService {
    id: number;
    created: string;
    description: string;
    status: string;
    sub_status: string;
}
export interface MonetaryAccountExternalSavings {
    currency: string;
    description: string;
    daily_limit: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    status: string;
    sub_status: string;
    reason: string;
    reason_description: string;
    display_name: string;
    setting: Setting;
    savings_goal: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    id: number;
    created: string;
    updated: string;
    avatar: Avatar;
    balance: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    alias?: AliasEntityOrBunqMe[] | null;
    public_uuid: string;
    user_id: number;
    monetary_account_profile: MonetaryAccountProfile;
    all_auto_save_id?: AllAutoSaveIdEntity[] | null;
    savings_goal_progress: number;
    number_of_payment_remaining: string;
}
export interface MonetaryAccountCard {
    id: number;
    created: string;
    updated: string;
    currency: string;
    description: string;
    daily_limit: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    overdraft_limit: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    balance: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    balance_real: DailyLimitOrBalanceOrBalanceMaximumOrBudgetMonthUsedOrBudgetMonthMaximumOrBudgetYearUsedOrBudgetYearMaximumOrBudgetWithdrawalYearUsedOrBudgetWithdrawalYearMaximumOrBalancePreferredOrBalanceThresholdLowOrBalanceThresholdHighOrOverdraftLimitOrBalanceBookedOrBalanceAvailableOrAmountTargetOrAmountAvailableOrAmountDepositTotalOrAmountWithdrawalTotalOrAmountFeeTotalOrAmountProfitOrAmountDepositPendingOrAmountWithdrawalPendingOrAmountDepositInitialOrSavingsGoalOrBalanceReal;
    alias?: AliasEntityOrBunqMe[] | null;
    public_uuid: string;
    status: string;
    sub_status: string;
    user_id: number;
}

export type Payment = {
    id: number;
    created: string;
    updated: string;
    monetary_account_id: 3664456;
    amount: {
        currency: string;
        value: string;
    };
    description: string;
    type: string;
    counterparty_alias: {
        iban: string;
        display_name: string;
        merchant_category_code?: string;
    };
    subtype: string;
    balance_after_mutation: {
        currency: string;
        value: string;
    };
};

export type PaymentEntry = {
    id: number;
    created: number;
    updated: number;
    monetary_account_id: number;
    amount: number;
    currency: string;
    description: string;
    type: string;
    iban: string;
    name: string;
    category_code?: string;
    subtype: string;
    balance_after: number;
};
