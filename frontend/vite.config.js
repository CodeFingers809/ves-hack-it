import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    react(), // React plugin for JSX support
    compression({ algorithm: "brotliCompress" }), // Enable Brotli compression
    viteImagemin(), // Optimize images at build time
  ],

  build: {
    target: "esnext", // Target the latest JavaScript standards for optimal performance
    minify: "esbuild", // Use esbuild for fast minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true, // Remove debugger statements
      },
    },
    manifest: true, // Use hashed filenames for cache busting
    sourcemap: true, // Enable source maps for easier debugging in production

    // Cache-busting and deployment
    assetsDir: "assets", // Organize assets into a specific folder
  },

  // Image optimization
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg"], // Optimize image assets

  // Server configuration for development
  server: {
    open: true, // Open the app automatically in the browser
    hmr: true, // Enable hot module replacement for faster dev cycle
  },
});
