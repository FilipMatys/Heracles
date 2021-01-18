// Interfaces
import { IHeliosResultFields } from "../fields.interface";
import { IHeliosResult } from "./result.interface";

/**
 * Helios integer result
 * @description Result bearing integer result
 */
export interface IHeliosIntegerResult extends IHeliosResult<IHeliosResultFields<number>> { }