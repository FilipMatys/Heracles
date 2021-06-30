// Interfaces
import { IStartPaymentRequest } from "./start-payment-request.interface";
import { ITransactionPayload } from "./transaction-payload.interface";

/**
 * Start payment payload
 * @description Interface for start payment payload
 */
export interface IStartPaymentPayload extends ITransactionPayload<IStartPaymentRequest> {}