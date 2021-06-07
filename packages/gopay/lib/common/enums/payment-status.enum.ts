/**
 * Payment status
 * @description Payment can gain values following status
 */
export enum PaymentStatus {
    CREATED = "CREATED",
    PAYMENT_METHOD_CHOSEN = "PAYMENT_METHOD_CHOSEN",
    PAID = "PAID",
    AUTHORIZED = "AUTHORIZED",
    CANCELED = "CANCELED",
    TIMEOUTED = "TIMEOUTED",
    REFUNDED = "REFUNDED",
    PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED"
}