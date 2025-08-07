import { defineConfig, loadEnv } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_APP_ENV, VITE_APP_BASE_URL } = env;
  return {
    base: VITE_APP_ENV !== "development" ? VITE_APP_BASE_URL : "/",
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 80,
      host: true,
      open: true,
    },
  };
});
