import { fileURLToPath, URL } from "node:url";

import { defineConfig, type UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config: UserConfigExport = {
    plugins: [vue()], // { reactivityTransform: false }
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
  if (command === "build") {
    config.base = "/letter-swap-decoder/";
  }
  // https://vitejs.dev/config/
  return config;
});
