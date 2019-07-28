// External modules
import { OnInit } from "@angular/core";
import { Serializable, IQuery } from "@calf/serializable";

// Services
import { AngularService } from "../services/angular.service";

// Pages
import { SubscriberPage } from "./subscriber.page";
import { ValidationResult, IQueryResult } from "@calf/common";

/**
 * List page
 * @description List page loads list of entities
 */
export abstract class ListPage<TEntity extends Serializable, TMessage> extends SubscriberPage implements OnInit {

    /**
     * Constructor
     * @param service 
     */
    constructor(private service: AngularService<TEntity, TMessage>) {
        // Call super
        super();
    }

    /**
     * On init hook
     */
    public ngOnInit(): void {
        // Get list
        this.getList();
    }

    /**
     * Get list
     * @param query 
     */
    protected async getList(query: IQuery = {}): Promise<void> {
        // Get list of entities
        const validation = await this.service.getList(query);

        // Call on did get list hook
        await this.onDidGetList(validation);
    }

    /**
     * On did get list hook
     * @param validation 
     */
    protected abstract onDidGetList(validation: ValidationResult<IQueryResult<TEntity>, TMessage>): Promise<void>;
}