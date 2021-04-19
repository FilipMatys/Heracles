// Classes
import { HeliosProcedureParameter } from "../classes/parameter.class";
import { HeliosProcedureParameters } from "../classes/parameters.class";

// Enums
import { HeliosProcedureParameterType } from "../enums/paremeter-type.enum";

/**
 * Helios merchandise management documents procedure parameters
 * @description Parameters for merchandise management documents procedure
 */
export class HeliosMerchandiseManagementDocumentsRecalcProcedureParameters extends HeliosProcedureParameters {

    protected iDDoklad: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDDoklad", HeliosProcedureParameterType.INT,);
    public get IDDoklad(): number | undefined | null { return this.iDDoklad.Value; };
    public set IDDoklad(value: number | undefined | null) { this.iDDoklad.Value = value; };

    protected aktualizaceSlev: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("AktualizaceSlev", HeliosProcedureParameterType.BIT);
    public get AktualizaceSlev(): boolean | undefined | null { return this.aktualizaceSlev.Value; };
    public set AktualizaceSlev(value: boolean | undefined | null) { this.aktualizaceSlev.Value = value; };
}