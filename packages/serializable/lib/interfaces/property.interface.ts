// Property interfaces
export interface IProperty {
    name?: string;
    type?: number | [number];
    value?: number;
    reference?: (new() => any) | string;
}

