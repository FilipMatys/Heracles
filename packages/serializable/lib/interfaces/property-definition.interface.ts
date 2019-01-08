// Data
import { IDefault } from "./default.interface";
import { IProperty } from "./property.interface";
import { IRequired } from "./required.interface";
import { IUnique } from "./unique.interface";
import { IArray } from "./array.interface";
import { IIndexed } from "./indexed.interface";

// Property definition interface
export interface IPropertyDefinition extends IProperty, IDefault<any>, IRequired, IUnique, IArray, IIndexed {
    
}