import './app.css'
import App from './App.svelte'
import { initializeSdk } from './sdk';

document.addEventListener("DOMContentLoaded", () => {
  initializeSdk();
});

const app = new App({
  target: document.body
})

export default app
