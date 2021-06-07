// Interfaces
import { IBankAccount } from "./bank-account.interface";
import { IContact } from "./contact.interface";
import { IPaymentCard } from "./payment-card.interface";

/**
 * Payer
 * @description Definition of the payer or the payment
 */
export interface IPayer {
    
    /**
     * Allowed payment instruments
     * @description Array of allowed payment methods
     */
    allowed_payment_instruments?: string[];

    /**
     * Default payment instrument
     * @description Preferred payment method
     */
    default_payment_instrument?: string;

    /**
     * Default swift
     * @description Preferred bank if default_payment_instrument is set to BANK_ACCOUNT, set by SWIFT code
     */
    default_swift?: string;

    /**
     * Allowed swifts
     * @description Array of allowed bank codes
     */
    allowed_swifts?: string[];

    /**
     * Bank account
     * @description Bank account´s information
     */
    bank_account?: IBankAccount;

    /**
     * Payment card
     * @description Payment card´s information
     */
    payment_card?: IPaymentCard;

    /**
     * Contact
     * @description Customer´s data
     */
    contact?: IContact;

    /**
     * Verify PIN
     * @description PIN for identification payment purposes
     */
    verify_pin?: string;

    /**
     * Allowed card token
     * @description Token for identification payment purposes
     */
    allowed_card_token?: string;
}