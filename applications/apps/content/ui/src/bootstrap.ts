import { getDocumentRef, getWindowRef } from "@wraithlight/core.dom";
import { mount } from "mithril";

import { AppComponent  } from "./app.component";
import { initializeSdk } from "./sdk/state";

const _document = getDocumentRef();
const _window = getWindowRef();
_window.addEventListener("DOMContentLoaded", () => {
    initializeSdk();
    const body = _document.body as HTMLBodyElement;
    mount(body, AppComponent);
});
