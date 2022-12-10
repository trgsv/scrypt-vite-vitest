import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "ES2021",
    lib: {
      entry: resolve(__dirname, "src/contract.ts"),
      name: "scrypt-vite-vitest",
    },
    rollupOptions: {
      external: ["scrypt-ts"],
      output: {
        globals: {
          "scrypt-ts": "ScryptTs",
        },
      },
    },
  },
});
