// External modules
import "reflect-metadata";

// Symbols
import { PROPERTY_METADATA_KEY } from "../symbols/property.symbol";

// Data
import { IProperty } from "../interfaces/property.interface";

// Property overloads
export function Property(type: number): any;
export function Property(type: number, value: number): any;
export function Property(type: number, reference: new() => any): any;
export function Property(type: number, reference: string): any;
export function Property(type: [number]): any;
export function Property(type: [number], value: number): any;
export function Property(type: [number], reference: new() => any): any;
export function Property(type: [number], reference: string): any;
export function Property(name: string, type: number): any;
export function Property(name: string, type: number, value: number): any;
export function Property(name: string, type: number, reference: new() => any): any;
export function Property(name: string, type: number, reference: string): any;
export function Property(name: string, type: [number]): any;
export function Property(name: string, type: [number], value: number): any;
export function Property(name: string, type: [number], reference: new() => any): any;
export function Property(name: string, type: [number], reference: string): any;

/**
 * Property decorator
 */
export function Property(arg1: number | string | [number], arg2?: number | (new() => any) | string | [number], arg3?: number | (new() => any) | string): any  {
    // Init property
    const property: IProperty = {};

    // Check for first argument
    if (typeof arg1 === "number" || arg1 instanceof Array) {
        // Assign type
        property.type = arg1;

        // Check for arg2
        if (arg2) {
            if (typeof arg2 === "number") {
                // Assign value
                property.value = arg2;
            }
            else {
                // Assign 
                property.reference = arg2 as (new () => any);
            }
        }
    }
    else {
        // Assign name
        property.name = arg1 as string;

        // Assign type
        property.type = arg2 as any;

        // Check for arg3
        if (arg3) {
            if (typeof arg3 === "number") {
                // Assign value
                property.value = arg3;
            }
            else {
                // Assign 
                property.reference = arg3;
            }
        }
    }

    // Set metadata
    return Reflect.metadata(PROPERTY_METADATA_KEY, property);
}