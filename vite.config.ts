import { wasp } from "wasp/client/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [wasp()],
  server: {
    host: process.env.VITE_DEV_SERVER_HOST ?? "0.0.0.0",
    port: Number(process.env.WEB_CLIENT_PORT ?? 3000),
    open: false,
  },
});
