import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const resolve = (dir: string) => {
  return path.join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  base: '/',
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: resolve('src') + '/'
      }
    ]
  },
  plugins: [vue()],
  server: {
    host: true
  }
})
