/**
 * Accounts
 * @description Information about electronic money account
 */
export interface IAccounts {

    /**
     * Id
     * @description ID of account
     */
    id?: number;

    /**
     * Balance
     * @description Balance of account
     */
    balance?: number;

    /**
     * Currency
     * @description Currency of payment, format corresponds to ISO 4217
     */
    currency?: string;
}