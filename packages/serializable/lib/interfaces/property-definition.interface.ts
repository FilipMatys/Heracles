// Data
import { IDefault } from "./default.interface";
import { IProperty } from "./property.interface";
import { IRequired } from "./required.interface";
import { IUnique } from "./unique.interface";

// Property definition interface
export interface IPropertyDefinition extends IProperty, IDefault<any>, IRequired, IUnique {
    
}