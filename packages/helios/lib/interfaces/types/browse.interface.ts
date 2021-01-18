// Interfaces
import { IHeliosDataSet } from "./data-set.interface";

/**
 * Browse interface
 */
export interface IHeliosBrowse {
    Caption?: string;
    Hint?: string;
    QueryBrowse?: IHeliosDataSet;
    CanModify?: boolean;
    MultiSelect?: boolean;
    ImageIndex?: number;
    IsTransfer?: boolean;
    Attributes?: string[];
    ActionName?: string;
    WindowCaption?: string;
    BrowseID?: number;
    BrowseIDDPSN?: string;
    BrowseName?: string;
    MainTable?: string;
    MainTablePublicName?: string;
    RecordCount?: number;
}