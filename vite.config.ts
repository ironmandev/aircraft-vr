import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, './src'),
    '@components': path.resolve(__dirname, './src/components'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@layout': path.resolve(__dirname, './src/layout'),
    '@plugins': path.resolve(__dirname, './src/plugins')
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('a-')
        }
      }
    })
  ]
})
