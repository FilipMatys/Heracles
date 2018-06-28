// External modules
import { expect } from "chai";

// Import library
import { Enum, Export, Import } from "../lib/core";

// Create class and export it
@Export(SomeClass)
class SomeClass {
    // Value
    public value = 0;

    // I am working
    public iAmWorking(): boolean {
        return true;
    }
}

// Now create new class wich uses the class above
class SomeOtherClass    {

    // Import some class
    @Import("SomeClass")
    public someClass: SomeClass;

    // Import the same class
    @Import(SomeClass)
    public sameClass: SomeClass;
}

// Create instance if some other class
var someOtherClass = new SomeOtherClass();

// EXPORT TEST
describe("Export/Import", () => {
    it("Should import", () => {
        expect(someOtherClass.someClass).not.equal(null);
    });

    it("Should call method from imported class", () => {
        expect(someOtherClass.someClass.iAmWorking()).is.equal(true);
    });

    it("Should the same imported/exported service share a value", () => {
        someOtherClass.someClass.value = 3;
        expect(someOtherClass.someClass.value).equals(someOtherClass.sameClass.value);
    });
});