// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.fontsource(),
    name: 'Playpen Sans',
    cssVariable: "--font-primary",
  }],
  site: 'https://KamiAmiga.github.io',
  base: '/threejs-journey-projects'
});