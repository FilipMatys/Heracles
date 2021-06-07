/**
 * Contact
 * @description Customer´s information
 */
export interface IContact {

    /**
     * First name
     */
    first_name?: string;

    /**
     * Last name
     */
    last_name?: string;

    /**
     * Email
     */
    email?: string;

    /**
     * Phone number
     * @description Phone number with country code
     */
    phone_number?: string;

    /**
     * City
     */
    city?: string;

    /**
     * Street
     */
    street?: string;

    /**
     * Postal code
     */
    postal_code?: string;

    /**
     * Country code
     * @description Country code in ISO 3166-1 alpha-3
     */
    country_code?: string;
}