// Interfaces
import { ISubscriber } from "./subscriber.interface";

/**
 * Subscriber response
 * @description Interface for subscriber response
 */
export interface ISubscriberResponse<TCustomFields> {

    /**
     * Subscriber
     */
    subscriber?: ISubscriber<TCustomFields>;
}