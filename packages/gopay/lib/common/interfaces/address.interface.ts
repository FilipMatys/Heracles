/**
 * Address
 * @description Address
 */
export interface IAddress {

    /**
     * Street
     */
    street?: string;

    /**
     * Post code
     */
    postal_code?: string;

    /**
     * City
     */
    city?: string;

    /**
     * Country
     * @description Country code in ISO 3166-2
     */
    country?: string;
}