// External modules
import { Serializable } from "@calf/serializable";

// Data
import { FilterType } from "./filter-type.enum";

// Services
import { AngularService } from "../../services/angular.service";

/** Filter item */
export class FilterItem<TValue> {

    // Type
    private type: number;

    // Value
    public value: TValue;

    // Service
    private service?: AngularService<TValue, any>;

    /**
     * Constructor
     * @param type 
     * @param value 
     * @param service
     */
    constructor(type: number, value: TValue, service?: AngularService<TValue, any>) {
        // Assign type
        this.type = type;

        // Assign value
        this.value = value;

        // Assign service
        this.service = service;
    }

    /**
     * Check if value is set
     */
    public isSet(): boolean {
        return (typeof this.value !== 'undefined')
            && this.value !== null
            && (this.value as any) !== ''
            && (!(this.value instanceof Array) || this.value.length !== 0);
    }

    /**
     * Convert filter item value 
     * to param value
     */
    public toParam(): any {
        // Get param value
        switch (this.type) {
            // Serializable
            case FilterType.SERIALIZABLE:
                return (this.value as Serializable)._id;
            // Date
            case FilterType.DATE:
                return (<Date>(this.value as any)).toISOString();
            // All other
            case FilterType.NUMBER:
            case FilterType.TEXT:
            case FilterType.ARRAY:
            default:
                return this.value;
        
        }
    }

    /**
     * Get value from param
     * @param value 
     */
    public fromParam(value: any) {
        // Get value from param value
        switch (this.type) {
            // Serializable
            case FilterType.SERIALIZABLE:
                (this.value as Serializable) = { _id: value };
                break;
            // Number
            case FilterType.NUMBER:
                (<number>(this.value as any)) = parseFloat(value);
                break;
            // Date
            case FilterType.DATE:
                (<Date>(this.value as any)) = new Date(value);
                break;
            // Array
            case FilterType.ARRAY:
                (<any[]>(this.value as any)) = value instanceof Array ? value : [value];
                break;

            // All other
            case FilterType.TEXT:
            default:
                this.value = value;
        }

        // We might also need to load serializable
        if (this.type === FilterType.SERIALIZABLE && this.service) {
            // Get serializable
            this.service.get(this.value)
                .then((validation) => {
                    // Check validation
                    if (!validation.isValid) {
                        return;
                    }

                    // Assign data
                    this.value = validation.data as TValue;
                });
        }
    }
}