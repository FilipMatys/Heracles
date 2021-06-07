/**
 * Bank account
 * @description Bank account´s information
 */
export interface IBankAccount {

    /**
     * IBAN
     * @description International bank account number
     */
    iban?: string;

    /**
     * BIC
     * @description Business identification code (SWIFT)
     */
    bic?: string;

    /**
     * Prefix
     * @description Bank account prefix
     */
    prefix?: string;

    /**
     * Account number
     * @description Bank account number	
     */
    account_number?: string;

    /**
     * Bank code
     * @description Bank account code	
     */
    bank_code?: string;

    /**
     * Account name
     * @description Bank account name
     */
    account_name?: string;
}