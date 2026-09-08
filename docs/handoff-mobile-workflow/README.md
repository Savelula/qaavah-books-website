# Handoff: Personal tour — mobile workflow player (`#flow`)

## Overview
The personal tour (`index.html`, section `#flow`) plays an 8-step product story: a phone mock
that cycles through 8 app screens, paired with a numbered step list. On phones the section was
rendering as a squeezed 2-column grid (phone clipped off-screen left, step text crushed), and the
step list was 8 items where 7 were dead weight.

This handoff covers two things:
1. **The layout bug and its cause** (a CSS specificity trap) — must be preserved in any rewrite.
2. **The new mobile pattern**: cropped phone + swipeable step rail + explicit ‹ › dots nav.

Desktop (>980px) keeps the `1fr 372px` grid, head/steps left, 372×756 phone right — only its rim
was thinned (see below).

## About the design files
`reference/index.html` and `reference/css/personal-tour.css` are the **real site files with the fix
applied** — this is a patch to a live static site, not a throwaway prototype, so they can be diffed
against `Savelula/qaavah-books-website@main` and committed as-is. If you are re-implementing the
tour in a framework (the React client `akontaabu_web`, for instance), treat them as the spec: the
values below are exact, the DOM structure and class names are the current production ones.

`reference/mobile-preview.html` is a harness only — it embeds `index.html` in a phone frame at
320 / 390 / 430 / 768px. Do not ship it.

## Fidelity
**High-fidelity.** Every colour, size, radius, duration and breakpoint below is final and taken
from the shipped CSS. Recreate pixel-for-pixel.

---

## The bug (do not reintroduce)

`css/personal-tour.css` defines the workflow grid **ID-scoped**:

```css
#layoutPersonal .flowin{display:grid;grid-template-columns:1fr 372px;gap:60px;align-items:center}
```

…but its mobile block was written **unscoped**:

```css
@media(max-width:980px){ .flowin,.plans{grid-template-columns:1fr} … }   /* ← loses, 0,1,0 vs 1,1,0 */
```

Specificity `(1,1,0)` beats `(0,1,0)`, so the 2-column grid survived on phones. Two changes:

- Every rule in that media block is now `#layoutPersonal`-scoped.
- `index.html`'s own mobile block also carries `#layoutPersonal .flowin{display:flex!important;
  grid-template-columns:1fr!important;grid-template-areas:none!important}` as a guard, so no later
  sheet can restore the grid.

**Rule for the rewrite:** never mix ID-scoped desktop rules with class-only mobile overrides. In a
component framework this maps to "one component owns both breakpoints".

Related: `index.html` gained `@media(max-width:400px){ .navin{flex-wrap:nowrap;min-width:0}
.brand{min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis} .nav-tools{min-width:0;flex:0 1 auto} }`
— the nav row used to make the document 371px wide on a 320px screen, and that page-wide sideways
scroll was what made the workflow look cropped.

---

## Screens / views

### Desktop — ≥981px (unchanged)
- `.flowin`: `display:grid; grid-template-columns:1fr 372px; grid-template-areas:"head phone" "body phone"; gap:60px; align-items:start`
- `.flow-head` (tag + h2 + lede) top-left, `.flow-body` (steps + controls) below it, `.phone` spans both rows on the right, `align-self:center`.
- `.phone`: 372×756, radius **34px**, `padding:**4px**`, background `#0B120D`, shadow `0 30px 70px -24px rgba(24,32,24,.5)`; `.screen` radius **30px**. (Was 46px / 10px / 37px — the 10px bezel read as a heavy prop, so the rim is now 4px at every breakpoint.)
- `.step`: `grid-template-columns:38px 1fr; gap:16px; padding:16px 18px; radius:18px; opacity:.5`; active = `opacity:1`, `background:#fff`, shadow `0 1px 2px rgba(24,32,24,.05), 0 14px 34px -22px rgba(24,32,24,.3)`. All 8 titles + bodies visible.

### Mobile — ≤980px (new)
Single column, in this order (flex `order` values in brackets):

