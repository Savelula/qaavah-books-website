# Handover: Qaavah Books marketing site

## Overview
Two marketing pages plus a store-asset canvas, built as **design references in HTML**. They are not production code — recreate them in whatever the site runs on (Next.js / Astro / plain templates). Everything visual is final-value and can be lifted verbatim; the JavaScript in these files is demo scaffolding and should be replaced with real implementations as noted below.

| File | What it is |
|---|---|
| `pages/Personal Tour.html` | Personal money lane. Available in **every** market. |
| `pages/Business Tour.html` | Shop / business lane. **Market-gated** — see below. |
| `pages/Store Screenshots.html` | 12 export canvases: App Store 1290×2796 and Google Play 1080×1920, 6 each. Capture 1:1, no resizing. |
| `assets/qaavah-mark.png` | Brand mark (845×881, dark artwork on transparency — always needs a light backing). |

**Fidelity: high.** Colours, type, spacing, radii, shadows and copy are production-ready. Sample data inside the phone mockups is fictional but shaped to match real app screens.

---

## The two rules that drive everything

### 1. Lane colour is fixed by brand, not by market
Per the project's design decision: **business chrome is always indigo** (`#283593` / `#1A237E`) regardless of business type — the trade is signalled only by its emoji + label ("🛒 Retail", "🚌 Transport"), never by recolouring the chrome. **Personal keeps the sage lane** (`#4A7259`).

### 2. The business lane is closed in the US, Canada and Europe
This comes from `lib/config/billing_config.dart` → `shopBusinessOpenFor(countryCode)`:

```
US, CA                     → false
pricing band H (Europe)    → false
region contains 'Europe'   → false
everything else            → true
```

The comment in the source is explicit: *"Shop owner tools are open in Africa / LatAm and closed in US, CA, Europe. Closed markets still allow staff join."*

**The site must not invent its own version of this rule.** Read it from the same shared config the app uses, or from an endpoint that wraps it. When it returns false, the business page must:
- show the REGION notice (`.gate`)
- show the "not on sale here yet" note above the plans (`.closednote`)
- dim the prices (`.plans.closed`)
- swap all three CTAs to **Join the waitlist**
- show a "Not yet in {country}" badge

`billing_config.dart` also has `isUsStyleMarket()` and `isUsPersonalFirstLayout()` — the US should lead with personal finance. Worth honouring in routing: US/CA/EU traffic should land on the personal page by default.

---

## Design tokens

### Personal lane (sage)
| Token | Value |
|---|---|
| brand / hero fill | `#4A7259` (sageDeep) |
| accent / emphasis | `#5F8A6E` (sage) |
| tint | `#E7EFE9` (sageTint) |
| deep | `#3E614C` (sageDark) |

### Business lane (indigo)
| Token | Value |
|---|---|
| brand / hero fill | `#283593` |
| pressed / deep | `#1A237E` |
| tint | `#E8EAF6` |
| lift (on dark) | `#C5CAE9` |

### Shared
| Token | Value | Use |
|---|---|---|
| `paper` | `#FAFAF7` | page background |
| `ink` | `#15161A` / `#182018` | primary text |
| `body` | `#585D63` | body copy — **not `--muted`** (see accessibility) |
| `muted` | `#7A7D85` | in-app chrome labels only |
| `faint` | `#A8ABB3` | placeholders |
| `rule` / `hair` | `rgba(21,22,34,.10)` / `.06` | borders, dividers |
| `income` | `#16834A` (tint `#E7F3EC`) | money in |
| `expense` | `#B33A2A` (tint `#F8EBE8`) | money out |
| `amber` | `#B07310`, text `#B45309`, tint `#FBF1DD` | warnings, due, low stock |
| `gold` | `#D4A017` | peak bars, "most shops" flag |

### Type
- **Geist** — marketing chrome (300–700). Display sizes at weight 600, letter-spacing −2.4px to −4px.
- **Plus Jakarta Sans** — everything **inside the phone frames**, because that's what the app uses (`lib/theme/app_theme_v2.dart`).
- **JetBrains Mono** — every money value, plus the app's small uppercase section labels (`THIS WEEK`, `STARRED`, `BALANCE · YEAR`). Confirmed against real device screenshots; do not convert these to a sans.
- **Material Symbols Rounded** (weight 300 in chrome, 400 in-app) — matches Flutter's `Icons.*_rounded`.

