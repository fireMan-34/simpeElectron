import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      
    },
    outDir: "./dist/client",
    // watch:{
    //   buildDelay: 340,
    // },
  },
  base: './',
  resolve: {
    alias: {
      'client': join(__dirname, './src'),
    },
    extensions: [ '.tsx', '.ts', 'jsx', 'js', '.json', ] 
  },
});
