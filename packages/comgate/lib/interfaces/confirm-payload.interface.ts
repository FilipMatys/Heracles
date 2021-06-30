// Interfaces
import { ISecurePayload } from "./secure-payload.interface";
import { ITransaction } from "./transaction.interface";

/**
 * Confirm payload
 * @description Interface for confirm payload
 */
export interface IConfirmPayload extends ISecurePayload, ITransaction {

    /**
     * Confirm
     * @description Information whether is the transaction confirmed or not
     */
    confirm?: boolean;
}