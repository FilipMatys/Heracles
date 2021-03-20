// External modules
import { IPropertyDefinition, ISchema, SchemaParser as BaseSchemaParser } from "@calf/serializable";

/**
 * Schema parser
 */
export class SchemaParser extends BaseSchemaParser {

    /**
     * Parse target
     * @param target 
     */
     public parse(target: new () => any): ISchema<IPropertyDefinition> {
        // Get base schema
        const schema = super.parse(target);

        // Make sure to remove all "." from schema entity name
        schema.entity.name = schema.entity.name.replace(/\./g, "_");

        // Return schema
        return schema;
     }
}