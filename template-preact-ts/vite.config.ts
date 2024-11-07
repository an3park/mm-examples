import preact from '@preact/preset-vite'
import fs from 'fs'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  appType: 'mpa',
  root: 'src',
  publicDir: '../public',
  envDir: '..',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      // resolve the html files in src directory
      input: Object.fromEntries(
        fs
          .readdirSync('src')
          .filter((d) => d.endsWith('.html'))
          .map((d) => [d.replace('.html', ''), `./src/${d}`])
      ),
    },
  },
})
