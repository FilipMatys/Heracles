/**
 * EET code
 * @description Information about registration of sales
 */
export interface IEETCode {

    /**
     * FIK
     * @description Fiscal identification code (FIK)
     */
    fik?: string;

    /**
     * BKP
     * @description Security code of the taxpayer (BKP)
     */
    bkp?: string;

    /**
     * PKP
     * @description Signature code of the taxpayer (PKP)
     */
    pkp?: string;
}