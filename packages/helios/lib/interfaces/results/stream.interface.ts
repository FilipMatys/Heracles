// Interfaces
import { IHeliosResultFields } from "../fields.interface";
import { IHeliosResult } from "./result.interface";

/**
 * Helios stream result
 * @description Result bearing stream result
 */
export interface IHeliosStreamResult extends IHeliosResult<IHeliosResultFields<string>> {
    /**
     * File type
     * @description Type of file
     */
    FileType?: string;
}