import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      name: "animation-ship",
      fileName: (format) => `animation-ship-ui.${format}.js`,
      formats: ["es"],
    },
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      external: [],
    },
  },
  plugins: [react(), dts({ tsconfigPath: "./tsconfig.json", outDir: "types" })],
});
