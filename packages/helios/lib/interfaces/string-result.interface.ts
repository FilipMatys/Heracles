// Interfaces
import { IHeliosResultFields } from "./fields.interface";
import { IHeliosResult } from "./result.interface";

/**
 * Helios string result
 * @description Result bearing string result
 */
export interface IHeliosStringResult extends IHeliosResult<IHeliosResultFields<string>> { }