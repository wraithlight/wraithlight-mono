import "./header.component.scss";
import m, { Children, Component } from "mithril";

export class HeaderComponent implements Component {

    public view(): Children {
        return m(
            "div.header",
            m(
                "div.title",
                m(
                    "span",
                    "Content"
                )
            ),
            m(
                "div.settings",
                m(
                    "span",
                    "User info here"
                )
            )
        );
    }

}
