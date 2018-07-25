// External modules
import { expect } from "chai";

import { ValidationResult } from "../lib/common";

describe("ValidationResult", () => {
    // Init validation
    const validation = new ValidationResult<{
        text: string,
        isTrue: boolean,
        defined: any,
        notDefined: any
    }, string>({
        text: "sometext",
        isTrue: true,
        defined: "sf",
        notDefined: undefined
    });

    it("isTrue [Success]", () => {
        expect(validation.isTrue(t => t.isTrue, "")).equal(true);
    });

    it("isTrue [Fail]", () => {
        expect(validation.isTrue(t => !t.isTrue, "")).equal(false);
    });

    it("isFalse [Success]", () => {
        expect(validation.isFalse(t => !t.isTrue, "")).equal(true);
    });

    it("isFalse [Fail]", () => {
        expect(validation.isFalse(t => t.isTrue, "")).equal(false);
    });

    it("isDefined [Success]", () => {
        expect(validation.isDefined(t => t.defined, "")).equal(true);
    });

    it("isDefined [Fail]", () => {
        expect(validation.isDefined(t => t.notDefined, "")).equal(false);
    });
});