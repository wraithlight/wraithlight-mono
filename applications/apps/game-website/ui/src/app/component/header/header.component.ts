import "./header.component.scss";
import { addComponent } from "../../../framework";

import { template } from "./header.component.html";


class HeaderComponent {

}

addComponent(
  "game-website-header",
  template,
  () => new HeaderComponent()
);
