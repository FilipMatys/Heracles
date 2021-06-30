// Interfaces
import { IStartRefundRequest } from "./start-refund-request.interface";
import { ITransactionPayload } from "./transaction-payload.interface";

/**
 * Start refund payload
 * @description Interface for start refund payload
 */
export interface IStartRefundPayload extends ITransactionPayload<IStartRefundRequest> {}