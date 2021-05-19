// External modules
import { Subscription } from "rxjs";

/**
 * Subscriber
 * @description 
 */
export class Subscriber {

    // Dictionary of subscriptions
    protected subscriptions: { [name: string]: Subscription } = {};

    /**
     * Register subscription by given name
     * @param name 
     * @param subscription 
     */
    protected register(name: string, subscription: Subscription): void {
        // Assign subscription
        this.subscriptions[name] = subscription;
    }

    /**
     * Unregister subscription 
     * @param name 
     */
    protected unregister(name: string): void {
        // Unsubscribe subscription
        this.subscriptions[name] && this.subscriptions[name].unsubscribe();
    }

    /**
     * Clear 
     */
    protected clear(): void {
        // Unregister all subscriptions
        Object.keys(this.subscriptions).forEach((s) => this.unregister(s));
    }
}