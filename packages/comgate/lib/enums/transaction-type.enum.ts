/**
 * Transaction type
 */
export enum TransactionType {
    SaleOnline = "SALE_ONLINE",
    SaleOffline = "SALE_OFFLINE",
    Preauthorization = "PREAUTHORIZATION",
    PreauthorizationCompletion = "PREAUTHORIZATION_COMPLETION",
    ReturnOnline = "RETURN_ONLINE",
    ReturnOffline = "RETURN_OFFLINE",
    CloseBatch = "CLOSE_BATCH",
    SubtotalBatch = "SUBTOTAL_BATCH",
    Handshake = "HANDSHAKE",
    Undefined = "UNDEFINED"
}