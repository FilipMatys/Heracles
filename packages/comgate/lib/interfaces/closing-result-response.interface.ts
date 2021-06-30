// Interfaces
import { IBatchTotals } from "./batch-totals.interface";
import { ITransactionResultResponse } from "./transaction-result-response.interface";

/**
 * Closing result response
 * @description Interface for closing result response
 */
export interface IClosingResultResponse extends ITransactionResultResponse {

    /**
     * Batch totals
     * @description Object of the batch totals
     */
    batchTotals?: IBatchTotals;
}