1. `[1]` `.flow-head` — tag "The workflow", h2, lede.
2. `[2]` `.phone` — **one fixed cropped frame for every mobile width**: `width:min(340px,94%); height:420px; aspect-ratio:auto; max-height:none; border-radius:30px; padding:3px`; `.screen` radius 27px, no notch (`.notch{display:none}`). The ≤640px block only re-states the width — the size is deliberately *not* fluid, so the app UI is the same physical size on a 320px and a 430px phone.
   Cropping is deliberate — the panes are flex columns whose scroll body (`.pb`) is `flex:1; overflow:hidden` and whose tab bar (`.ptab`) is `flex:0 0 72px`, so the 420px frame shows less of the middle list while the app's bottom tab bar stays visible. This is what makes phone + nav + step card fit one screenful.
   **Frame treatment** — a thin 3px dark rim, no notch, was chosen over three alternatives (full device bezel, bezel-free card, edge-to-edge slab): on a real phone a device mock inside a device is redundant and the bezel ate ~15% of the width, but removing the frame entirely lost the "this is the app" read. Business uses the same geometry with `#0C0D14`.
3. `[3]` `.flownav` — `display:flex; align-items:center; justify-content:center; gap:14px; margin:0 auto 2px`
   - `.fnb` (prev / next): 44×44 circle, `background:#fff`, icon colour `#4A7259`, shadow `0 1px 2px rgba(24,32,24,.08), 0 8px 20px -12px rgba(24,32,24,.35)`; `:active` inverts to `background:#4A7259; color:#fff`. Icon `.msr` 24px.
   - `.fndots`: `display:flex; gap:7px`. `.fndot` = 8×8 pill, `background:rgba(24,32,24,.18)`; active `.fndot.on` = `width:22px; background:#5F8A6E`; `transition:width .25s, background .25s`.
4. `[4]` `.flow-body` — the step rail + `.flowctl`.
   - `.steps` becomes a horizontal snap rail: `flex-direction:row; gap:10px; overflow-x:auto; scroll-snap-type:x mandatory; overscroll-behavior-x:contain; margin:0 -18px; padding:6px 18px 14px` (≤640px: `margin:0 -14px; padding:6px 14px 14px`); scrollbars hidden (`scrollbar-width:none` + `::-webkit-scrollbar{display:none}`). The negative margin lets cards bleed to the screen edge past `.wrap`'s 18px/14px padding.
   - `.step` card: `flex:0 0 min(84%,340px)` (≤640px `88%`), `scroll-snap-align:center; display:block; padding:16px 18px 18px; radius:18px; background:#fff; opacity:.55; transform:scale(.985)`; active: `opacity:1; transform:none; box-shadow:0 1px 2px rgba(24,32,24,.06), 0 18px 40px -24px rgba(24,32,24,.42)`.
   - Card contents: `.n` step number — 11px JetBrains Mono, `letter-spacing:.1em`, colour `#5F8A6E`; `h4` — 18px/1.2, 600, `letter-spacing:-.5px`, `margin-top:7px` (≤640px 17px); `p` — 14px/1.55, `#585D55`, `margin-top:7px` (always visible on mobile, unlike the old collapsed list); `.bar` progress line 3px, `background:#5F8A6E`, animates `width 0→100%` over 4s linear while the card is active.
   - Short viewports (`@media(max-width:980px) and (max-height:720px)`) compact the panes: `.sb` 38px, `.amtv` 26px, `.ptab` 62px, `.pfab` 46px, tighter `.pay`/`.cta`/`.field` padding.
   - **Docked primary action** — on mobile `.pane .cta` is `position:absolute; left:14px; right:14px; bottom:14px` (`bottom:76px` when the pane `:has(.ptab)`), with `.pane:has(.cta) .pb{padding-bottom:64px}`. This mirrors the real app and guarantees a cropped frame can never slice the button in half.
   - **Gallery mocks** (`.gp`/`.gsc`/`.mnotch`, a separate component further down the page) get the matching rim below 640px: `padding:3px; border-radius:30px`, `.gsc` radius 27px, `.mnotch{display:none}`.
   - `.flowctl`: `justify-content:space-between; gap:12px; margin-top:2px`. Pause button `min-height:40px; padding:11px 18px`, 11px uppercase JetBrains Mono, colour `#4A7259` on `#fff`. Counter `STEP 03 / 08` in JetBrains Mono 11.5px `#585D55`.

**Icon-font caveat:** `assets/fonts/material-symbols-rounded.woff2` is a ~10KB **subset**. It has no
`chevron_left` glyph — using it renders the literal word. The prev button therefore uses
`chevron_right` with `transform:rotate(180deg)`. Any new icon must be added to the subset first.

---

## Interactions & behaviour

Player state lives in the inline `<script>` at the end of `index.html`.

