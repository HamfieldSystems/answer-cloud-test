// @ts-check
import { defineConfig } from 'astro/config';

// Static output only — answer.cloud serves the built HTML from dist/.
// SITE_URL is the reserved https://{slug}.answer.cloud origin. Set it for any
// build you deploy so social preview tags get absolute URLs.
export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || undefined,
  server: {
    port: 4331,
  },
  build: {
    format: 'directory',
  },
});
