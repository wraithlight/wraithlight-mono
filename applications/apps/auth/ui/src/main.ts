import { getDocumentRef } from "@wraithlight/core.dom";

import './app.css'
import App from './App.svelte'
import { initializeSdk } from './sdk';

initializeSdk();

const app = new App({
  target: getDocumentRef().body
})

export default app
