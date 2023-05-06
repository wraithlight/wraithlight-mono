import { mount } from "mithril";

import { AppComponent  } from "./app.component";
import { initializeSdk } from "./sdk/state";

window.addEventListener("DOMContentLoaded", () => {
    initializeSdk();
    const body = document.body as HTMLBodyElement;
    mount(body, AppComponent);
});
