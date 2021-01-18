// Interfaces
import { IHeliosGetBrowseParams } from "./get-browse.interface";

/**
 * Helios get browse special params
 */
export interface IHeliosGetBrowseSpecialParams extends IHeliosGetBrowseParams {
    IDFilter: string;
}