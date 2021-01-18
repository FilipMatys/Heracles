// Interfaces
import { IHeliosParams } from "./params.interface";

/**
 * Helios get browse params
 */
export interface IHeliosGetBrowseParams extends IHeliosParams {
    BrowseName?: string;
    OrderBy?: string;
    MaxPocet?: number;
    Where?: string;
}