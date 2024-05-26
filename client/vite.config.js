import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      "@config": path.resolve(__dirname, "src/config"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@store": path.resolve(__dirname, "src/store"),
      "@views": path.resolve(__dirname, "src/views"),
    }
  }
})
