/**
 * EET
 * @description Parameters for registration of sales
 */
export interface IEET {

    /**
     * DIC
     * @description DIČ of the entrustment taxpayer
     */
    dic_poverujiciho?: string;

    /**
     * Celk. trzba
     * @description The total amount
     */
    celk_trzba?: number;

    /**
     * Zakl nepodl dph
     * @description The total amount of supplies exempt from VAT
     */
    zakl_nepodl_dph?: number;

    /**
     * Zakl dan1
     * @description The total tax base amount, the basic VAT rate
     */
    zakl_dan1?: number;

    /**
     * Dan1
     * @description The total amount of VAT, the basic rate
     */
    dan1?: number;

    /**
     * Zakl dan2
     * @description The total tax base amount with a first reduced rate of VAT
     */
    zakl_dan2?: number;

    /**
     * Dan2
     * @description The total VAT amount with a first reduced rate
     */
    dan2?: number;

    /**
     * Zakl dan2
     * @description The total tax base amount with a second reduced rate of VAT
     */
    zakl_dan3?: number;

    /**
     * Dan3
     * @description The total VAT amount with a second reduced rate
     */
    dan3?: number;

    /**
     * Cest sluz
     * @description The total amount of the VAT regime for travel service
     */
    cest_sluz?: number;

    /**
     * Pouzit zboz1
     * @description The total amount of the VAT regime for the sale of used goods with a basic rate
     */
    pouzit_zboz1?: number;


    /**
     * Pouzit zboz2
     * @description The total amount of the VAT regime for the sale of used goods with a first reduced rate
     */
    pouzit_zboz2?: number;

    /**
     * Pouzit zboz3
     * @description The total amount of the VAT regime for the sale of used goods with a second reduced rate
     */
    pouzit_zboz3?: number;

    /**
     * Urceno cerp zuct
     * @description The total amount of payments designated for subsequent pumping or settlement
     */
    urceno_cerp_zuct?: number;

    /**
     * Cerp zuct
     * @description The total amount of payments which are followed by pumping or settlement of the payment
     */
    cerp_zuct?: string;

    /**
     * Menu
     * @description Currency of the parameters
     */
    mena?: string;
}