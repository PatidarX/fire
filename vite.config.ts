import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");

  return {
    // 🔥 Dev server settings
    server: {
      port: 3000,
      host: "0.0.0.0",
    },

    // 🔥 Required for Vercel production
    base: "/",
    build: {
      outDir: "dist",
    },

    // 🔥 React plugin
    plugins: [react()],

    // 🔥 Environment variables
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },

    // 🔥 Path aliases
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
