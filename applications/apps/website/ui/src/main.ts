import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LoggerService } from "@wraithlight/common.logger.sdk";

import { AppModule } from './app/app.module';
import { initializeSdk } from './sdk';

document.addEventListener("DOMContentLoaded", () => {
  const logger = LoggerService.getInstance();
  initializeSdk();
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => logger.error(err));
});
