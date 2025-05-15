import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind(), compress()],
  output: 'static',
  build: {
    outDir: 'dist',
  },
  base: '/psicoLanding/', 
});
