import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
      base : '/public_html/build/',
      // rollupOptions: {
      //   external: [
      //     '/react-nyTimes/src/assets/The_New_York_Times_logo.png',
      //     "/react-nyTimes/src/assets/image.png",
      //     "/react-nyTimes/src/assets/games.png",
      //     "/react-nyTimes/src/assets/digital.png",
      //     "/react-nyTimes/src/assets/cooking.png",
      //     '/^node:.*/',
      //   ]
      // }
  }
})
