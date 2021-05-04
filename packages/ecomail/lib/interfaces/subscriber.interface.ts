/**
 * Subscriber
 * @description Subscriber interface
 */
export interface ISubscriber<TCustomFields> {
    id?: number;
    email?: string;
    status?: number;
    subscribed_at?: Date;
    unsubscribed_at?: Date;
    last_activity_at?: Date;
    custom_fields?: TCustomFields;
}