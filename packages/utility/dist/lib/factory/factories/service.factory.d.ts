/**
 * Service factory
 */
export declare class ServiceFactory {
    private constructor();
    private static services;
    /**
     * Expport class
     * @param constructor
     * @param name
     * @param context
     */
    static export<T>(constructor: {
        new (): T;
    }, name: string, context?: string): T;
    /**
     * Import class
     * @param name
     * @param context
     */
    static import(name: string, context?: string): any;
}
