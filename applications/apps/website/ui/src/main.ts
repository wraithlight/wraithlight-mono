import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { initializeSdk } from './sdk';

document.addEventListener("DOMContentLoaded", () => {
  initializeSdk();
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
});
