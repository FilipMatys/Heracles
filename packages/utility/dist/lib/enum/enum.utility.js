"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Enum utility
 */
var Enum = /** @class */ (function () {
    function Enum() {
    }
    /**
     * Get enum values
     * @param payload
     */
    Enum.getValues = function (payload) {
        // Init result
        var result = [];
        // Iterate keys
        for (var item in payload) {
            // Try to convert item to number
            var number = Number(item);
            // Now check if isNaN
            if (!isNaN) {
                result.push(number);
            }
        }
        // Return result
        return result;
    };
    /**
     * Get enum names
     */
    Enum.getNames = function (payload) {
        // Init result
        var result = [];
        // Iterate keys
        for (var item in payload) {
            // Try to convert item to number
            var number = Number(item);
            // Now check if isNaN
            if (isNaN(number)) {
                result.push(item);
            }
        }
        // Return result
        return result;
    };
    /**
     * Get name of given value
     * @param payload
     * @param value
     */
    Enum.getName = function (payload, value) {
        return payload[value];
    };
    /**
     * Get value of given name
     * @param payload
     * @param name
     */
    Enum.getValue = function (payload, name) {
        return payload[name];
    };
    return Enum;
}());
exports.Enum = Enum;
