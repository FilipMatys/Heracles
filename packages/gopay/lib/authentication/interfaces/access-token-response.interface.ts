/**
 * Authentication access token response
 * @description Interface for access token response
 */
export interface IAccessTokenResponse {

    /**
     * Token type
     * @description Type of token
     */
    token_type: string;

    /**
     * Access token
     * @description Access token value
     */
    access_token: string;

    /**
     * Expires in
     * @description Token expiry time in seconds
     */
    expires_in: number;

    /**
     * Refresh token
     * @description Refresh token value
     */
    refresh_token?: string;
}