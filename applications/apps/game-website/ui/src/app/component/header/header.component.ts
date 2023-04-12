import { addComponent } from "../../../framework";
import "./header.component.scss";

export class HeaderComponent {

}

addComponent(
    "game-website-header",
    require("./header.component.html").default,
    () => new HeaderComponent()
);
