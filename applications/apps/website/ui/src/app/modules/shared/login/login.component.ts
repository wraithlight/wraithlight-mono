import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, ViewEncapsulation } from "@angular/core";

import { AuthAction, AuthSelector, GLOBAL_STORE } from "../../../../sdk";

@Component({
    selector: "wl-login",
    templateUrl: "./login.component.html",
    styleUrls: [
        "./login.component.scss"
    ],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnDestroy {

    private readonly _store = GLOBAL_STORE();
    private readonly _stopFns: Array<() => void> = [];

    public isBusy = false;

    public username = "";
    public password = "";

    constructor(
        private readonly _cdr: ChangeDetectorRef
    ) {
        this._store
            .select(AuthSelector.isBusy)
            .onSelection((val, stopFn) => {
                console.log("aa");
                this.isBusy = val;
                this._stopFns.push(stopFn);
                this._cdr.markForCheck();
            })
        ;
    }

    public ngOnDestroy(): void {
        this._stopFns.forEach(m => m());
    }

    public isValid(): boolean {
        console.log(!!this.username && !!this.password);
        return !!this.username && !!this.password;
    }

    public onSubmit(): void {
        console.log("submit");
        this._store.dispatch(AuthAction.login(this.username, this.password));
    }

}
