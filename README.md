# answer-cloud-test

**Unofficial concept:** a repositioned one-page homepage for [answer.cloud](https://www.answer.cloud/), written by conversion copywriter Helen Peatfield for its founder. Not made by, endorsed by or affiliated with answer.cloud.

The site is an Astro project in [`site/`](site/), built from answer.cloud's official template. It's a **local draft**: nothing has been reserved or published on answer.cloud.

All features and prices come from answer.cloud's public homepage (checked 20 Oct 2026). There are no testimonials, stats or new claims.

## Run locally

```sh
cd site
npm install
npm run dev      # http://localhost:4331
npm run build    # static output in site/dist/
```

## Publishing later

answer.cloud publishes through its one-prompt build. When you're ready, ask your coding agent to publish this draft. It reserves a site with your email and brief, then rebuilds with `SITE_URL=https://{slug}.answer.cloud` so the social preview tags are absolute. After that it deploys and checks the live page and AI chat. See `site/CLAUDE.md` for details.
