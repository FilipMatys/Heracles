// External modules
import "reflect-metadata";

// Data
import { IPropertyDefinition } from "../interfaces/property-definition.interface";
import { IProperty } from "../interfaces/property.interface";
import { IDefault } from "../interfaces/default.interface";
import { IRequired } from "../interfaces/required.interface";
import { IUnique } from "../interfaces/unique.interface";

// Symbols
import { DEFAULT_METADATA_KEY } from "../symbols/default.symbol";
import { PROPERTY_METADATA_KEY } from "../symbols/property.symbol";
import { REQUIRED_METADATA_KEY } from "../symbols/required.symbol";
import { UNIQUE_METADATA_KEY } from "../symbols/unique.symbol";

// Parsers
import { BaseParser } from "./base.parser";

/**
 * Property parser
 */
export class PropertyParser extends BaseParser<IPropertyDefinition> {

    /**
     * Parse propery
     * @param target 
     * @param property 
     */
    public parse(target: Object, name: string): IPropertyDefinition | undefined {
        // First get all sub definitions
        // Property
        let property = this.getProperty(target, name);

        // Check property
        if (!property) {
            return undefined;
        }

        // Default
        let lDefault = this.getDefault(target, name);

        // Required
        let required = this.getRequired(target, name);

        // Unique
        let unique = this.getUnique(target, name);

        // Now merge those into one
        return Object.assign({}, property, lDefault, required, unique);
    }

    /**
     * Get property
     * @param target 
     * @param property 
     */
    private getProperty(target: Object, name: string): IProperty {
        // Get data from metadata
        return Reflect.getMetadata(PROPERTY_METADATA_KEY, target, name);
    }

    /**
     * Get default
     * @param target 
     * @param name 
     */
    private getDefault(target: Object, name: string): IDefault<any> {
        // Init default definition
        let lDefault: IDefault<any> = { default: null };

        // Assign data from metadata
        return Object.assign(lDefault, Reflect.getMetadata(DEFAULT_METADATA_KEY, target, name) || {});
    }

    /**
     * Get required
     * @param target 
     * @param name 
     */
    private getRequired(target: Object, name: string): IRequired {
        // Init required definition
        let required: IRequired = { isRequired: false };

        // Assign data from metadata
        return Object.assign(required, Reflect.getMetadata(REQUIRED_METADATA_KEY, target, name) || {});
    }

    /**
     * Get unique
     * @param target 
     * @param name 
     */
    private getUnique(target: Object, name: string): IUnique {
        // Init unique definition
        let unique: IUnique = { isUnique: false };

        // Assign data from metadata
        return Object.assign(unique, Reflect.getMetadata(UNIQUE_METADATA_KEY, target, name) || {});
    }
}