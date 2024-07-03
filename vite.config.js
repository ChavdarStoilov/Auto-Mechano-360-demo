import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/service-system-demo/',
  }

  if (command !== 'serve') {
    config.base = '/service-system-demo/'
  }

  return config
})