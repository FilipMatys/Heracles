// Classes
import { HeliosProcedureParameters } from "./parameters.class";

/**
 * Helios procedure
 * @description Helios procedure
 */
export class HeliosProcedure<TParameters extends HeliosProcedureParameters> {

    /**
     * Name
     * @description Procedure name getter
     */
    public get Name(): string {
        return this.name;
    }

    /**
     * Parameters
     * @description Procedure parameters getter
     */
    public get Parameters(): new (value?: string) => TParameters {
        return this.parameters;
    }

    /**
     * Name
     * @description Name of the procedure
     */
    private name: string;

    /**
     * Parameters
     * @description Procedure parameters
     */
    private parameters: new () => TParameters;

    /**
     * Constructor
     * @param name 
     * @param parameters
     */
    constructor(name: string, parameters: new (value?: string) => TParameters) {
        // Assign values
        this.name = name;
        this.parameters = parameters;
    }
}