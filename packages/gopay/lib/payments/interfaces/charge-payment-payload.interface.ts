// Interfaces
import { IEET } from "../../common/interfaces/eet.interface";
import { IItem } from "../../common/interfaces/item.interface";

/**
 * Charge payment payload
 * @description Interface for charge payment payload
 */
export interface IChargePaymentPayload {

    /**
     * Amount
     * @description Required amount of the capture in cents
     */
    amount: number;

    /**
     * Items
     * @description Itemized in detail each item of the order
     */
    items: IItem[];

    /**
     * EET
     * @description EET parameters (required for registration of sales functionality)
     */
    eet?: IEET;
}