import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LoggerService } from "@wraithlight/common.logger.sdk";
import { getDocumentRef } from "@wraithlight/core.dom";

import { AppModule } from './app/app.module';
import { initializeSdk } from './sdk';

const _document = getDocumentRef();
_document.addEventListener("DOMContentLoaded", () => {
  const logger = LoggerService.getInstance();
  initializeSdk();
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => logger.error(err));
});
