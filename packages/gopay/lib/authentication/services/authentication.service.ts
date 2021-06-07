// External modules
import fetch from "node-fetch";
import { HeadersInit, } from "node-fetch";

// Interfaces
import { ICallbackFn } from "../../common/interfaces/callback-fn.interface";
import { IAccessTokenRequest } from "../interfaces/access-token-request.interface";
import { IAccessTokenResponse } from "../interfaces/access-token-response.interface";

// Services
import { RequestService } from "../../common/services/request.service";

/**
 * Authentication service
 * @description GoPay uses REST API for authorization of the access to API principal OAuth2.0.
 */
export class AuthenticationService extends RequestService {

    /**
     * Base
     * @description Base for service
     */
    protected base: string[] = ["oauth2"];

    /**
     * Token
     * @description The basic element of all communication via REST API is an access token that is created by using the access data in the form of <ClientID>:<ClientSecret>. 
     * A token is set as an authorization parameter in HTTP request header through Authorization: Bearer <Access-Token>. This token is set for every requirement for API. 
     * Token expires after 30 minutes. After expiry of the token, it is necessary to create a new access token.
     * @param payload 
     * @param callback 
     */
    public async token(payload: IAccessTokenRequest, callback?: ICallbackFn<IAccessTokenResponse>): Promise<IAccessTokenResponse> {
        try {
            // Create new url
            const url = new URL([this._host, ...this.base, "token"].join("/"));

            // Make post request
            const response = await fetch(url, {
                // Set method
                method: "post",
                // Set body 
                body: Object.entries(payload).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&"),
                // Set headers
                headers: this.getRequestHeaders(),
            });

            // Get result
            const result = await response.json() as IAccessTokenResponse;

            // Check for callback
            callback && callback(undefined, response, result);

            // Return result
            return result;
        }
        catch (error) {
            // Check for callback
            callback && callback(error, undefined, undefined);

            // Rethrow error
            throw error;
        }
    }

    /**
     * Get request headers
     * @param args 
     */
    protected getRequestHeaders(...args: any[]): HeadersInit {
        // Create request headers
        return {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${Buffer.from(this._clientId + ":" + this._clientSecret).toString("base64")}`
        }
    }
}