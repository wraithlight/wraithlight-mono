import { addComponent } from "../../../framework";
import "./header.component.scss";

class HeaderComponent {

}

addComponent(
    "game-website-header",
    require("./header.component.html").default,
    () => new HeaderComponent()
);
