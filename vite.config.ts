import { wasp } from "wasp/client/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [wasp(), tailwindcss()],
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
