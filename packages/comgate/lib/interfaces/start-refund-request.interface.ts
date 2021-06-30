// Interfaces
import { ITransaction } from "./transaction.interface";

/**
 * Start refund request
 * @description Interface for start refund request
 */
export interface IStartRefundRequest extends ITransaction {

    /**
     * Amount
     * @description Amount of the refund in cents
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