/**
 * Import decorator
 * @param clazz
 */
export declare function Import(name: string | (new () => any), context?: string, enumerable?: boolean, configurable?: boolean): (target: Object, key: string) => void;
