import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import path from 'path';

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
    rollupOptions: {
      external: ['react'],
    },
  },
  resolve: {
    alias: {
      '@atoms': path.resolve(__dirname, 'src/components/Atoms'),
      '@templates': path.resolve(__dirname, 'src/components/Templates'),
    },
  },
  plugins: [
    react({
      plugins: [
        [
          '@swc/plugin-styled-components',
          {
            displayName: true,
          },
        ],
      ],
    }),
    dts({ tsconfigPath: './tsconfig.app.json' }),
  ],
});
