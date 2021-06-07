// Interfaces
import { IImage } from "./image.interface";
import { ILabel } from "./label.interface";

/**
 * Enabled swift
 * @description Enabled swift object
 */
export interface IEnabledSwift {

    /**
     * Swift
     * @description Enabled swift name
     */
    swift?: string;

    /**
     * Label
     * @description Object that contains localized name of bank
     */
    label?: ILabel;

    /**
     * Image
     * @description Logo of bank available in two formats
     */
    image?: IImage;

    /**
     * Is online
     * @description State that symbolize if bank supports online bank transfers
     */
    isOnline?: boolean;
}