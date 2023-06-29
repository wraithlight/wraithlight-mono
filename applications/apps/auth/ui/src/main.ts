import './app.css'
import App from './App.svelte'
import { initializeSdk } from './sdk';

initializeSdk();

const app = new App({
  target: document.body
})

export default app
