# answer-cloud-test

Landing page for **answer.cloud** — a static site (no build step).

- `index.html` — page markup
- `styles.css` — styles (dark theme, responsive)
- `script.js` — demo Q&A box, waitlist form, mobile menu
- `favicon.svg` — logo mark

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Upload the files to any static host (GitHub Pages, Netlify, Cloudflare Pages, Vercel) and point the `answer.cloud` DNS at it.

Note: the hero Q&A box uses canned demo answers, and the waitlist form doesn't send data anywhere yet.
