interface IDataSetTable {
    fieldcount: number;
    fields: IDataSetTableField[];
    recordcount: number;
    rows: IDataSetTableRow[];
}

interface IDataSetTableField {
    Name: string;
    DisplayName: string;
    DataType: string;
    Size: number;
    Precision: number;
    Required: boolean;
    Attributes: string[];
}

interface IDataSetTableRow extends Array<IDataSetTableRowField> { }

interface IDataSetTableRowField {
    FieldName: string;
    DisplayLabel: string;
    DisplayWidth: number;
    Value: string;
    DisplayFormat: string;
    Visible: boolean;
}

/**
 * Data set
 * @description Data set type
 */
export interface IHeliosDataSet {
    table: IDataSetTable;
}