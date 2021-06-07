// Interfaces
import { IAdditionalParams } from "../../common/interfaces/additional-params.interface";
import { ICallback } from "../../common/interfaces/callback.interface";
import { IEET } from "../../common/interfaces/eet.interface";
import { IItem } from "../../common/interfaces/item.interface";
import { IPayer } from "../../common/interfaces/payer.interface";
import { ITarget } from "../../common/interfaces/target.interface";

/**
 * Payment payload
 * @description Before initiating the payment gateway, it is necessary to establish the payment. In effect of calling, we repeat parameters of the payment including the parameter gw_url, which you can initiate to inline or redirect payment gateway.
 */
export interface IPaymentPayload {

    /**
     * Payer
     * @description The object describing the payer of the payment
     */
    payer: IPayer;

    /**
     * Target
     * @description The object describing the target of the payment (payee)
     */
    target: ITarget;

    /**
     * Amount
     * @description Amount in cents
     */
    amount: number;

    /**
     * Currency
     * @description Currency of payment, format corresponds to ISO 4217
     */
    currency: string;

    /**
     * Order number
     * @description Identification of the order within the point of sale
     */
    order_number: string;

    /**
     * Order description
     * @description Description of goods / service
     */
    order_description?: string;

    /**
     * Items
     * @description Itemized in detail each item of the order
     */
    items?: IItem[];

    /**
     * EET
     * @description EET parameters (required for registration of sales functionality)
     */
    eet?: IEET;

    /**
     * Callback
     * @description Callback URL for processing of the payment result / Notification URL for processing of change of payment status
     */
    callback: ICallback;

    /**
     * Additional params
     * @description Additional payment parameters
     */
    additional_params?: IAdditionalParams[];

    /**
     * Lang
     * @description Parameters defines language of the payment
     */
    lang?: string;

    /**
     * Pre-authorization
     * @description Activation of pre-authorized payment
     */
    preauthorization?: boolean;
}