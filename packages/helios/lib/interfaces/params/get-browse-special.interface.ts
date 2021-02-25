// Interfaces
import { IHeliosParams } from "./params.interface";

/**
 * Helios get browse special params
 */
export interface IHeliosGetBrowseSpecialParams extends IHeliosParams {
    BrowseName?: string;
    OrderBy?: string;
    IDFilter: string;
}