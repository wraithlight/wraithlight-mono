import "./header.component.scss";
import html from "./header.component.html";

import { addComponent } from "../../../framework";

class HeaderComponent {

}

addComponent(
    "game-website-header",
    html,
    () => new HeaderComponent()
);
