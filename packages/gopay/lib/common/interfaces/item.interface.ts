/**
 * Item
 * @description Item of the order
 */
export interface IItem {

    /**
     * Type
     * @description Type of row, for registration of sales
     */
    type?: string;

    /**
     * Product url
     * @description URL address of the product
     */
    product_url?: string;

    /**
     * EAN
     * @description EAN code of the product
     */
    ean?: string;

    /**
     * Count
     * @description Number of items
     */
    count?: number;

    /**
     * Amount
     * @description Total price of items in cents
     */
    amount?: number;

    /**
     * VAT rate
     * @description VAT rate, for registration of sales
     */
    vat_rate?: number;
}