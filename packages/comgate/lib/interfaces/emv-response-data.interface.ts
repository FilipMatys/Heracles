/**
 * EMV response data
 * @description Object of the response
 */
export interface IEMVResponseData {

    /**
     * Smart card scheme
     * @description Scheme of the smart card
     */
    smartCardScheme?: number;

    /**
     * Authorization response code
     * @description The response code of authorization
     */
    authorizationResponseCode?: number;
}