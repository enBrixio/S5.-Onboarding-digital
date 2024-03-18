import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/S5.-Onboarding-digital/',
  plugins: [react()],
  publicDir: 'public',
})
