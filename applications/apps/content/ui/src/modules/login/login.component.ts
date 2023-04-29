import "./login.component.scss";

import m, { Children, Component } from "mithril";

export class LoginComponent implements Component {

    public view(): Children {
        return m(
            "div.login",
            "login"
        );
    }

}
