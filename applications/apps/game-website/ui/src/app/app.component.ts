import "./app.component.scss";
import { template } from "./app.component.html";

import { addComponent } from "../framework";

class AppComponent {

}

addComponent(
    "game-website",
    template,
    () => new AppComponent()
);
