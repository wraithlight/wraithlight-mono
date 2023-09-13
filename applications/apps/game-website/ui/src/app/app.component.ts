import "./app.component.scss";
import { addComponent } from "../framework";

class AppComponent {

}

addComponent(
    "game-website",
    require("./app.component.html").default,
    () => new AppComponent()
);
