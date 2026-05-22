import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@mwlai/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@mwlai/types': path.resolve(__dirname, '../../packages/types/src'),
      '@mwlai/utils': path.resolve(__dirname, '../../packages/utils/src')
    }
  },
  server: {
    port: 4173
  }
})
