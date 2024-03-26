import { initializeAuthSdk } from "@wraithlight/common.auth-sdk.client";
import { getDocumentRef, getWindowRef } from "@wraithlight/core.dom";
import { Store } from "@wraithlight/core.redux";
import { mount } from "mithril";

import { AppComponent  } from "./app.component";
import { ContentGlobalState, INITIAL_STATE } from "./sdk";

const _document = getDocumentRef();
const _window = getWindowRef();
_window.addEventListener(
    "DOMContentLoaded",
    () => {
        const apiBaseUrl = "";
        Store.initialize(INITIAL_STATE);
        const store = Store.getInstance<ContentGlobalState>();
        initializeAuthSdk(
            apiBaseUrl,
            store
        );

        const body = _document.body;
        mount(
            body,
            AppComponent
        );
    }
);
