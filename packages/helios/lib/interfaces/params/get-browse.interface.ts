// Interfaces
import { IHeliosParams } from "./params.interface";

/**
 * Helios get browse params
 */
export interface IHeliosGetBrowseParams extends IHeliosParams {
    BrowseName?: string;
    OrderBy?: string;
    Where?: string;
    MaxPocet?: number;
}