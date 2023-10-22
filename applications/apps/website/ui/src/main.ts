import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { LoggerService } from "@wraithlight/common.logger.sdk";
import { getDocumentRef } from "@wraithlight/core.dom";
import { initializeAuthSdk } from "@wraithlight/common.auth-sdk.client";
import { Store } from "@wraithlight/core.redux";

import { INITIAL_STATE, WebsiteGlobalState } from './sdk';
import { AppModule } from "./app/app.module";

const _document = getDocumentRef();
_document.addEventListener("DOMContentLoaded", () => {
  const logger = LoggerService.getInstance();
  const apibaseUrl = "";
  Store.initialize(INITIAL_STATE);
  const store = Store.getInstance<WebsiteGlobalState>();
  initializeAuthSdk(apibaseUrl, store);
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => logger.error(err));
});
