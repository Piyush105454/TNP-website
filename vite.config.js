import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/TNP-website/', // <-- Add this line (your GitHub repo name)
  plugins: [react()],
})
