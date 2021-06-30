// Interfaces
import { IEMVResponseData } from "./emv-response-data.interface";
import { ITransactionResultResponse } from "./transaction-result-response.interface";

/**
 * Payment result response
 * @description Interface for payment result response
 */
export interface IPaymentResultResponse extends ITransactionResultResponse {

    /**
     * AID
     * @description Application identifier
     */
    aid?: string;

    /**
     * Amount
     * @description Amount of the transaction in cents
     */
    amount?: number;

    /**
     * AOSA
     * @description Available offline sending amount
     */
    aosa?: string;

    /**
     * App label
     * @description Label of application
     */
    appLabel?: string;

    /**
     * Auth code
     * @description Code of the authorization
     */
    authCode?: string;

    /**
     * Available balance
     * @description Balance of the available funds
     */
    availableBalance?: number;

    /**
     * Card reversal
     * @description Information whether the reversal should be
     * called or not
     */
    callReversal?: boolean;

    /**
     * Card input type
     * @description Type of the input
     */
    cardInputType?: string;

    /**
     * Conto
     * @description Card issuer
     */
    conto?: string;

    /**
     * Currency
     * @description Code of the currency
     */
    currency?: number;

    /**
     * CMV type list
     * @description Type of the transaction
     */
    cvmTypeList?: string[];

    /**
     * EMV response data
     * @description Object of the response
     */
    emvResponseData?: IEMVResponseData;

    /**
     * Expiration
     * @description Expiration date of the card
     */
    expiration?: string;

    /**
     * Invoice number
     * @description Variable symbol
     */
    invoiceNumber?: string;

    /**
     * Is reversed
     * @description Information whether the transaction was reversed
     */
    isReversed?: boolean;

    /**
     * Merchant id acquirer
     * @description ID of the merchants acquirer
     */
    merchantIdAcquirer?: string;

    /**
     * Merchant id issuer
     * @description ID of the merchants issuer
     */
    merchantIdIssuer?: string;

    /**
     * PAN
     * @description Primary account number
     */
    pan?: string;

    /**
     * PAN sequence number
     * @description Sequence number of the primary account number
     */
    panSequenceNumber?: string;

    /**
     * Reversal
     * @description Information
     */
    reversal?: boolean;

    /**
     * Sequence number
     * @description Number of the sequence
     */
    sequenceNumber?: string;

    /**
     * Terminal id acquirer
     * @description ID of the acquirers terminal
     */
    terminalIdAcquirer?: string;

    /**
     * Terminal id issuer
     * @description ID of the issuers terminal
     */
    terminalIdIssuer?: string;
}