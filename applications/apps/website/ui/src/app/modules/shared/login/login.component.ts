import { Component, OnDestroy, ViewEncapsulation } from "@angular/core";
import { AuthAction, AuthSelector } from "@wraithlight/common.auth-sdk.client";
import { isNil } from "@wraithlight/core.nullable";
import { Store } from "@wraithlight/core.redux";

import { WebsiteGlobalState } from "../../../../sdk";

@Component({
    selector: "wl-login",
    templateUrl: "./login.component.html",
    styleUrls: [
        "./login.component.scss"
    ],
    encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnDestroy {

    private readonly _store = Store.getInstance<WebsiteGlobalState>();
    private readonly _stopFns: Array<() => void> = [];

    public isBusy = false;

    public username = "";
    public password = "";

    constructor() {
        this._store
            .select(AuthSelector.isBusy)
            .onSelection((val, stopFn) => {
                if(isNil(val)) return;
                this.isBusy = val;
                this._stopFns.push(stopFn);
            })
        ;
    }

    public ngOnDestroy(): void {
        this._stopFns.forEach(m => m());
    }

    /** @public */
    public onSubmit(): void {
        this._store.dispatch(AuthAction.login(this.username, this.password));
    }

}
