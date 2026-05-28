// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://pranavpahuja.com",
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Three.js is intentionally large; loaded lazily behind WebGL check
      chunkSizeWarningLimit: 600,
    }
  },

  integrations: [react(), sitemap()]
});