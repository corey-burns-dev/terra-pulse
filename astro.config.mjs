import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.unsplash.com',
    }],
  },

  adapter: cloudflare(),
});