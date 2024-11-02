import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'animation-ship',
      fileName: 'main',
      formats: ['es'],
    },
    sourcemap: true,
    emptyOutDir: true,
    ssr: true,
    rollupOptions: {
      external: ['react'],
    },
  },
  resolve: {
    alias: {
      '@atoms': path.resolve(__dirname, 'src/components/Atoms'),
      '@templates': path.resolve(__dirname, 'src/components/Templates'),
      '@molecules': path.resolve(__dirname, 'src/components/Molecules'),
      '@organisms': path.resolve(__dirname, 'src/components/Organisms'),
      '@icons': path.resolve(__dirname, 'src/Icons'),
      '@customTypes': path.resolve(__dirname, 'src/types'),
    },
  },
  plugins: [
    react(),
    dts({ tsconfigPath: './tsconfig.app.json' }),
    svgr({
      include: '**/*.svg?react',
    }),
  ],
});
