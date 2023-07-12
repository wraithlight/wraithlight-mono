import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 3000
  },
  optimizeDeps: {
    include: [
      "@wraithlight/core.redux",
      "@wraithlight/common.auth-sdk.client"
    ]
  },
  build: {
    commonjsOptions: {
      include: [
        /@wraithlight/,
        /common.auth-sdk.client/,
        /core.auth.constant/,
        /core.http/,
        /core.redux/
      ]
    }
  }
})
