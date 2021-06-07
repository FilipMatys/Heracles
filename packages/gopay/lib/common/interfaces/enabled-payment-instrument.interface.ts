// Interfaces
import { IEnabledSwift } from "./enabled-swift.interface";
import { IGroup } from "./group.interface";
import { IImage } from "./image.interface";
import { ILabel } from "./label.interface";

/**
 * Enabled payment instrument
 */
export interface IEnabledPaymentInstrument {

    /**
     * Payment instrument
     * @description Code of instrument
     */
    paymentInstrument?: string;

    /**
     * Label
     * @description Object that contains localized name of payment method
     */
    label?: ILabel;

    /**
     * Image
     * @description Logo of payment method available in two formats
     */
    image?: IImage;

    /**
     * Group
     * @description Group into which payment method belongs
     */
    group?: IGroup;

    /**
     * Enabled swifts
     * @description Each sub object represents allowed banks for payment method. It is set only for BANK_ACCOUNT
     */
    enabledSwifts?: IEnabledSwift[];
}