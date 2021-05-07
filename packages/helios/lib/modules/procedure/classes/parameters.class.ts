// Classes
import { HeliosProcedureParameter } from "./parameter.class";

// Enums
import { HeliosProcedureParameterType } from "../enums/parameter-type.enum";
import { HeliosProcedureActionType } from "../enums/action-type.enum";
import { HeliosProcedureResultSelect } from "../enums/result-select.enum";

/**
 * Helios procedure params
 * @description Params of helios procedure
 */
export class HeliosProcedureParameters {

    /**
     * ID
     * @description Entity ID
     */
    protected id: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("ID", HeliosProcedureParameterType.INT);
    public get ID(): number | undefined | null { return this.id.Value; };
    public set ID(value: number | undefined | null) { this.id.Value = value };

    /**
     * Error message
     * @description Procedure error message
     */
    protected errorMsg: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("ErrorMsg", HeliosProcedureParameterType.NVARCHAR, null);
    public get ErrorMsg(): string | undefined | null { return this.errorMsg.Value; };
    public set ErrorMsg(value: string | undefined | null) { this.errorMsg.Value = value };

    /**
     * Error number
     * @description Procedure error number
     */
    protected errorNum: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("ErrorNum", HeliosProcedureParameterType.INT, null);
    public get ErrorNum(): number | undefined | null { return this.errorNum.Value; };
    public set ErrorNum(value: number | undefined | null) { this.errorNum.Value = value };

    /**
     * Action
     * @description Procedure action
     */
    protected action: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Action", HeliosProcedureParameterType.INT, HeliosProcedureActionType.INSERT);
    public get Action(): number | undefined | null { return this.action.Value; };
    public set Action(value: number | undefined | null) { this.action.Value = value };

    /**
     * ResultSELECT
     * @description Procedure result select
     */
    protected resultSelect: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("ResultSELECT", HeliosProcedureParameterType.BIT, HeliosProcedureResultSelect.SELECT);
    public get ResultSELECT(): number | undefined | null { return this.resultSelect.Value; };
    public set ResultSELECT(value: number | undefined | null) { this.resultSelect.Value = value };

    /**
     * Language
     * @description Procedure language
     */
    protected language: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Language", HeliosProcedureParameterType.SMALLINT, 1);
    public get Language(): number | undefined | null { return this.language.Value; };
    public set Language(value: number | undefined | null) { this.language.Value = value; };

    /**
     * Legislation
     * @description Procedure legislation
     */
    protected legislation: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Legislation", HeliosProcedureParameterType.TINYINT, 0);
    public get Legislation(): number | undefined | null { return this.legislation.Value; };
    public set Legislation(value: number | undefined | null) { this.legislation.Value = value; };

    /**
     * Constructor
     * @param value Helios response string
     */
    constructor(value?: string) {
        // Check if value is set
        if (!value) {
            // Do nothing
            return;
        }

        // Fill parameters from string
        this.fromString(value);
    }

    /**
     * To string
     * @returns 
     */
    public toString(): string {
        // Init result
        const params: string[] = [];

        // Iterate params
        for (const [_, value] of Object.entries(this)) {
            // Check if property is param
            if (!(value instanceof HeliosProcedureParameter)) {
                // Skip this property
                continue;
            }

            // Get param
            const param = value as HeliosProcedureParameter<any>;

            // Check if param value is defined
            if (typeof param.Value === "undefined") {
                // Skip this param
                continue;
            }

            // Add to result
            params.push((value as HeliosProcedureParameter<any>).toString());
        }

        // Join params
        return params.join(", ");
    }

    /**
     * Generate parameters from string
     * @param value 
     */
    public fromString(value: string): void {
        // Parse value into list of string params
        const stringParams = value.split(";");
        // Pop last params (as it is undefined)
        stringParams.pop();

        // Process each string param
        for (let index = 0; index < stringParams.length; index++) {
            // Get string param
            const stringParam = stringParams[index];

            // Get name and raw value
            const [rawName, rawValue] = stringParam.split("=");

            // Get name
            const name = rawName.slice(1);

            // Get value
            const value = rawValue.replace(/\'/g, "");

            // Get param by name
            const param = this.getByName(name);

            // Check if param was found
            if (!param) {
                // Skip param
                continue;
            }

            // Set value from string
            param.fromString(value);
        }
    }


    /**
     * Get by name
     * @description Get parameter by name
     * @param name 
     */
    public getByName(name: string): HeliosProcedureParameter<void> | undefined {
        // Iterate params
        for (const [_, value] of Object.entries(this)) {
            // Check if property is param
            if (!(value instanceof HeliosProcedureParameter)) {
                // Skip this property
                continue;
            }

            // Get param
            const param = value as HeliosProcedureParameter<any>;

            // Check param name
            if (param.Name !== name) {
                // Skip this param
                continue;
            }

            // Return param
            return param;
        }

        // Return undefined as no 
        // param was found
        return undefined;
    }
}