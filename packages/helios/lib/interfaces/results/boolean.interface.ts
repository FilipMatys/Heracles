// Interfaces
import { IHeliosResultFields } from "../fields.interface";
import { IHeliosResult } from "./result.interface";

/**
 * Helios boolean result
 * @description Result bearing boolean result
 */
export interface IHeliosBooleanResult extends IHeliosResult<IHeliosResultFields<boolean>> { }