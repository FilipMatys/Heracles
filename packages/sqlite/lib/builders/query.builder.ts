// External modules
import { IQuery, ISchema, IPropertyDefinition } from "@calf/serializable";

// Parsers
import { SQLiteParser } from "../parsers/sqlite.parser";

/**
 * Query builder
 */
export class QueryBuilder<T> {

    // Init sqlite parser
    private sqLiteParser: SQLiteParser = new SQLiteParser();

    /**
     * Build select
     * @param select
     */
    private buildSelect(select: string[]): string {
        // Check if select is set
        if (!select || !select.length) {
            return "SELECT *";
        }

        // Otherwise return selected properties
        return `SELECT ${select.join(",")}`
    }

    /**
     * Build from
     * @param name 
     */
    private buildFrom(name: string): string {
        return `FROM ${name}`;
    }

    /**
     * Build limit
     * @param limit 
     */
    private buildLimit(limit: number): string {
        return `LIMIT ${limit}`;
    }

    /**
     * Build offset
     * @param offset 
     */
    private buildOffset(offset: number): string {
        return `OFFSET ${offset}`;
    }

    /**
     * Build order by
     * @param orderBy 
     */
    private buildOrderBy(orderBy: string[]): string {
        // Init list of columns to order by
        let columns: string[] = [];

        // Iterate through order by columns
        orderBy.forEach((ob) => {
            // Check for "-" sign
            if (ob.startsWith("-")) {
                // DESCENDING
                columns.push(`${ob.substr(1)} DESC`);
            }
            else {
                // ASCENDING
                columns.push(`${ob} ASC`);
            }
        });

        // Return order query
        return `ORDER BY ${columns.join(",")}`;
    }

    /**
     * Build where
     * @param schema 
     * @param payload 
     */
    private buildWhere(schema: ISchema<IPropertyDefinition>, payload: any): string {
        // Init query
        let dbQuery: string[] = ["WHERE"];

        // Create local parser function
        let parse = (payload: any): string => {
            // Init conditions
            let conditions: string[] = [];

            // Process payload
            Object.keys(payload).forEach((key) => {
                // Check for $and
                if (key === "$and") {
                    // Init and conditions
                    let andConditions: string[] = [];

                    // Parse conditions
                    payload[key].forEach((cond: any) => andConditions.push(parse(cond)));

                    // Add conditions
                    conditions.push(`${andConditions.join(" AND ")}`);
                }
                // Check for $or
                else if (key === "$or") {
                    // Init or conditions
                    let orConditions: string[] = [];

                    // Parse conditions
                    payload[key].forEach((cond: any) => orConditions.push(parse(cond)));

                    // Add conditions
                    conditions.push(`${orConditions.join(" OR ")}`);
                }
                // Else
                else {
                    // Check if key is in schema
                    if (!(key in schema.properties)) {
                        // Ignore key
                        return;
                    }

                    // Get value
                    let value: any = payload[key];

                    // Check if value is primitive or object with no operator
                    if (value !== Object(value) || !Object.keys(value).filter(k => k.startsWith("$")).length) {
                        // Add condition
                        conditions.push(`${key} = ${this.sqLiteParser.toSQLite(schema.properties[key], value)}`);
                    }
                    // Value is object with operator
                    else {
                        // TODO operator processing
                    }
                }
            });

            // Return conditions
            return `(${conditions.join(" AND ")})`;
        };

        // Parse payload
        dbQuery.push(parse(payload));

        // Return query
        return dbQuery.join(" ");
    }

    /**
     * Insert query
     * @param schema 
     * @param payload 
     */
    public insert(schema: ISchema<IPropertyDefinition>, payload: T): string {
        // Init query
        let dbQuery: string[] = [`INSERT INTO ${schema.entity.name}`];

        // Init list of fields and values
        let fields: string[] = [];
        let values: any[] = [];

        // We need to go through the schema properties
        Object.keys(schema.properties).forEach((key: string) => {
            // Get definition
            let definition = schema.properties[key];
            // Get value
            let value = (payload as any)[key];

            // Init db value
            let dbValue: any;

            // Check for value
            if (typeof (value) === undefined) {
                // Check for default value
                if (typeof (definition.default) === undefined) {
                    return;
                }
                else {
                    // Assign default value as db value
                    dbValue = this.sqLiteParser.toSQLite(definition, definition.default);
                }
            }
            else {
                dbValue = this.sqLiteParser.toSQLite(definition, value);
            }

            // Add field and value
            fields.push(key);
            values.push(dbValue);
        });

        // Add fields and values
        dbQuery.push(`(${fields.join(',')})`, "VALUES", `(${values.join(',')})`);

        // Return query
        return dbQuery.join(" ");
    }

