import { InputComponent } from "../../shared/component";
import "./login.component.scss";

import m, { Children, Component } from "mithril";
import { LoginState } from "./login.model";

export class LoginComponent implements Component {

    private state: LoginState = {
        username: "",
        password: ""
    };

    private onNameChange(val: string): void {
        this.state.username = val;
    }

    private onPasswordChange(val: string): void {
        this.state.password = val;
    }

    public view(): Children {
        return m(
            "div.login",
            m("div.login-row", m(InputComponent, {
                label: "Username",
                elementId: "login-username",
                type: "input",
                onChange: this.onNameChange.bind(this)
            })),
            m("div.login-row", m(InputComponent, {
                label: "Password",
                elementId: "login-password",
                type: "password",
                onChange: this.onNameChange.bind(this)
            })),
        );
    }

}
