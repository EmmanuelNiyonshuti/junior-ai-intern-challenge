import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    proxy: {
      '/api':{
        target: 'https://ai-chatbot-backend-evct.onrender.com',
        changeOrigin: true
      }
    }
  }
})
