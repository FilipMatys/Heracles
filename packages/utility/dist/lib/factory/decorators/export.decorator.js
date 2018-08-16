"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Constants
var context_constanst_1 = require("../constants/context.constanst");
// Factories
var service_factory_1 = require("../factories/service.factory");
/**
 * Export decorator
 * @param name
 * @param context
 */
function Export(clazz, name, context) {
    if (name === void 0) { name = clazz.name; }
    if (context === void 0) { context = context_constanst_1.SERVICE_FACTORY_DEFAULT_CONTEXT; }
    // Export clazz if name is set
    service_factory_1.ServiceFactory.export(clazz, name, context);
    /**
     * Modify constructor
     */
    return function (constructor) {
        // Preserve original
        var original = constructor;
        // Construct function
        function construct(constructor) {
            // Create constructor
            var c = function () {
                return constructor.apply(this);
            };
            // Assign prototype
            c.prototype = constructor.prototype;
            // Create new instance
            return service_factory_1.ServiceFactory.export(c, name, context);
        }
        // Constructor behaviour
        var f = function () {
            return construct(original);
        };
        // Copy prototype
        f.prototype = original.prototype;
        // Return new 
        return f;
    };
}
exports.Export = Export;
