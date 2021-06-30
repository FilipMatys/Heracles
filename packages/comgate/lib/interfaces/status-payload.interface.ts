// Interfaces
import { ISecurePayload } from "./secure-payload.interface";
import { ITransaction } from "./transaction.interface";

/**
 * Status payload
 * @description Interface for status payload
 */
export interface IStatusPayload extends ISecurePayload, ITransaction {}