"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Constants
var context_constanst_1 = require("../constants/context.constanst");
/**
 * Service factory
 */
var ServiceFactory = /** @class */ (function () {
    // Make constructor private
    function ServiceFactory() {
    }
    ;
    /**
     * Expport class
     * @param constructor
     * @param name
     * @param context
     */
    ServiceFactory.export = function (constructor, name, context) {
        if (context === void 0) { context = context_constanst_1.SERVICE_FACTORY_DEFAULT_CONTEXT; }
        // Get name
        var cName = context + "." + name;
        // Check if instance of class exists
        if (!(cName in this.services)) {
            this.services[cName] = new constructor();
        }
        // Return instance of service
        return this.services[cName];
    };
    /**
     * Import class
     * @param name
     * @param context
     */
    ServiceFactory.import = function (name, context) {
        if (context === void 0) { context = context_constanst_1.SERVICE_FACTORY_DEFAULT_CONTEXT; }
        // Get name
        var cName = context + "." + name;
        // Check if instance of class exists
        if (!(cName in this.services)) {
            throw new Error("[Heracles@ServiceFactory.Import]: Trying to import undefined class " + name + ". Is the class missing Export decorator?");
        }
        // Return instance of service
        return this.services[cName];
    };
    // Dictionary of services
    ServiceFactory.services = {};
    return ServiceFactory;
}());
exports.ServiceFactory = ServiceFactory;
