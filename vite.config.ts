import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base path matches the GitHub Pages project URL: gexijin.github.io/compound/
// If the repo is renamed or a custom domain is added, update this.
export default defineConfig({
  base: '/compound/',
  plugins: [react(), tailwindcss()],
})
