import "./body.component.scss";
import m, { Children, Component } from "mithril";

import { LoginComponent } from "../../../modules";

export class BodyComponent implements Component {

    public view(): Children {
        return m("div.body",
            m("div.body-content",
                m(LoginComponent)
            )
        );
    }

}
