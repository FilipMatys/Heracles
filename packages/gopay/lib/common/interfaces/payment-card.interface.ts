/**
 * Payment card
 * @description Payment card´s information
 */
export interface IPaymentCard {

    /**
     * Card number
     * @description Masked payment card´s number
     */
    card_number?: string;

    /**
     * Card expiration
     * @description Expiration date
     */
    card_expiration?: string;

    /**
     * Card brand
     * @description Payment card´s brand
     */
    card_brand?: string;

    /**
     * Card issuer (county)
     * @description Country code of issuing bank
     */
    card_issuer_country?: string;

    /**
     * Card issuer (bank)
     * @description Issuing bank
     */
    card_issuer_bank?: string;
}