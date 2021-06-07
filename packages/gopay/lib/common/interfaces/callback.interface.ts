/**
 * Callback
 * @description Definition of callback and notification URL
 */
export interface ICallback {

    /**
     * Return url
     * @description URL address for return to e-shop (with protocol)
     */
    return_url?: string;

    /**
     * Notification url
     * @description URL address for sending asynchronous notification in the case of changes in the payment status (with protocol)
     */
    notification_url?: string;
}