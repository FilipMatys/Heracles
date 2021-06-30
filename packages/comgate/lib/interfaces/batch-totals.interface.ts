/**
 * Batch totals
 * @description Interface for batch totals
 */
export interface IBatchTotals {

    /**
     * Adjs amount
     * @description Amount of adjustments
     */
    adjsAmount?: number;

    /**
     * Adjs count
     * @description Count of adjustments
     */
    adsjCount?: number;

    /**
     * Batch number
     * @description Number of batch
     */
    batchNumber?: number;

    /**
     * Credits amount
     * @description Amount of refund
     */
    creditsAmount?: number;

    /**
     * Credits count
     * @description Number of refunds
     */
    creditsCount?: number;

    /**
     * Debits mount
     * @description Amount of payments
     */
    debitsAmount?: number;

    /**
     * Debits count
     * @description Number of payments
     */
    debitsCount?: number;

    /**
     * Shift number
     * @description Number of shift
     */
    shiftNumber?: number;
}