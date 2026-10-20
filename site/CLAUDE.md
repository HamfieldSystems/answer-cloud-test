# answer.cloud site

- Site kind: hosting
- Slug: not reserved yet (local draft only)
- Served at: https://{slug}.answer.cloud once reserved and deployed
- Organization: Helen Peatfield (answer.cloud positioning concept)
- Source: Astro. Never hand-write plain HTML, llms.txt, sitemaps, analytics, or
  chat-widget scripts — the platform generates that layer at deploy time.
- Deploy: through the answercloud MCP server only, under the user's actual request.
  The user asked for a LOCAL DRAFT ONLY. No site has been reserved and nothing has
  been deployed. Do not bootstrap, reserve or deploy until the user explicitly asks.
- First launch verified: no.

## What this project is

An **unofficial one-page concept** that repositions answer.cloud's homepage, written by
conversion copywriter Helen Peatfield for answer.cloud's founder. It must stay clearly
marked as unofficial and not affiliated, and link to the real https://www.answer.cloud/.

Content rules:
- Use only facts from answer.cloud's public homepage (checked 20 Oct 2026). No
  testimonials, stats or new claims.
- Lead with the outcome (found in AI answers, see how AI uses your site); the one-prompt
  build from Claude Code or Codex is the "how".
- Keep agent instructions off the page.
- Visitor goal: visit answer.cloud and try the prompt.

Design constraints (from the official template, retokenized):
- **Maximum font size anywhere is 32px** (28px on small screens).
- Instrument Sans (UI) + JetBrains Mono (code/metadata only).
- Neutral ink accent (`#1a1b1c`) instead of answer.cloud's brand blue, so the concept
  can't be mistaken for an official page. The amber warning tokens mark "concept".
- Border- and grid-driven hierarchy; shadows only for floating elements.

Key files:
- `src/pages/index.astro` — the page.
- `src/layouts/Base.astro` — head/social metadata, concept bar, nav, footer.
- `src/consts.ts` — prompt text, author, real-site link.
- `src/styles/tokens.css` — design tokens. `src/styles/styleguide.css` — template components.
  `src/styles/site.css` — page-specific styles.
- `public/assets/answercloud-chat.css` — chat widget theme (scoped to
  `#llmo-chat-button`, `#llmo-chat-iframe`, `#llmo-chat-widget` only).
- `public/assets/social-preview.png` — 1200×630 share image.

Building for deploy: set `SITE_URL=https://{slug}.answer.cloud` so the Open Graph and
Twitter image tags get absolute URLs. Without it they are omitted.

For ANY work on this site — authoring, styling, CMS templates, building, deploying,
or verifying/debugging the chat widget — invoke the `answer-cloud-site` skill first
and follow it.
