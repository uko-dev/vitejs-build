import { resolve } from 'path'
import { defineConfig } from "vite"
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
    plugins: [
        legacy({
          targets: ['defaults', 'not IE 11'],
        }),
    ],
    build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'pages/home/index.html'),
            404: resolve(__dirname, 'pages/404/index.html'),
          },
        },
    },
})