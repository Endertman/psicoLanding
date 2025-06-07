import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://psicologosebastiancastillo.cl',
  viewTransitions: true,
  integrations: [tailwind(), compress()],
  // Configuración del sitemap
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  }
});