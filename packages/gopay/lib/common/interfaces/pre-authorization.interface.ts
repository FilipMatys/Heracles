/**
 * Pre authorization
 * @description Object describing pre-authorization
 */
export interface IPreAuthorization {

    /**
     * Requested
     * @description Requested flag
     */
    requested?: boolean;

    /**
     * State
     * @description State of request
     */
    state?: string;
}