import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // open: "./public/index.html",
  },
  test: {
    environment: "jsdom",
  },
});
