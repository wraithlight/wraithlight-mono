import m, { Children, Component } from "mithril";

import {
    BodyComponent,
    HeaderComponent
} from "./shared/layout";

export class AppComponent implements Component {

    public view(): Children {
        return [
            m(HeaderComponent),
            m(BodyComponent)
        ];
    }

}
