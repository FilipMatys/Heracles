// Constants
import { SERVICE_FACTORY_DEFAULT_CONTEXT } from "../constants/context.constanst";

// Factories
import { ServiceFactory } from "../factories/service.factory";

/**
 * Import decorator
 * @param clazz
 */
export function Import(name: string | (new() => any), context: string = SERVICE_FACTORY_DEFAULT_CONTEXT, enumerable: boolean = false, configurable: boolean = true) {
    
    /**
     * Property decorator function
     */
    return function (target: Object, key: string) {
        // Assign class instance to property
        Object.defineProperty(target, key, {
            get: () => {
                // Check if name is a string or a class
                if (typeof name === "string") {
                    return ServiceFactory.import(name, context);
                }

                // Otherwise try to create new instance
                return new name();
            },  
            enumerable: enumerable,
            configurable: configurable
        });
    }
}