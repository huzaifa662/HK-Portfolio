import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' makes all asset paths relative so the site works on GitHub Pages
// both at https://username.github.io/ and https://username.github.io/repo-name/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
