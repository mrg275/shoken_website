# Shoken Design System

> Assembles and validates human services contract invoices for government approval and payment. An AI-native platform compressing the nonprofit-to-government reimbursement cycle from weeks to minutes.

This system defines the visual, verbal, and interaction language for every surface Shoken ships: the core web platform, the government admin portal, the nonprofit dashboard, the marketing site, email comms, decks, and hiring materials.

---

## The Shoken story, compressed

The company is named after **Empress Shōken** of Japan (1849–1914), consort of Emperor Meiji and a principal patron of the Japanese Red Cross. The **Empress Shōken Fund**, established in her honor in 1912, is one of the oldest international humanitarian endowments and still supports Red Cross and Red Crescent societies today.

She sits at a specific historical inflection: the Meiji Restoration, when Japan moved from a feudal society to a modern nation-state. She personally modernized court dress, supported women's education, and bridged imperial institution with humanitarian mission — the same bridge the product walks between government agencies and nonprofits.

**This origin is not decorative.** It sets the brand register: sovereign, institutional, patient, humanitarian. Not nationalistic, not mystical, not trendy-Japanese. The references we pull from are *Meiji-era engraved documents, imperial lacquerware reds, hairline rules on official paper, vermillion seals (hanko), paulownia and chrysanthemum heraldry rendered as geometric marks* — not brush calligraphy, not cherry blossoms, not noren curtains.

## Sources we were given

**None.** This system was built from scratch against the company blurb and brand direction provided by the user on 2026-04-22. There is no attached codebase, Figma file, or prior brand guide. Every asset here is original to this system.

If and when real sources arrive (a Figma link, a production codebase, an existing logo), this README should be rewritten to point at them, and the tokens in `colors_and_type.css` should be reconciled against what's actually shipping.

---

## Brand essence

| | |
|---|---|
| **Must feel** | Secure. Powerful. Trusted. |
| **Must not feel** | Cheap. Gimmicky. Wrapper-like. |
| **Primary user** | Government agency contract managers — bureaucratic, compliance-minded, skeptical. |
| **Secondary user** | Nonprofit finance staff — overworked, under-resourced, chasing dollars. |
| **Register** | Institutional. Closer to an agency form or a Federal Reserve filing than to a SaaS dashboard. |
| **One-line positioning** | *The ledger between mission and government.* |

---

## Content fundamentals

Shoken copy is written for people whose job involves signing things. It must read like it was drafted by a competent agency lawyer with a good editor — not a marketing copywriter.

### Voice
- **Plain, declarative, short.** "Invoice validated. Ready for agency review." Not "🎉 Your invoice is on its way!"
- **Precise over friendly.** Name the actor, name the object, name the next state. "Agency returned invoice #INV-0421 for revision" > "Oops, something needs another look."
- **Confident but never brash.** We do not say "revolutionary," "seamless," "magical," or "10x." We say what it is.
- **Institutional cadence.** Full sentences end with periods. Lists are parallel. We use the Oxford comma.

### Pronouns
- Address users as **you**. Refer to the system as **Shoken**, not "we" — this is software, not a team. Exception: marketing site and hiring pages may use "we" for the company.
- Never use "I" — Shoken is not a chatbot persona.

### Casing
- **Sentence case** for all UI labels, buttons, menu items, and page titles. `Submit for approval`, not `Submit For Approval`.
- **Title Case** only for proper nouns and document types: `Human Services Contract Invoice`, `Empress Shōken Fund`.
- **UPPERCASE** reserved for legal/status stamps in tracked-red: `OVERDUE`, `RETURNED`, `VALIDATED`. Used sparingly, as a seal would be.

### Numbers & dates
- Always tabular, always precise. `$1,284,502.00`, not `$1.28M` (unless explicitly summarizing aggregates).
- ISO-like dates in UI: `2026-04-22` or `22 Apr 2026`. Never `4/22/26`.
- Currency always with explicit two-decimal cents in financial surfaces. Mono font required.

### Emoji & icon characters
- **No emoji.** Not in UI, not in marketing, not in email. Emoji undermines the register.
- Unicode geometric shapes (▲ ▼ ● ◆ §) are acceptable as functional glyphs.
- The vermilion square **■** serves as a brand motif and bullet marker.

### Tone examples

| Bad | Good |
|---|---|
| "🎉 Great job! Your invoice is on its way!" | "Invoice #INV-0421 submitted. Agency response expected within 3 business days." |
| "Oops — something went wrong." | "Validation halted. Line 14 references a contract code not recognized by the DHS schedule." |
| "Welcome back! Ready to crush some invoices?" | "Good morning. Four invoices are awaiting your review." |
| "Revolutionary AI-powered invoice automation" | "Shoken assembles and validates human services contract invoices. Weeks of work, compressed to minutes." |

---

## Visual foundations

