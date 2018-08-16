// Constants
import { SERVICE_FACTORY_DEFAULT_CONTEXT } from "../constants/context.constanst";

// Factories
import { ServiceFactory } from "../factories/service.factory";

/**
 * Export decorator
 * @param name 
 * @param context 
 */
export function Export<T>(clazz: new() => any, name: string = clazz.name, context: string = SERVICE_FACTORY_DEFAULT_CONTEXT) {

    // Export clazz if name is set
    ServiceFactory.export(clazz, name, context);

    /**
     * Modify constructor
     */
    return function (constructor: { new(): T }) {

        // Preserve original
        const original = constructor;

        // Construct function
        function construct(constructor: { new(): T }) {
            // Create constructor
            var c: any = function (this: any) {
                return constructor.apply(this);
            }

            // Assign prototype
            c.prototype = constructor.prototype;

            // Create new instance
            return ServiceFactory.export(c, name, context);
        }

        // Constructor behaviour
        var f: any = function () {
            return construct(original);
        }

        // Copy prototype
        f.prototype = original.prototype;

        // Return new 
        return f;
    }
}