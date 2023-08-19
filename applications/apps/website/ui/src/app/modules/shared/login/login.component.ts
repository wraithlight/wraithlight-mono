import { Component, OnDestroy, ViewEncapsulation } from "@angular/core";

import { AuthAction, AuthSelector, GLOBAL_STORE } from "../../../../sdk";

@Component({
    selector: "wl-login",
    templateUrl: "./login.component.html",
    styleUrls: [
        "./login.component.scss"
    ],
    encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnDestroy {

    private readonly _store = GLOBAL_STORE();
    private readonly _stopFns: Array<() => void> = [];

    public isBusy = false;

    public username = "";
    public password = "";

    constructor() {
        this._store
            .select(AuthSelector.isBusy)
            .onSelection((val, stopFn) => {
                this.isBusy = val;
                this._stopFns.push(stopFn);
            })
        ;
    }

    public ngOnDestroy(): void {
        this._stopFns.forEach(m => m());
    }

    public isValid(): boolean {
        return !!this.username && !!this.password;
    }

    public onSubmit(): void {
        this._store.dispatch(AuthAction.login(this.username, this.password));
    }

}