### Geometry
Cards 22–26px radius, borderless with layered soft shadows (`0 1px 2px rgba(21,22,34,.05), 0 20px 46px -28px rgba(21,22,34,.28)`). Buttons are pills. **No hard offset shadows and no 1px hairline borders on cards** — that vocabulary was deliberately removed as dated. Hairlines survive only as dividers *inside* cards.

Device frames: `372×756` phone, `aspect-ratio: 372/756` (0.492) on the screen. Gallery frames cap at `max-width:340px` and centre. Keep this ratio — several rounds of layout bugs came from letting a frame's height float free of it.

---

## Page structure

Both pages share the same skeleton:

1. **Sticky nav** — brand · lane toggle · section links · Menu dropdown (≤1180px) · language · country · CTA
2. **Hero** — paper background, eyebrow pill, display headline with a coloured `<em>`, lede, two CTAs, note. Business also has the region gate and business-type chips.
3. **Workflow player** — numbered steps beside a phone; autoplays, click to jump. Personal: 8 steps. Business: 6.
4. **Why us** — 4 contrast cards ("them" vs "us" vs why it matters)
5. **Screens gallery** — full device frames, one per feature, each tagged with the tier that unlocks it
6. **Business only: Staff management** — 3 role cards + tick list + a static handover-review phone
7. **Business only: Features grid** — 12 cards, each tier-tagged
8. **Pricing** — plan cards, live-switching prices
9. **Footer**

---

## Interactive behaviour

### Workflow player
Autoplay (personal 4s, business 4.4s), progress bar per step, pause/play, click-to-jump, hover pauses, respects `prefers-reduced-motion`.

**Scope the selectors.** `document.querySelectorAll('.pane')` swept in a static mockup from another section and threw once the index passed the step count. Use `#screen .pane` / `#steps .step`, and give always-visible mockups a different class (`.spane`).

### Country selector — the important one
14 markets covering every pricing band. Selecting one updates, live:
- every plan price (`[data-price="…"]`) and annual (`[data-annual="…"]`) — **annual is exactly 10× monthly** (`PlanPrice.annualAmount`)
- the extra-seat figure
- the "Showing prices for {country}" line
- the business market gate state
- **the sample data inside the phone screens** — currency, amounts, payment methods, merchant/staff/product/customer names

Prices come from `lib/config/pricing_config.dart`. Anchors used:

| | Personal Plus | Shop Starter | Shop Pro | Business Ultimate | Extra seat |
|---|---|---|---|---|---|
| US | $4.99 | $9.99 | $17.99 | $34.99 | $2.99 |
| CA | CA$5.99 | 11.99 | 21.99 | 42.99 | 3.49 |
| EUR / GB | €3.99 | 7.99 | 14.99 | 29.99 | 2.49 |
| GH | GH₵15 | 45 | 75 | 155 | 10 |
| NG | ₦1,900 | 4,900 | 7,900 | 15,900 | 800 |
| KE | KSh199 | 499 | 799 | 1,599 | 80 |
| ZA | R39 | 99 | 189 | 379 | 19 |
| CFA | 1,200 | 3,000 | 6,000 | 12,000 | 600 |
| IN | ₹99 | 249 | 449 | 899 | 45 |
| BR | R$9.90 | 24.90 | 44.90 | 89.90 | 4.90 |
| MX | MX$49 | 129 | 229 | 449 | 23 |
| AE | 4.49 | 8.99 | 15.99 | 31.99 | 2.99 |

**Never convert.** Pricing is PPP-banded per market — always read the local row. Format with the app's own rule (`PricingConfig.formatAmount`): no decimals when the amount is whole.

In production, resolve the country server-side (geo / `Accept-Language` / store locale) with a manual override, and persist the choice. The demo stores it in `localStorage.qb_site_country`.

### Screen localiser (`window.qbLocalizeScreens`)
Rewrites the mockup sample data per market. Region packs, not per-country tables: `us`, `eu`, `waf`, `eaf`, `latam`, `asia`, `gulf`. Personal baselines on US; business baselines on GH.

