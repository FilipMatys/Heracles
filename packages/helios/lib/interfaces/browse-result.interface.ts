// Interfaces
import { IHeliosBrowse } from "./browse.interface";
import { IHeliosResultFields } from "./fields.interface";
import { IHeliosResult } from "./result.interface";

/**
 * Helios browse result
 * @description Result bearing browse result
 */
export interface IHeliosBrowseResult extends IHeliosResult<IHeliosResultFields<IHeliosBrowse>> { }