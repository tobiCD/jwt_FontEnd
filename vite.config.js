import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port : 3000,
    assetsDir: "F:\jwt_fontend\jwt_fontEnd\src\assets",
    proxy : {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin : true ,
        rewrite : (path)=>path.replace(/^\/api/,'')
      }
    }
  },
  css: {
    postcss: './postcss.config.js',
  },
})
