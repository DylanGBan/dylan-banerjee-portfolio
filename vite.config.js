import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; 
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/dylan-banerjee-portfolio/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
  theme: {
    extend: {
      fontFamily: {
        ibm: ['"IBM Plex Mono"', "monospace"],
      },
    },
  },
});
 