// Interfaces
import { IHeliosResultFields } from "./fields.interface";

/**
 * Helios result
 * @description Helios basic result
 */
export interface IHeliosResult<TFields = IHeliosResultFields> {

    /**
     * Type
     * @description Result type
     */
    type: string;

    /**
     * Id
     * @description Not described field
     */
    id: number;

    /**
     * Result fields
     * @description Fields of received result
     */
    fields: TFields;
}