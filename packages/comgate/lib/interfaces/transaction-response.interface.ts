// Interfaces
import { ITransaction } from "./transaction.interface";

/**
 * Transaction response
 * @description Interface for transaction response
 */
export interface ITransactionResponse extends ITransaction {

    /**
     * Is started
     * @description Information whether the payment
     * has started
     */
    isStarted?: boolean;

    /**
     * Status
     * @description Message of the payment status
     */
    status?: string;
}