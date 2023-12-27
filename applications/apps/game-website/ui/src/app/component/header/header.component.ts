import { addComponent } from "../../../framework";
import "./header.component.scss";

class HeaderComponent {

}

addComponent(
    "game-website-header",
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("./header.component.html").default,
    () => new HeaderComponent()
);
