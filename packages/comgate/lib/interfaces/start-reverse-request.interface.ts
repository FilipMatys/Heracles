// Interfaces
import { ITransaction } from "./transaction.interface";

/**
 * Start reverse request
 * @description Interface for start reverse request
 */
export interface IStartReverseRequest extends ITransaction {

    /**
     * Original transaction id
     * @description ID of the original transaction
     */
    originalTransactionId?: string;
}