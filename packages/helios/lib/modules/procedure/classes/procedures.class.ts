// Classes
import { HeliosProcedure } from "./procedure.class";

// Parameters
import { HeliosCompaniesProcedureParameters } from "../parameters/companies.parameters";
import { HeliosCustomOrdersDocumentsProcedureParameters } from "../parameters/custom-orders-documents.parameters";
import { HeliosCustomOrdersTransactionsProcedureParameters } from "../parameters/custom-orders-transactions.parameters";
import { HeliosMerchandiseManagementDocumentsProcedureParameters } from "../parameters/merchandise-management-documents.parameters";
import { HeliosMerchandiseManagementTransactionsProcedureParameters } from "../parameters/merchandise-management-transactions.parameters";
import { HeliosMerchandiseManagementDocumentsRecalcProcedureParameters } from "../parameters/merchandise-management-documents-recalc.parameters";

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
        this.customOrdersDocuments = this.customOrdersDocuments || new HeliosProcedure(this.buildName("CustomOrdersDocuments"), HeliosCustomOrdersDocumentsProcedureParameters);

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
        this.customOrdersTransactions = this.customOrdersTransactions || new HeliosProcedure(this.buildName("CustomOrdersTransactions"), HeliosCustomOrdersTransactionsProcedureParameters);

        // Return customer orders transactions
        return this.customOrdersTransactions;
    }

    // Custom orders transactions
    private static customOrdersTransactions: HeliosProcedure<HeliosCustomOrdersTransactionsProcedureParameters>;

    /**
     * Merchandise management documents
     * @description Merchandise management documents
     */
    public static get MerchandiseManagementDocuments(): HeliosProcedure<HeliosMerchandiseManagementDocumentsProcedureParameters> {
        // Make sure documents is set
        this.merchandiseManagementDocuments = this.merchandiseManagementDocuments || new HeliosProcedure(this.buildName("MerchandiseManagementDocuments"), HeliosMerchandiseManagementDocumentsProcedureParameters);

        // Return merchandise management documents
        return this.merchandiseManagementDocuments;
    }

    // Merchandise management documents
    private static merchandiseManagementDocuments: HeliosProcedure<HeliosMerchandiseManagementDocumentsProcedureParameters>;

    /**
     * Merchandise management documents recalc
     * @description Merchandise management documents recalc
     */
    public static get MerchandiseManagementDocumentsRecalc(): HeliosProcedure<HeliosMerchandiseManagementDocumentsRecalcProcedureParameters> {
        // Make sure documents is set
        this.merchandiseManagementDocumentsRecalc = this.merchandiseManagementDocumentsRecalc || new HeliosProcedure(this.buildName("MerchandiseManagementDocumentsRecalc"), HeliosMerchandiseManagementDocumentsRecalcProcedureParameters);

        // Return merchandise management documents recalc
        return this.merchandiseManagementDocumentsRecalc;
    }

    // Merchandise management documents recalc
    private static merchandiseManagementDocumentsRecalc: HeliosProcedure<HeliosMerchandiseManagementDocumentsRecalcProcedureParameters>;

    /**
     * Merchandise management transactions
     * @description Merchandise management transactions
     */
    public static get MerchandiseManagementTransactions(): HeliosProcedure<HeliosMerchandiseManagementTransactionsProcedureParameters> {
        // Make sure transactions is set
        this.merchandiseManagementTransactions = this.merchandiseManagementTransactions || new HeliosProcedure(this.buildName("MerchandiseManagementTransactions"), HeliosMerchandiseManagementTransactionsProcedureParameters);

        // Return merchandise management transactions
        return this.merchandiseManagementTransactions;
    }

    // Merchandise management transactions
    private static merchandiseManagementTransactions: HeliosProcedure<HeliosMerchandiseManagementTransactionsProcedureParameters>;

    /**
     * Build procedure name
     * @param name 
     * @returns 
     */
    private static buildName(name: string): string {
        return `hpx_ASOL_API_${name}`;
    }
}