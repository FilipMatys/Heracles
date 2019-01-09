// External modules
import { SchemaParser as BaseSchemaParser, ISchema, PropertyType, EntityParser } from "@calf/serializable";
import { SchemaTypeOpts, SchemaTypes } from "mongoose";

/**
 * Schema parser
 */
export class SchemaParser extends BaseSchemaParser {


    /**
     * Parse given target
     * @param target 
     */
    public parse(target: new () => any): ISchema<SchemaTypeOpts<any>> {
        // Parse target
        let schema = super.parse(target);

        // Init parsers
        let eParser: EntityParser = new EntityParser();

        // Process properties
        Object.keys(schema.properties).forEach((name) => {
            // Init options
            let sTypeOptions: SchemaTypeOpts<any> = {};

            // Get property definition
            let definition = schema.properties[name];

            // First check if type is defined
            if (typeof definition.type === "undefined") {
                throw new Error(`[Geph@SchemaParser]: Undefined property type for "${name}" in "${schema.entity.name}"`);
            }

            // Check property type
            switch (definition.type) {
                // REFERENCE
                case PropertyType.REFERENCE:
                    // Make sure reference is defined
                    if (typeof definition.reference === "undefined") {
                        throw new Error(`[Geph@SchemaParser]: Missing type reference for "${name}" in "${schema.entity.name}"`);
                    }

                    // Assign type
                    sTypeOptions.type = SchemaTypes.ObjectId;

                    // Check if reference is a string
                    if (typeof definition.reference === "string") {
                        // Assign reference
                        sTypeOptions.ref = definition.reference;
                    }
                    else {
                        // Reference is an object
                        sTypeOptions.ref = eParser.parse(definition.reference).name;
                    }

                    break;

                // EMBEDDED
                case PropertyType.EMBEDED:
                    // Make sure reference is defined
                    if (typeof definition.reference === "undefined") {
                        throw new Error(`[Geph@SchemaParser]: Missing type reference for "${name}" in "${schema.entity.name}"`);
                    }

                    // Assign type
                    sTypeOptions.type = this.parse(definition.reference as new () => any).properties;

                    break;

                // DATE
                case PropertyType.DATE:
                    sTypeOptions.type = SchemaTypes.Date;
                    break;

                // NUMBER
                case PropertyType.DOUBLE:
                case PropertyType.INT:
                    sTypeOptions.type = SchemaTypes.Number;
                    break;

                // MIXED
                case PropertyType.MIXED:
                    sTypeOptions.type = SchemaTypes.Mixed;
                    break;

                // TEXT
                case PropertyType.STRING:
                case PropertyType.TEXT:
                    sTypeOptions.type = SchemaTypes.String;
                    break;

                // BOOLEAN
                case PropertyType.BOOLEAN:
                    sTypeOptions.type = SchemaTypes.Boolean;
                    break;

                // BUFFER
                case PropertyType.BUFFER:
                    sTypeOptions.type = SchemaTypes.Buffer;
                    break;

                // OID
                case PropertyType.OID:
                    sTypeOptions.type = SchemaTypes.ObjectId;
                    break;

                // Unknown
                default:
                    throw new Error(`[Geph@SchemaParser]: Invalid property type for "${name}" in "${schema.entity.name}"`);
            }

            // Boolean values
            sTypeOptions.required = !!definition.isRequired;
            sTypeOptions.unique = !!definition.isUnique;
            sTypeOptions.index = !!definition.isIndexed;

            // Check for default
            if (typeof definition.default !== "undefined") {
                // Assign default
                sTypeOptions.default = definition.default;
            }

            // Check if property is array
            if (definition.isArray) {
                // Assign options as array
                schema.properties[name] = [sTypeOptions] as any;
            }
            else {
                // Assign options
                schema.properties[name] = sTypeOptions;
            }
        });

        // Return schema
        return schema;
    }
}