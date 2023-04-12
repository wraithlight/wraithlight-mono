import "./body.component.scss";

import { addComponent } from "../../../framework";

export class BodyComponent {

}

addComponent(
    "game-website-body",
    require("./body.component.html").default,
    () => new BodyComponent()
);