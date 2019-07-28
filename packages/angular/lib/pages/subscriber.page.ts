// External modules
import { OnDestroy } from "@angular/core";

// Classes
import { Subscriber } from "../classes/subscriber.class";

/**
 * SubscriberPage
 * @description Subscriber page
 */
export class SubscriberPage extends Subscriber implements OnDestroy {

    /**
     * On destroy hook
     */
    public ngOnDestroy(): void {
        // Clear subscriptions
        this.clear();
    }
}