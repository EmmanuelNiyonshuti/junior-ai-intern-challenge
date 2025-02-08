import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL)
  },
  server: {
    port: 3000,
    proxy: {
      '/api':{
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
})
