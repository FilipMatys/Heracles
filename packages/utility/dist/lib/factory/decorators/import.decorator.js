"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Constants
var context_constanst_1 = require("../constants/context.constanst");
// Factories
var service_factory_1 = require("../factories/service.factory");
/**
 * Import decorator
 * @param clazz
 */
function Import(name, context, enumerable, configurable) {
    if (context === void 0) { context = context_constanst_1.SERVICE_FACTORY_DEFAULT_CONTEXT; }
    if (enumerable === void 0) { enumerable = false; }
    if (configurable === void 0) { configurable = true; }
    /**
     * Property decorator function
     */
    return function (target, key) {
        // Assign class instance to property
        Object.defineProperty(target, key, {
            get: function () {
                // Check if name is a string or a class
                if (typeof name === "string") {
                    return service_factory_1.ServiceFactory.import(name, context);
                }
                // Otherwise try to create new instance
                return new name();
            },
            enumerable: enumerable,
            configurable: configurable
        });
    };
}
exports.Import = Import;
