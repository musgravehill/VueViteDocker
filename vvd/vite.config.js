import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {    // <-- this object is added from docker-compose.yml    
    port: 5173,
    hmr: {
      port: 5173,
      clientPort: 5173,
    },
  },
  plugins: [vue()],
})
