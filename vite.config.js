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
    manifest: true,
    rolldownOptions: {
      input: '/src/main.jsx',
    },
  },
})