### Color
Warm ink neutrals on a bone-white substrate. A single sovereign accent — **Shōken Vermilion** — used the way a hanko seal is used: small, final, unmistakable. A muted seal-gold for secondary emphasis. See `colors_and_type.css` for exact tokens.

- **Bone** `#F6F1E8` — primary surface. Warm, paper-like. Never pure `#FFF`.
- **Paper** `#FBF8F2` — elevated surface, the color of archival rag.
- **Ink** `#1A1714` — warm near-black. Our "black." Never `#000`.
- **Sumi** `#433E38` — warm dark gray, for body text and chrome.
- **Mist** `#8B847A` — secondary text, rules, metadata.
- **Rule** `#DDD6C8` — hairline divider, faded paper line.
- **Shōken Vermilion** `#B2322A` — the accent. Deep, dignified red.
- **Seal Gold** `#9A7B3A` — secondary accent, for moments of ceremony (sent seal, approval stamp).
- **Moss** `#3E5E3E`, **Indigo** `#27405C`, **Clay** `#8C4A2A` — supporting semantic colors, muted and earthen. Never saturated web-default greens/blues/oranges.

Imagery is **warm, slightly desaturated, with paper grain**. B&W documentary photography is preferred over stock. No product photography, no hands-on-keyboards, no fintech abstract gradients.

### Typography
A considered trio. See `colors_and_type.css`.

- **Display:** *Source Serif 4* (Google fallback for GT Sectra). Used for: marketing hero, deck titles, document headers, magazine-style content. High contrast, sharp terminals, authoritative.
- **Sans:** *Inter Tight* (Google fallback for Söhne). Used for: all UI, body copy, labels, navigation, tables. Neo-grotesk, tight, competent.
- **Mono:** *JetBrains Mono* (Google fallback for Söhne Mono). Used for: invoice IDs, amounts, dates, timestamps, any number that must line up.

Numerals are **tabular, lining** everywhere. `font-variant-numeric: tabular-nums`. No exceptions in financial surfaces.

### Spacing
4pt grid. Prefer `4, 8, 12, 16, 24, 32, 48, 64, 96`. Gutters are generous around content; tight around controls. Documents breathe.

### Corner radii
- `0px` for tables, rules, dividers, and document chrome
- `2px` for inputs, buttons, tags, badges
- `4px` for cards, modals, menus
- `9999px` (pill) reserved for status dots only — never buttons

**Rounded corners are the exception, not the rule.** Most of the interface has crisp corners. This is deliberate — the product is a filing, not a chat app.

### Borders, rules, dividers
The primary divider is a **1px hairline** in `--rule`. On retina, this renders as a faithful 1px. We do not use shadows to separate elements; we use rules. Shadows are reserved for **elevation** (modals, floating menus) and even then are soft and single-layer:

- `shadow-raise: 0 1px 2px rgb(26 23 20 / 0.04), 0 2px 8px rgb(26 23 20 / 0.04)`
- `shadow-float: 0 2px 4px rgb(26 23 20 / 0.05), 0 8px 24px rgb(26 23 20 / 0.06)`
- `shadow-seal: 0 0 0 1px rgb(178 50 42 / 0.15), 0 1px 2px rgb(178 50 42 / 0.08)` — for vermilion elements only

No inner shadows. No colored shadows (except seal).

### Backgrounds
- Default: `--bone`, flat.
- Elevated surfaces: `--paper`.
- A subtle paper-grain texture is permitted on marketing and deck surfaces at 4–8% opacity, never in UI.
- No gradients as brand expression. Gradients exist only as **protection scrims** over imagery (dark-to-transparent) to ensure legibility.
- Full-bleed imagery is reserved for marketing hero and deck section openers. Always paired with a vermilion or bone-white rule element.

### Animation
- **Duration:** 120ms (micro), 200ms (default), 320ms (emphatic), 600ms (hero). Never longer in UI.
- **Easing:** `cubic-bezier(0.2, 0, 0, 1)` — a deliberate, administrative ease. No bounces, no overshoots, no spring physics.
- **Fades over slides.** Opacity changes over positional changes. Motion is used to acknowledge state, not to delight.
- Page-level transitions: none by default. The product should feel like turning a page in a ledger.
- The only "decorative" animation permitted: a 600ms ink-draw-in on the vermilion seal element at page load, once per session.

### Hover & press states
- **Hover (links, ghost buttons):** text darkens one step (`--sumi` → `--ink`) OR the underline appears. No background color change for text links.
- **Hover (solid buttons):** background darkens ~8% (ink buttons) or saturates ~5% (vermilion buttons).
- **Hover (rows, list items):** background shifts from `--bone` to `--paper`. Never to a tinted color.
- **Press:** no shrinking, no scale transforms. Instead: background darkens an additional ~4%. The interface does not "squish."
- **Focus:** 2px `--vermilion` outline at 2px offset. Crisp, unmistakable. Never a glow.

