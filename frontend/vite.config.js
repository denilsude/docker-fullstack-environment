import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ADICIONE ESTE BLOCO ABAIXO
  server: {
    // Isso faz o servidor escutar em todas as interfaces de rede,
    // o que é necessário para o Docker.
    host: true,
    // Permitimos que o Nginx (visto como host 'frontend') se conecte.
    allowedHosts: ['frontend'],
  }
})