// Property interfaces
export interface IProperty {
    name?: string;
    type?: number;
    value?: number;
    reference?: (new() => any) | string;
}

