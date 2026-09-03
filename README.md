# Qaavah Books — website

Marketing site + privacy policy for **Qaavah Books** (operator: **Qavaah Platforms LLC**).

| Path | Live URL (after deploy) |
|------|-------------------------|
| `index.html` | `https://YOUR_DOMAIN/` |
| `privacy/index.html` | `https://YOUR_DOMAIN/privacy/` |

Draft markdown for counsel: `docs/privacy-policy-draft.md`

## Country / market lane

The landing page has a **country picker** (nav). It mirrors the app gate (`BillingConfig.shopBusinessOpenFor`):

| Lane | Regions | Site shows |
|------|---------|------------|
| **Shop + personal** | All **53 African** countries, LatAm/Caribbean, Asia & Oceania | Shop hero, Who/shop card, shop plans |
| **Personal only** | US, Canada, Europe | Personal hero, features, quotes, pricing & Who — shop tour / till / staff hidden |

The picker lists **181** countries from the app registry, grouped (Africa → LatAm → Asia & Oceania → personal-only). Choice is stored in `localStorage` (`qb_country`).

## Preview

```bash
python3 -m http.server 8080
# http://127.0.0.1:8080/  — try switching United States vs Ghana
```

## Before go-live

1. Domain (e.g. `qaavah.com`) — update canonical / og:url in HTML if different
2. `hello@…` / `privacy@…` mailboxes
3. LLC postal address on the privacy page
4. Legal review
5. Paste privacy URL into Play Console / App Store Connect

## Deploy

**Cloudflare Pages (recommended):** connect this repo → Framework none → build empty → output `.`  
**Netlify:** publish `.` (`netlify.toml` already set)  
**GitHub Pages:** Settings → Pages → deploy from `main` root

## Related repos

- Flutter app: `akontaabu_app`
- Go API: `akontaabu`
