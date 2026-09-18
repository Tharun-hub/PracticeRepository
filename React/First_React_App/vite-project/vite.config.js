import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint';
// https://vite.dev/config/
export default defineConfig({
  server:{
    port: 3000,
    host:'0.0.0.',
    allowedHosts:true
  },
  plugins: [react(),eslint()],
})
