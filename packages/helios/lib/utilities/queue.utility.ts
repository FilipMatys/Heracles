// Classes
import { HeliosConfig } from "../classes/config.class";

/**
 * Queue utility
 */
export class Queue {

    // Number of active jobs in queue
    private static activeCount: number = 0;

    // Jobs in queue
    private static jobs: Function[] = [];

    /**
     * Do not allow new instances
     */
    private constructor() { }

    /**
     * Enqueue function
     * @param func
     */
    public static async enqueue(func: Function): Promise<any> {
        // Check for active count
        if (++this.activeCount > 1) {
            // Create new promise
            await new Promise<void>((resolve) => this.jobs.push(resolve));
        }

        try {
            // Execute function
            return await func();
        }
        catch (err) {
            // Throw err
            throw err;
        }
        finally {
            // Delay
            await this.delay();

            // Decrease active count
            this.activeCount--;

            // Shift queue if needed
            if (this.jobs.length) {
                // Execute next job
                (this.jobs.shift() as Function)();
            }
        }
    }

    /**
     * Delay execution
     */
    private static async delay(): Promise<void> {
        // Check for Helios requests delay
        if (!HeliosConfig.delayBetweenRequests) {
            // Nothing to do
            return;
        }

        // Set timeout to delay execution
        return new Promise<void>((resolve) => setTimeout(() => resolve(), HeliosConfig.delayBetweenRequests));
    }
}