- **Autoplay**: `DUR = 4000ms`, `go(i+1)` on each tick; stopped when `prefers-reduced-motion: reduce`
  (button then reads "Play").
- **`go(n)`** — wraps modulo 8 and: toggles `.pane.on` (phone screens), moves `.step.on`
  (re-triggering the 4s `.bar` fill by forcing reflow with `void s.offsetWidth`), updates the
  `STEP nn / 08` counter, calls `centerStep()`, and syncs `.fndot.on`.
- **Prev / next buttons and dots** → `go(i±1)` / `go(x)` then `tick()` (restarts the timer).
- **Tap the phone** (≤980px only) — left half = previous, right half = next, decided from
  `e.clientX - rect.left < rect.width/2`.
- **Swipe the rail** — `scroll` listener (passive), debounced 130ms, picks the card whose centre is
  nearest the rail centre and calls `go(best)`. Guarded by `railLock` (`Date.now()+800`) set by
  `centerStep()` so programmatic scrolling can't feed itself and drift a card.
- **`centerStep(smooth)`** — `left = step.offsetLeft - rail.offsetLeft - (rail.clientWidth - step.offsetWidth)/2`,
  clamped at 0, applied with `scrollTo({behavior:'smooth'})`, plus a 420ms fallback that assigns
  `scrollLeft` directly (some engines ignore smooth scrolling on offscreen containers).
- **`railed()`** — the rail behaviours only run when `getComputedStyle(rail).flexDirection === 'row'`
  and `scrollWidth - clientWidth > 8`, i.e. only in the mobile layout. Desktop keeps the plain
  vertical list.
- **Desktop hover** — `mouseenter` on `#flow` pauses the timer and the `.bar` animation,
  `mouseleave` resumes.
- `window.resize` → `centerStep(false)` (instant re-centre).

## State
`i` (0–7 active step), `playing` (bool), `timer` (timeout handle), `railLock` (ms timestamp),
`railT` (scroll debounce handle), `dots` (button array). No data fetching.

## Design tokens (from `:root` in `index.html`)
`--night:#3E614C` · `--bone:#F4F1E9` · `--paper:#FAFAF7` · `--ink:#182018` · `--sage:#5F8A6E` ·
`--sageDeep:#4A7259` · `--sageDark:#3E614C` · `--sageLight:#76A084` · `--sageTint:#E7EFE9` ·
`--amber:#B07310` · `--clay:#B33A2A` · `--indigo:#283593` · `--income:#16834A` ·
`--muted:#7C8079` · `--faint:#A8ABB3` · `--rule:rgba(24,32,24,.1)` · `--hair:rgba(24,32,24,.06)`;
body copy `#585D55`.

Type: **Geist / Plus Jakarta Sans** for UI, **JetBrains Mono** for numerals, labels and the step
numbers. Radii: 8 (dots) · 14 · 18 (cards) · 27 / 30 (phone screen + rim, all breakpoints) · 34 (desktop rim) · 999.
Breakpoints: **1180** (nav → burger) · **980** (workflow stacks) · **720px tall** (pane compaction) · **640** · **400** · **380**.
Motion: 4s linear step fill · `.25s` dot morph · `.3s` card opacity/shadow ·
`.45s cubic-bezier(.22,.9,.24,1)` pane cross-fade.

## Assets
`assets/fonts/material-symbols-rounded.woff2` (subset icon font, `.msr` ligatures),
`assets/logo-mark.png`, `assets/photos/pf-*.jpg` — all already in the repo. Nothing new added.

## Files
- `reference/index.html` — the tour. Mobile workflow CSS lives in the inline `<style>` under the
  `/* —— Mobile workflow —— */` comment and the `.flownav` block above it; markup at `<section class="flow" id="flow">`; player script at the end of `<body>`.
- `reference/css/personal-tour.css` — the specificity fix (`@media(max-width:980px)` block at the end).
- `reference/mobile-preview.html` — device harness, not for production.

- `reference/business.html` — the same treatment applied to the business tour (6 steps, indigo
  `--brand:#283593` accent, `#0C0D14` rim, `#layoutBusiness` guard). Note the business flow lives
  inside `#shopTour`, which is `hidden` for shop-closed countries; the rail helpers are no-ops
  while hidden (`railed()` returns false) and pick up once the section is shown.

Repo: `Savelula/qaavah-books-website`, branch `main`. Both tours are now updated.
