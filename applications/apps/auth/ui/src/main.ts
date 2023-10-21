import { getDocumentRef } from "@wraithlight/core.dom";
import { initializeAuthSdk } from "@wraithlight/common.auth-sdk.client";
import { Store } from "@wraithlight/core.redux";

import './app.css'
import App from "./app"
import type { UserManagementGlobalState } from "./sdk";
import { INITIAL_STATE } from "./sdk";

const apiBaseUrl = "";
Store.initialize(INITIAL_STATE);
const store = Store.getInstance<UserManagementGlobalState>();
initializeAuthSdk(apiBaseUrl, store);

const app = new App({
  target: getDocumentRef().body
})

export default app
