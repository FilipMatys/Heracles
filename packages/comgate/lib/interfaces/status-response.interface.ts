// Interfaces
import { ITransaction } from "./transaction.interface";

/**
 * Status response
 * @description Interface for status response
 */
export interface IStatusResponse extends ITransaction {

    /**
     * Status
     * @description Message of the operation status
     */
    status?: string;
}