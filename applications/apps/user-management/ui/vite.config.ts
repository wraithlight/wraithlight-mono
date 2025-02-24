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
      "@wraithlight/common.auth-sdk.client",
    ]
  },
  build: {
    outDir: "../dist/ui"
  },
  resolve: {
    preserveSymlinks: true
  }
})
