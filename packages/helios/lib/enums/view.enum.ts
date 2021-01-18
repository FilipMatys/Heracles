/**
 * Helios view
 * @description Available basic views
 */
export class HeliosView {

    // Make constructor private
    private constructor() {}

    // Set prefixes
    private static readonly PREFIXES: string[] = ["hvw", "ASOL", "API"];

    /**
     * Offer price names
     * @description TabCisNC
     */
    public static get OfferPriceNames(): string {
        return this.generateViewName("OfferPriceNames");
    }

    /**
     * Offer prices
     * @description TabNc
     */
    public static get OfferPrices(): string {
        return this.generateViewName("OfferPrices");
    }

    /**
     * Customer orders documents
     * @description TabDosleObjH02
     */
    public static get CustOrdersDocuments(): string {
        return this.generateViewName("CustOrdersDocuments");
    }

    /**
     * Customer orders transactions
     * @description TabDosleObjR02
     */
    public static get CustOrdersTransactions(): string {
        return this.generateViewName("CustOrdersTransactions");
    }

    /**
     * Goods and services
     * @description TabKmenZbozi
     */
    public static get GoodsAndServices(): string {
        return this.generateViewName("GoodsAndServices");
    }

    /**
     * Contact persons
     * @description TabCisKOs
     */
    public static get ContactPersons(): string {
        return this.generateViewName("ContactPersons");
    }

    /**
     * Contacts contact persons
     * @description TabKontakty
     */
    public static get ContactsContactPersons(): string {
        return this.generateViewName("ContactsContactPersons");
    }

    /**
     * Contacts companies
     * @description TabKontakty
     */
    public static get ContactsCompanies(): string {
        return this.generateViewName("ContactsCompanies");
    }

    /**
     * Contacts employees
     * @description TabKontakty
     */
    public static get ContactsEmployees(): string {
        return this.generateViewName("ContactsEmployees");
    }

    /**
     * Cost pools
     * @description TabNakladovyOkruh
     */
    public static get CostPools(): string {
        return this.generateViewName("CostPools");
    }

    /**
     * Related goods groups
     * @description TabSoz
     */
    public static get RelatedGoodsGroups(): string {
        return this.generateViewName("RelatedGoodsGroups");
    }

    /**
     * Related goods groups (relations)
     * @description TabSozNa
     */
    public static get RelatedGoodsGroupsGS(): string {
        return this.generateViewName("RelatedGoodsGroupsGS");
    }

    /**
     * Period
     * @description TabObdobi
     */
    public static get Period(): string {
        return this.generateViewName("Period");
    }

    /**
     * Organizational structure
     * @description TabStrom
     */
    public static get OrganizationalStructure(): string {
        return this.generateViewName("OrganizationalStructure");
    }

    /**
     * Goods groups
     * @description TabSkupinyZbozi
     */
    public static get GoodsGroups(): string {
        return this.generateViewName("GoodsGroups");
    }

    /**
     * Stock level
     * @description TabStavSkladu
     */
    public static get StockLevel(): string {
        return this.generateViewName("StockLevel");
    }

    /**
     * Vehicles
     * @description TabIVozidlo
     */
    public static get Vehicles(): string {
        return this.generateViewName("Vehicles");
    }

    /**
     * Job orders
     * @description TabZakazka
     */
    public static get JobOrders(): string {
        return this.generateViewName("JobOrders");
    }

    /**
     * Employees
     * @description TabCisZam
     */
    public static get Employees(): string {
        return this.generateViewName("Employees");
    }

    /**
     * Country
     * @description TabZeme
     */
    public static get Country(): string {
        return this.generateViewName("Country");
    }

    /**
     * Transport method
     * @description TabFormaDopravy
     */
    public static get TransportMethod(): string {
        return this.generateViewName("TransportMethod");
    }

    /**
     * Companies
     * @description TabCisOrg
     */
    public static get Companies(): string {
        return this.generateViewName("Companies");
    }

    /**
     * Generate view name
     * @param identifier 
     */
    private static generateViewName(identifier: string): string {
        // Generate view name from prefixes and identifier
        return [...this.PREFIXES, identifier].join("_");
    }
}