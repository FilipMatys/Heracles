// Interfaces
import { IHeliosDialog } from "./dialog.interface";
import { IHeliosResultFields } from "./fields.interface";
import { IHeliosResult } from "./result.interface";

/**
 * Helios dialog result
 * @description Result bearing dialog result
 */
export interface IHeliosDialogResult extends IHeliosResult<IHeliosResultFields<IHeliosResult<IHeliosDialog>>> { }