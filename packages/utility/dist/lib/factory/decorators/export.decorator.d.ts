/**
 * Export decorator
 * @param name
 * @param context
 */
export declare function Export<T>(clazz: new () => any, name?: string, context?: string): (constructor: new () => T) => any;
