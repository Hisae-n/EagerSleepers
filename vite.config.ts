import { wasp } from "wasp/client/vite";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [wasp()],
  resolve: {
    alias: {
      "@docs": fileURLToPath(new URL("./docs", import.meta.url)),
    },
  },
  server: {
    host: process.env.VITE_DEV_SERVER_HOST ?? "0.0.0.0",
    port: Number(process.env.WEB_CLIENT_PORT ?? 3000),
    open: false,
  },
});
