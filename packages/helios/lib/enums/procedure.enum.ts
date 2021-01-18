/**
 * Helios procedure
 * @description Available basic procedures
 */
export class HeliosProcedure {

    // Make constructor private
    private constructor() {}

    // Set prefixes
    private static readonly PREFIXES: string[] = ["dbo.hpx", "ASOL", "API"];

    /**
     * Companies
     * @description TabCisOrg
     */
    public static get Companies(): string {
        return this.generateProcedureName("Companies");
    }

    /**
     * Goods and services
     * @description TabKmenZbozi
     */
    public static get GoodsAndServices(): string {
        return this.generateProcedureName("GoodsAndServices");
    }

    /**
     * Merchandise management documents
     * @description TabDokladyZbozi
     */
    public static get MerchandiseManagementDocuments(): string {
        return this.generateProcedureName("MerchandiseManagementDocuments");
    }

    /**
     * Merchandise management transactions
     * @description TabPohybyZbozi
     */
    public static get MerchandiseManagementTransactions(): string {
        return this.generateProcedureName("MerchandiseManagementTransactions");
    }

    /**
     * Merchandise management transactions txt
     * @description TabOZTxtPol
     */
    public static get MerchandiseManagementTransactionsTxt(): string {
        return this.generateProcedureName("MerchandiseManagementTransactionsTxt");
    }

    /**
     * Merchandise management documents recalc
     * @description TabDokladyZbozi
     */
    public static get MerchandiseManagementDocumentsRecalc(): string {
        return this.generateProcedureName("MerchandiseManagementDocumentsRecalc");
    }

    /**
     * Custom orders documents
     * @description TabDosleObjH02
     */
    public static get CustomOrdersDocuments(): string {
        return this.generateProcedureName("CustomOrdersDocuments");
    }

    /**
     * Custom order transactions
     * @description TabDosleObjR02
     */
    public static get CustomOrdersTransactions(): string {
        return this.generateProcedureName("CustomOrdersTransactions");
    }

    /**
     * Accounting journal
     * @description TabDenikImp
     */
    public static get AccountingJournal(): string {
        return this.generateProcedureName("AccountingJournal");
    }

    /**
     * Accounting journal execute import
     * @description TabDenik
     */
    public static get AccountingJournal_ExecuteImport(): string {
        return this.generateProcedureName("AccountingJournal_ExecuteImport");
    }

    /**
     * Accounting journal clear import
     * @description TabDenik
     */
    public static get AccountingJournal_ClearImport(): string {
        return this.generateProcedureName("AccountingJournal_ClearImport");
    }

    /**
     * Organizational structure
     * @description TabStrom
     */
    public static get OrganizationalStructure(): string {
        return this.generateProcedureName("OrganizationalStructure");
    }

    /**
     * Cost pools
     * @description TabNakladovyOkruh
     */
    public static get CostPools(): string {
        return this.generateProcedureName("CostPools");
    }

    /**
     * Vehicles
     * @description TabIVozidlo
     */
    public static get Vehicles(): string {
        return this.generateProcedureName("Vehicles");
    }

    /**
     * Job orders
     * @description TabZakazka
     */
    public static get JobOrders(): string {
        return this.generateProcedureName("JobOrders");
    }

    /**
     * Employees
     * @description TabCisZam
     */
    public static get Employees(): string {
        return this.generateProcedureName("Employees");
    }

    /**
     * Assortment
     * @description TabSortiment
     */
    public static get Assortment(): string {
        return this.generateProcedureName("Assortment");
    }

    /**
     * Generate procedure name
     * @param identifier 
     */
    private static generateProcedureName(identifier: string): string {
        // Generate procedure name from prefixes and identifier
        return [...this.PREFIXES, identifier].join("_");
    }
}