import "./app.component.scss";
import { addComponent } from "../framework";

import { template } from "./app.component.html";


class AppComponent {

}

addComponent(
  "game-website",
  template,
  () => new AppComponent()
);
