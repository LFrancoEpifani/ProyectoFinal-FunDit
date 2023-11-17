import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        customBlue: '#0b1e65',
      },
    },
  },
  plugins: [react()],
  base: "/ProyectoFinal-FunDit/",
})
