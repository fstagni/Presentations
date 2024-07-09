import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['images/GridPP-IAM.png'], // Add any other images here if needed
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './')
    }
  }
})
