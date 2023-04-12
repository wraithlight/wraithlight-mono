import "./styles.scss";
import "./app";
import { applyBindings } from "knockout";

document.addEventListener("DOMContentLoaded", () => {
    bootstrap();
});

function bootstrap() {
    console.log("bootstrap");
    applyBindings(document.body);
}
