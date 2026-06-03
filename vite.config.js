import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    cors: {
      origin: 'https://www.chrisryczke.com',
    },
  },
  build: {
    rollupOptions: {
      input: '/src/main.jsx',
    },
  },
})
