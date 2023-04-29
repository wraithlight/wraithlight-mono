import { mount } from "mithril";

import { AppComponent  } from "./app.component";

window.addEventListener("DOMContentLoaded", () => {
    const body = document.body as HTMLBodyElement;
    mount(body, AppComponent);
});
