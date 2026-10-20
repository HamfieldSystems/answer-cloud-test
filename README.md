# answer-cloud-test

**Unofficial concept:** a repositioned one-page homepage for [answer.cloud](https://www.answer.cloud/), written by conversion copywriter Helen Peatfield for its founder. Not made by, endorsed by or affiliated with answer.cloud.

The site is an Astro project in [`site/`](site/), built from answer.cloud's official template. It's live at **https://helen-peatfield-answer-cloud-positioning-concept.answer.cloud** (published 20 Oct 2026).

All features and prices come from answer.cloud's public homepage (checked 20 Oct 2026). There are no testimonials, stats or new claims.

## Run locally

```sh
cd site
npm install
npm run dev      # http://localhost:4331
npm run build    # static output in site/dist/
```

## Updating the live site

The first launch used a temporary guest credential, which has been removed. To make changes, finish the answer.cloud account setup from the emailed link, connect your agent to `https://answer.cloud/mcp`, and ask it to update the existing site (don't create a new one). Build with `SITE_URL=https://helen-peatfield-answer-cloud-positioning-concept.answer.cloud` so the social preview tags stay absolute. See `site/CLAUDE.md`.
