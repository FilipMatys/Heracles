// External modules
import { expect } from "chai";

// Import library
import { Property, PropertyType, Entity, Default, Required, Unique, Timestamp, SchemaParser } from "../lib/serializable";

@Entity("Person")
@Timestamp()
class Person {

    @Required()
    @Unique()
    @Property(PropertyType.DOUBLE)    
    public age: number = 0;

    @Property("name", PropertyType.TEXT)
    @Default<string>("Mr Smith")
    public name?: string = undefined;
}

// EXPORT TEST
describe("Serializable", () => {
    // Init parser
    let parser = new SchemaParser();

    console.log(parser.parse(Person));
});