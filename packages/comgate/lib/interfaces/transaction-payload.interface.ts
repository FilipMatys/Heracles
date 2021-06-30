// Interfaces
import { ISecurePayload } from "./secure-payload.interface";
import { ITransaction } from "./transaction.interface";

/**
 * Transaction request
 * @description Interface for transaction request
 */
export interface ITransactionPayload<TPayload extends ITransaction> extends ISecurePayload {

    /**
     * Request
     * @description Transaction payload
     */
    request?: TPayload;
}