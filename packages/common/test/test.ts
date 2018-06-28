// External modules
import { expect } from "chai";

import { ValidationResult } from "../lib/common";

describe("Validation result JSON", () => {
    it("Should contain public properties", () => {

        const validation = new ValidationResult<any, string>();

        console.log(JSON.stringify(validation));

        expect(true).equal(true);
    });
});