import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    ViewEncapsulation
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import {
    AccountAction,
    AccountSelector } from "@wraithlight/common.auth-sdk.client";
import { Store } from "@wraithlight/core.redux";

import { WebsiteGlobalState } from "../../../../sdk";

import { CONTROL_NAMES, CONTROL_VALIDATORS } from "./register.const";

@Component({
    selector: "wl-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnDestroy {

    private readonly _store = Store.getInstance<WebsiteGlobalState>();
    private readonly _stopFns: Array<() => void> = [];

    public readonly form = this.createForm();

    constructor(
        private readonly _cdr: ChangeDetectorRef
    ) {
        this._store.select(AccountSelector.errors).onSelection((m, s) => {
            this._stopFns.push(s);
            this._cdr.markForCheck();
        });
        this._store.select(AccountSelector.isBusy).onSelection((m, s) => {
            this._stopFns.push(s);
            this._cdr.markForCheck();
        });
        this._store.select(AccountSelector.userRegister).onSelection((m, s) => {
            this._stopFns.push(s);
            this._cdr.markForCheck();
        });
    }

    public ngOnDestroy(): void {
        this._stopFns.forEach(m => m());
    }

    /** @public */
    public onSubmit(): void {
        this._store.dispatch(AccountAction.register(
            this.form.controls[CONTROL_NAMES.username].value,
            this.form.controls[CONTROL_NAMES.password].value,
            this.form.controls[CONTROL_NAMES.passwordVerify].value,
            this.form.controls[CONTROL_NAMES.emailAddress].value,
        ));
    }

    private createForm(): FormGroup {
        return new FormGroup({
            [CONTROL_NAMES.username]: new FormControl("", { validators: CONTROL_VALIDATORS[CONTROL_NAMES.username] }),
            [CONTROL_NAMES.password]: new FormControl("", { validators: CONTROL_VALIDATORS[CONTROL_NAMES.password] }),
            [CONTROL_NAMES.passwordVerify]: new FormControl("", { validators: CONTROL_VALIDATORS[CONTROL_NAMES.passwordVerify] }),
            [CONTROL_NAMES.emailAddress]: new FormControl("", { validators: CONTROL_VALIDATORS[CONTROL_NAMES.emailAddress] }),
        });
    }

}

