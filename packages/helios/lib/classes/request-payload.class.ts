/**
 * Helios request payload
 * @description Request payload used for post communication
 */
export class HeliosRequestPayload<TParams, TResponse = any> {

    /**
     * Parameters
     * @description Payload content
     */
    public _parameters: any[] = [];

    /**
     * Request constructor
     * @param params 
     * @param response 
     */
    constructor(params: TParams, response?: TResponse) {
        // Check if response is set
        if (response) {
            // Assign both params and response
            this._parameters = [params, response];
        }
        else {
            // Only assign params
            this._parameters = [params];
        }
    }
}