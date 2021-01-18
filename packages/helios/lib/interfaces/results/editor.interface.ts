// Interfaces
import { IHeliosEditor } from "../types/editor.interface";
import { IHeliosResultFields } from "../fields.interface";
import { IHeliosResult } from "./result.interface";

/**
 * Helios editor result
 * @description Result bearing editor result
 */
export interface IHeliosEditorResult extends IHeliosResult<IHeliosResultFields<IHeliosEditor>> {

    /**
     * Editor type
     * @description TODO 
     */
    EditorType?: any;
}