### Transparency & blur
- Used sparingly. Modals over a `rgba(26, 23, 20, 0.45)` backdrop — no blur by default.
- `backdrop-filter: blur(12px)` permitted only on sticky headers overlaying scrolled content, and only at ≥90% opacity on the base color.
- Frosted-glass effects as brand expression: no.

### Cards & containers
- Default card: `--paper` background, 1px `--rule` border, 4px radius, no shadow.
- Elevated card (hover-raisable): add `shadow-raise`, border persists.
- Never: gradient borders, colored left-border-only accents, tinted backgrounds as primary container style.

### Layout rules
- Content column caps at 72ch for reading, 1280px for dense UI, 1440px for data tables.
- **The Shoken rule:** every top-level page or document begins with a 1px horizontal `--ink` rule spanning the content width, directly under the page title. This is our most consistent visual signature. It is to Shoken what the underline is to the Financial Times.
- Sticky elements: top nav only. Never floating action buttons.

---

## Iconography

See the dedicated section in this README below. TL;DR: **Lucide** (hairline, 1.5px stroke) is our icon system, loaded from CDN. Emoji is forbidden. The vermilion seal square `■` is our one house-made mark.

### Details
- **Primary icon set:** [Lucide](https://lucide.dev) via CDN. Chosen for: consistent 1.5px hairline stroke matching our rule weight, geometric precision, 1400+ icons covering every admin/finance concept we need, no opinions of its own.
- **Stroke weight:** always 1.5px. Never filled icons, never duotone.
- **Size:** 16px (dense UI), 20px (default), 24px (headers), 32px+ (illustration-scale).
- **Color:** inherits `currentColor`. Defaults to `--sumi`.
- **Substitution flag:** this is a substitution. The user has not provided icon assets. If Shoken later commissions a custom set, it should replace Lucide globally.
- **Unicode glyphs** permitted as functional markers: `§` for section, `¶` for paragraph, `▲▼` for sort direction, `●` for status dot, `■` for the house vermilion bullet. These are used in moderation and never as decoration.
- **The seal:** a 12px × 12px vermilion square with the wordmark `S` in bone-white at 700 weight. Used in document footers, email signoffs, and as a favicon. Defined in `assets/shoken-seal.svg`.
- **Emoji:** never.

### Logo & mark
- **Wordmark:** `Shoken` set in Source Serif 4, 600 weight, with a subtle vermilion overbar on the initial `S` that references both the imperial cartouche and a hanko seal.
- **Mark:** vermilion square containing a bone-white `S` at 700 weight. The mark can stand alone as a favicon, app icon, or ceremonial seal.
- **Clear space:** the height of the `S` on all sides.
- **Minimum size:** 80px wide (wordmark), 16px (mark).

See `assets/` for all SVG variants: wordmark light/dark, mark, seal, favicon.

---

## File index

Root:
- `README.md` — this file
- `SKILL.md` — Agent Skills compatible entry point; tells a consuming agent how to use this system
- `colors_and_type.css` — CSS custom properties for all color, type, spacing, radius, shadow, and motion tokens; plus semantic classes (`h1`, `h2`, `body`, `eyebrow`, `mono`, etc.)

Folders:
- `assets/` — logos, marks, seal, favicon, placeholder hero image, paulownia geometric ornament
- `fonts/` — (empty; we use Google Fonts via `<link>` — see CAVEAT in SKILL.md)
- `preview/` — individual HTML cards that populate the Design System tab (type specimens, palette swatches, components, logo lockups)
- `ui_kits/` — hi-fi recreations of each product surface, with reusable JSX components and a demo `index.html`
  - `ui_kits/web_app/` — the invoice workspace (core platform)
  - `ui_kits/admin_portal/` — government agency contract-manager portal
  - `ui_kits/nonprofit_dashboard/` — nonprofit-side reimbursement tracker
  - `ui_kits/marketing/` — public marketing site
  - `ui_kits/email/` — transactional and lifecycle email templates
  - `ui_kits/jobs/` — hiring page / job posting template
- `slides/` — pitch deck template with TitleSlide, BigQuoteSlide, ComparisonSlide, DataSlide, SectionDivider, CloseSlide

---

## Caveats

- **Fonts are Google-served substitutes.** Source Serif 4, Inter Tight, and JetBrains Mono are substitutes for what a production brand might commission (GT Sectra, Söhne, Söhne Mono). If Shoken licenses custom fonts, swap them in `colors_and_type.css` via the `@font-face` block.
- **Icons are Lucide from CDN.** Not a custom set.
- **Imagery is placeholder.** No real documentary photography exists in this system. Marketing hero uses a flat vermilion art-directed panel as a stand-in.
- **No source codebase was available.** Every UI kit component is an original interpretation of what a sophisticated invoice-workflow product would look like under this brand. Once production code exists, these should be reconciled.