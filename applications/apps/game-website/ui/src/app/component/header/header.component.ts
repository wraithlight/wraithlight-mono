import "./header.component.scss";
import { template } from "./header.component.html"

import { addComponent } from "../../../framework";

class HeaderComponent {

}

addComponent(
    "game-website-header",
    template,
    () => new HeaderComponent()
);
