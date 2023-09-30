import "./app.component.scss";
import { addComponent } from "../framework";
import html from './app.component.html'

class AppComponent {

}

addComponent(
    "game-website",
    html,
    () => new AppComponent()
);
