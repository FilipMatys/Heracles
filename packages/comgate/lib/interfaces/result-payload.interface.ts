// Interfaces
import { ISecurePayload } from "./secure-payload.interface";
import { ITransaction } from "./transaction.interface";

/**
 * Result payload
 * @description Interface for result payload
 */
export interface IResultPayload extends ISecurePayload, ITransaction { }