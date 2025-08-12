// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Importante para Netlify
  site: 'https://tu-sitio.netlify.app', // Opcional, actualízalo después
  base: '/', // Asegúrate de que esté así
  integrations: [react()],
});
