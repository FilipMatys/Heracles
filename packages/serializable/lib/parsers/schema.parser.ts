// Data
import { ISchema } from "../interfaces/schema.interface";
import { IPropertyDefinition } from "../interfaces/property-definition.interface";

// Parsers
import { BaseParser } from "./base.parser";
import { EntityParser } from "./entity.parser";
import { PropertyParser } from "./property.parser";

export class SchemaParser extends BaseParser<ISchema<IPropertyDefinition>> {

    /**
     * Parse target
     * @param target 
     */
    public parse(target: new () => any): ISchema<IPropertyDefinition> {
        // Initialize schema
        const schema: ISchema<IPropertyDefinition> = { 
            entity: {},
            properties: {}
        };

        // Init parsers
        let eParser: EntityParser = new EntityParser();
        let pParser: PropertyParser = new PropertyParser();

        // Get entity definition
        schema.entity = eParser.parse(target);

        // Now we need to get target instance, otherwise we wont get access
        // to its properties
        let instance = new target();
        // And keep original
        const original = instance;

        // Initialize array of property names
        const propertyNames: string[] = this.getPropertyNames(instance);

        // Iterate each property name to get property definition
        propertyNames.forEach((name) => {
            // Get definition
            let pDefinition = pParser.parse(original, name);

            // Check if any definition was found
            if (!pDefinition) {
                return;
            }

            // Assign definition to schema
            // This condition is not needed, but typescript compilers
            // does not like it when it is not there
            if (schema.properties) {
                schema.properties[name] = pDefinition;
            }
        });

        // Return schema
        return schema;
    }

    /**
     * Get property names
     * @param target 
     */
    private getPropertyNames(target: Object): string[] {
        // Init result
        let names: string[] = [];

        // Get all properties, inluding those from prototypes
        for (; target != null; target = Object.getPrototypeOf(target)) {
            // Get own property names
            let op = Object.getOwnPropertyNames(target);

            // Iterate names
            for (var index = 0; index < op.length; index++) {
                // Add name to array if it is not already there
                if (names.indexOf(op[index]) == -1) {
                    names.push(op[index]);
                }
            }
        }

        // Return names
        return names;
    }
}