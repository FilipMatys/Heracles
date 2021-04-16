// Classes
import { HeliosProcedure } from "./procedure.class";

// Parameters
import { HeliosCompaniesProcedureParameters } from "../parameters/companies.parameters";
import { HeliosCustomOrdersDocumentsProcedureParameters } from "../parameters/custom-orders-documents.parameters";
import { HeliosCustomOrdersTransactionsProcedureParameters } from "../parameters/custom-orders-transactions.parameters";

/**
 * Helios procedures
 */
export class HeliosProcedures {

    /**
     * Companies
     * @description Companies procedure
     */
    public static get Companies(): HeliosProcedure<HeliosCompaniesProcedureParameters> {
        // Make sure companies is set
        this.companies = this.companies || new HeliosProcedure(this.buildName("Companies"), HeliosCompaniesProcedureParameters);

        // Return companies
        return this.companies;
    }

    // Companies procedure
    private static companies: HeliosProcedure<HeliosCompaniesProcedureParameters>;

    /**
     * Custom orders documents
     * @description Customer orders documents 
     */
    public static get CustomOrdersDocuments(): HeliosProcedure<HeliosCustomOrdersDocumentsProcedureParameters> {
        // Make sure custom orders documents is set
        this.customOrdersDocuments = this.customOrdersDocuments || new HeliosProcedure("CustomOrdersDocuments", HeliosCustomOrdersDocumentsProcedureParameters);

        // Return customer orders documents
        return this.customOrdersDocuments;
    }

    // Custom orders documents
    private static customOrdersDocuments: HeliosProcedure<HeliosCustomOrdersDocumentsProcedureParameters>;

    /**
     * Custom orders transactions
     * @description Customer orders transactions 
     */
    public static get CustomOrdersTransactions(): HeliosProcedure<HeliosCustomOrdersTransactionsProcedureParameters> {
        // Make sure custom orders transactions is set
        this.customOrdersTransactions = this.customOrdersTransactions || new HeliosProcedure("CustomOrdersTransactions", HeliosCustomOrdersTransactionsProcedureParameters);

        // Return customer orders transactions
        return this.customOrdersTransactions;
    }

    // Custom orders transactions
    private static customOrdersTransactions: HeliosProcedure<HeliosCustomOrdersTransactionsProcedureParameters>;

    /**
     * Build procedure name
     * @param name 
     * @returns 
     */
    private static buildName(name: string): string {
        return `hpx_ASOL_API_${name}`;
    }
}