Four hard-won implementation notes — the bugs here were all real:
1. **Anchor to a stored baseline** (`data-mbase`). Reading the current text and rescaling compounds on every switch.
2. **Assigning `textContent` destroys child nodes**, which loses the baseline stored on a text node. Store it on the *element*.
3. **Do name/method swaps in one pass** via a lookup regex. Sequential `split/join` chains them: Card → Cash → Credit.
4. **Exclude two classes of number**: anything the pricing selector owns (`[data-price]`) — those are real prices, not conversions — and plain counts (3 staff, 5 seats, 142 items). The FX rates in the demo are illustrative, for making sample figures plausible only.

If you'd rather not port the localiser, the alternative is a small per-locale JSON of screen strings — cleaner, more translator-friendly, and the right call if the site gets real i18n.

### Language selector
English · Français · Español · Português — the four the app ships. **Demo only: it does not translate the page.** Replace with real i18n routing (`/fr/…`). It correctly sets `document.documentElement.lang` and persists to `localStorage.qb_site_lang`.

One content note worth keeping: the menu says *currency and payment methods follow your country, not your language*. That's true in the app and heads off a common misunderstanding.

### Dropdowns
Built on `<details>` so they work without JS. Opening one closes the others; outside click closes. Keep that behaviour — three stacked popovers was a real bug.

---

## Accessibility decisions (please preserve)
- **Body copy is `#585D63`, not `--muted`.** `--muted` (`#7A7D85`) is ~4.0:1 on paper and fails AA at small sizes. It survives only inside phone mockups where it mirrors `AppThemeV2.muted`.
- **Buttons on a coloured field need a light fill.** `sageDeep` on `sageDark`, or `sageDeep` on `night`, is ~1.27:1 — the button vanishes. Any CTA on a dark surface uses a light fill with ink text (≈5.9:1), satisfying WCAG 1.4.11's 3:1 for component boundaries.
- Nav links are `white-space: nowrap`; when they collapse below 1180px the Menu dropdown must expose the same anchors.
- The brand mark is dark artwork on transparency — it needs a light chip or a light page background, never a dark green one.
- All four budget pace states must stay visually distinct: **ahead** `income`, **behind** `amberText`, **on track** `muted`, **over by** `expense`.

---

## Grounding — where the content comes from
Everything factual traces to the Flutter source (`Savelula/akontaabu_app`). If you change these claims, change them there first:

| Claim on the site | Source |
|---|---|
| Plan prices, annual = 10× monthly, PPP bands | `lib/config/pricing_config.dart` |
| Tier feature tags (Starter / Pro / Ultimate) | `PlanEntitlements` in the same file |
| Business closed in US/CA/EU | `lib/config/billing_config.dart` |
| Free = 20 entries/month | `PlanEntitlements.free` |
| Payment methods per country | `lib/config/country_config.dart` |
| ADD / MATCH / IGNORE + drift banner | `lib/screens/pf_statement_import_screen.dart` |
| Pace mark, ahead/behind/on track/over by | `lib/screens/budget_screen.dart` |
| Gift card spent-of-original, 30-day expiry, low balance, archive | `lib/utils/pf_gift_cards.dart` |
| Quick list tabs + Starred/Added/Suggested + statusLine | `lib/utils/pf_quick_pick_rows.dart` |
| Recurring: This week / Later this month, due pills, paused | `lib/utils/pf_recurring_display.dart` |
| Add-to-pot flow (presets 50/200/500 + Max, hatched preview) | `lib/screens/pf_add_to_pot_screen.dart` |
| Handover day total = **sum** of submissions; day locks when all approved | `lib/utils/handover_utils.dart` |
| Report Grouped / Latest views | `lib/screens/report_screen_v2.dart` |

**Offline sync is a shop-tier entitlement, not a personal one** (`PlanEntitlements` — `offlineSync` is false on `personalPlus`). The personal page says logging works unconnected and Plus backs up to cloud; don't upgrade that to "works offline".

---

## What's still to do
1. **Real i18n** — replace the demo language picker; FR/ES/PT copy doesn't exist yet. German and French run ~25% longer than English; the display headlines at −4px tracking are the tightest spot.
2. **Waitlist capture** for gated markets — the CTAs currently go nowhere.
3. **Screenshots for the stores** — `Store Screenshots.html` gives the layout and exact canvas sizes, but the phone content is a recreation. Consider capturing the real app instead; the store pages are the first impression and get compared to the app.
4. **SEO / meta / OG images**, analytics, and a cookie posture that doesn't undercut the "we don't want your data" argument.
5. **Play Store note**: a new personal Google developer account needs a **14-day closed test with 12+ testers** before production. Start that clock early.
