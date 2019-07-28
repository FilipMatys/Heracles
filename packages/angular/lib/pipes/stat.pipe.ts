// External modules
import { PipeTransform } from "@angular/core";

// Services
import { StatService } from "../services/stat.service";

/**
 * Abstract Stat pipe
 */
export abstract class StatPipe<T> implements PipeTransform {

    // Service
    protected abstract service: StatService<T>; 

    /**
     * Get label of given stat value
     * @param value 
     */
    public transform(value: any): string {
        return this.service.getLabel(value);
    }
}