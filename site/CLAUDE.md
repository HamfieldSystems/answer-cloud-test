# answer.cloud site

- Site kind: hosting
- Slug: helen-peatfield-answer-cloud-positioning-concept
- Served at: https://helen-peatfield-answer-cloud-positioning-concept.answer.cloud
- Organization: Helen Peatfield (answer.cloud positioning concept)
- Source: Astro. Never hand-write plain HTML, llms.txt, sitemaps, analytics, or
  chat-widget scripts — the platform generates that layer at deploy time.
- Deploy: through the answercloud MCP server only, under the user's actual request.
  The user asked to publish on 20 Oct 2026 via the guest first-site launch. Later
  updates need the user's request and authenticated account access, not the expired
  guest build credential.
- First launch verified: yes (20 Oct 2026, deploy sequence 2). Guest build credential removed.

## What this project is

An **unofficial one-page concept** that repositions answer.cloud's homepage, written by
conversion copywriter Helen Peatfield for answer.cloud's founder. It must stay clearly
marked as unofficial and not affiliated, and link to the real https://www.answer.cloud/.

Content rules:
- Copy follows Helen Peatfield's "answer.cloud — Homepage Rewrite" doc (20 Oct 2026), in its
  section order. Tagline everywhere: "Build your own answer engine".
- Facts come only from answer.cloud's own public homepage, docs, blog and agent guide.
  No testimonials, stats or new claims.
- Anything answer.cloud hasn't published is shown with the `Gap` component as a visible
  "Needs from answer.cloud" note — never invented or hidden. The "For Jared" section at the
  end lists every gap.
- Agent instructions stay off the page; "For agents" links to app.answer.cloud/build-site.md.

Design constraints (from the official template, retokenized):
- **Maximum font size anywhere is 32px** (28px on small screens).
- Instrument Sans (UI) + JetBrains Mono (code/metadata only).
- Neutral ink accent (`#1a1b1c`) instead of answer.cloud's brand blue, so the concept
  can't be mistaken for an official page. The amber warning tokens mark "concept".
- Border- and grid-driven hierarchy; shadows only for floating elements.

Key files:
- `src/pages/index.astro` — the page.
- `src/layouts/Base.astro` — head/social metadata, concept bar, nav, footer.
- `src/consts.ts` — prompt, tagline, author and real answer.cloud links.
- `src/components/Gap.astro` — visible "needs from answer.cloud" placeholder.
- `src/components/PromptBox.astro` — prompt with copy button.
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
