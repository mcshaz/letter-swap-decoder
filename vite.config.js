import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
export default defineConfig(({ command }) => {
  const config = {
    plugins: [
      vue({
        reactivityTransform: true,
      }),
    ]
  }
  if (command === 'build') {
    config.base = '/letter-swap-decoder/'
  }
  // https://vitejs.dev/config/
  return config;
})
