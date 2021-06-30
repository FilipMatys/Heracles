// Interfaces
import { ITransaction } from "./transaction.interface";

/**
 * Start payment request
 * @description Interface for start payment request
 */
export interface IStartPaymentRequest extends ITransaction {

    /**
     * Amount
     * @description Amount of the payment in cents
     */
    amount?: number;

    /**
     * Currency code
     * @description Code of the currency
     */
    currencyCode?: number;

    /**
     * Invoice number
     * @description Variable symbol
     */
    invoiceNumber?: string;
}