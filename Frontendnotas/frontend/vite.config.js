import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Forzar a usar el puerto 5173
    strictPort: true  // Esto hará que falle si el puerto está en uso, en lugar de cambiar
  }
})