    /**
     * Update query
     * @param schema 
     * @param query 
     * @param payload 
     */
    public update(schema: ISchema<IPropertyDefinition>, query: IQuery, payload: T): string {
        // Init query
        let dbQuery: string[] = ["UPDATE", schema.entity.name, "SET"];

        // Init list of updates
        let updates: string[] = [];

        // Iterate payload
        Object.keys(payload).forEach((key) => {
            // Check if key is in schema
            if (!(key in schema.properties)) {
                return;
            }

            // Add assignment
            updates.push(`${key}=${this.sqLiteParser.toSQLite(schema.properties[key], (payload as any)[key])}`);
        });

        // Add updates to db query
        dbQuery.push(updates.join(", "));

        // Check for where
        if (query.filter && Object.keys(query.filter).length) {
            dbQuery.push(this.buildWhere(schema, query.filter));
        }

        // Return query
        return dbQuery.join(" ");
    }

    /**
     * Update query
     * @param schema 
     * @param query 
     */
    public delete(schema: ISchema<IPropertyDefinition>, query: IQuery): string {
        // Init query
        let dbQuery: string[] = ["DELETE"];

        // From
        dbQuery.push(this.buildFrom(schema.entity.name));

        // Check for where
        if (query.filter && Object.keys(query.filter).length) {
            dbQuery.push(this.buildWhere(schema, query.filter));
        }

        // Return query
        return dbQuery.join(" ");
    }

    /**
     * Select query
     * @param schema 
     * @param query 
     */
    public select(schema: ISchema<IPropertyDefinition>, query: IQuery): string {
        // Init query
        let dbQuery: string[] = [];

        // Select
        dbQuery.push(this.buildSelect(query.select));
        // From
        dbQuery.push(this.buildFrom(schema.entity.name));

        // Check for where
        if (query.filter && Object.keys(query.filter).length) {
            dbQuery.push(this.buildWhere(schema, query.filter));
        }

        // Check for limit
        if (query.limit) {
            dbQuery.push(this.buildLimit(query.limit));
        }

        // Check for offset/skip
        if (query.skip) {
            dbQuery.push(this.buildOffset(query.skip));
        }

        // Check for order by
        if (query.sort && query.sort.length) {
            dbQuery.push(this.buildOrderBy(query.sort));
        }

        // Return query
        return dbQuery.join(" ");
    }

    /**
     * Count query
     * @param schema 
     * @param query 
     */
    public count(schema: ISchema<IPropertyDefinition>, query: IQuery): string {
        // Call select with COUNT(*)
        return this.select(schema, {
            ...query,
            populate: [],
            sort: [],
            select: ["COUNT(*)"]
        });
    }

    /**
     * Create table
     * @param schema 
     */
    public createTable(schema: ISchema<IPropertyDefinition>): string {
        // Init db query
        let dbQuery: string[] = ["CREATE TABLE IF NOT EXISTS", schema.entity.name];

        // Init fields list
        let fields: string[] = [];

        // Process fields
        Object.keys(schema.properties).forEach((key) => {
            // Add field
            fields.push(`${key} ${this.sqLiteParser.typeToSQLite(schema.properties[key].type)}`);
        });

        // Add fields to query
        dbQuery.push(`(${fields.join(", ")})`);

        // Return query
        return dbQuery.join(" ");
    }

    /**
     * Alter table columns
     * @param schema 
     */
    public alterTableColumns(schema: ISchema<IPropertyDefinition>): string[] {
        // Init queries
        let dbQueries: string[] = [];

        // Process fields
        Object.keys(schema.properties).forEach((key) => {
            // Add field
            dbQueries.push(`ALTER TABLE ${schema.entity.name} ADD COLUMN ${key} ${this.sqLiteParser.typeToSQLite(schema.properties[key].type)}`);
        });

        // Return queries
        return dbQueries;
    }
}