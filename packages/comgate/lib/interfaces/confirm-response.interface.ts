// Interfaces
import { ITransaction } from "./transaction.interface";

/**
 * Confirm response
 * @description Interface for confirm response
 */
export interface IConfirmResponse extends ITransaction {

    /**
     * Is confirmed
     * @description Information whether the transaction
     * is confirmed or not
     */
    isConfirmed?: boolean;
}