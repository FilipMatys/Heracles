/**
 * Disposable interface
 */
export interface IDisposable {
    dispose(): Promise<void> | void;    
}