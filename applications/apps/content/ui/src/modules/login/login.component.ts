import "./login.component.scss";

import { AuthAction } from "@wraithlight/common.auth-sdk.client";
import { Store } from "@wraithlight/core.redux";
import m, { Children, Component } from "mithril";

import { ContentGlobalState } from "../../sdk";
import { ButtonComponent, InputComponent } from "../../shared/component";

import { LoginState } from "./login.model";

export class LoginComponent implements Component {

    private readonly _store = Store.getInstance<ContentGlobalState>();

    private readonly state: LoginState = {
        username: "",
        password: ""
    };

    private onNameChange(val: string): void {
        this.state.username = val;
    }

    private onPasswordChange(val: string): void {
        this.state.password = val;
    }

    private onSubmit(): void {
        this._store.dispatch(AuthAction.login(this.state.username, this.state.password));
    }

    public view(): Children {
        return m(
            "div.login",
            m("div.login-row", m(InputComponent, {
                label: "Username",
                elementId: "login-username",
                type: "input",
                onChange: (val: string) => this.onNameChange(val)
            })),
            m("div.login-row", m(InputComponent, {
                label: "Password",
                elementId: "login-password",
                type: "password",
                onChange: (val: string) => this.onPasswordChange(val)
            })),
            m("div.login-options", m(ButtonComponent, {
                label: "Log in",
                elementId: "login-submit",
                type: "primary",
                isDisabled: false,
                onClick: () => this.onSubmit()
            })),
        );
    }

}
