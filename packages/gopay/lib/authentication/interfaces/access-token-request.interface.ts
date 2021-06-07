/**
 * Authentication access token request
 * @description Interface for access token request
 */
export interface IAccessTokenRequest {

    /**
     * Scope
     * @description Defines a category of functionalities that can operate a given action
     */
    scope: string;

    /**
     * Grant type
     * @description Type of grant
     */
    grant_type: string;
}