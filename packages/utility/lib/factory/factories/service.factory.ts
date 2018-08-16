// Interfaces
import { IFactoryServices } from "../interfaces/factory-services.interface";

// Constants
import { SERVICE_FACTORY_DEFAULT_CONTEXT } from "../constants/context.constanst";

/**
 * Service factory
 */
export class ServiceFactory {
    // Make constructor private
    private constructor() { };

    // Dictionary of services
    private static services: IFactoryServices = {};

    /**
     * Expport class
     * @param constructor 
     * @param name 
     * @param context
     */
    public static export<T>(constructor: { new(): T }, name: string, context: string = SERVICE_FACTORY_DEFAULT_CONTEXT): T {
        // Get name
        let cName = `${context}.${name}`;

        // Check if instance of class exists
        if (!(cName in this.services)) {
            this.services[cName] = new constructor();
        }

        // Return instance of service
        return this.services[cName];
    }

    /**
     * Import class
     * @param name 
     * @param context 
     */
    public static import(name: string, context: string = SERVICE_FACTORY_DEFAULT_CONTEXT): any {
        // Get name
        let cName = `${context}.${name}`;

        // Check if instance of class exists
        if (!(cName in this.services)) {
            throw new Error(`[Heracles@ServiceFactory.Import]: Trying to import undefined class ${name}. Is the class missing Export decorator?`);
        }

        // Return instance of service
        return this.services[cName];
    }
}