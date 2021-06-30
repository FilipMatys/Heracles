// Interfaces
import { ITransactionPayload } from "./transaction-payload.interface";
import { ITransaction } from "./transaction.interface";

/**
 * Start closing payload
 * @description Interface for start closing payload
 */
export interface IStartClosingPayload extends ITransactionPayload<ITransaction> {}