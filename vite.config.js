import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    host: '0.0.0.0', 
    port: 3000,
    allowedHosts: [
      'localhost',
      'intercom-dvce.onrender.com' // 🔥 Add your Render domain here
    ]        
  }
})
