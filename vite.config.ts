import { wasp } from "wasp/client/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [wasp()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: false,
  },
});
