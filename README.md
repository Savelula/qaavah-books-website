# Qaavah Books — website

Marketing site + privacy policy for **Qaavah Books** (operator: **Qavaah Platforms LLC**).

| Path | Live URL (after deploy) |
|------|-------------------------|
| `index.html` | `https://YOUR_DOMAIN/` |
| `privacy/index.html` | `https://YOUR_DOMAIN/privacy/` |

Draft markdown for counsel: `docs/privacy-policy-draft.md`

## Country / market lane

The landing page has a **country picker** (nav). Marketing lanes (website):

| Lane | Regions | Site shows |
|------|---------|------------|
| **Shop + personal** | **Africa** only | Existing shop landing (till, staff, catalogue, shop plans) |
| **Personal money** | Everywhere except Africa (US, Canada, Europe, LatAm, Asia & Oceania) | Product Tour US-EU layout (`css/personal-tour.css`): night hero, 6-step workflow phone, screens gallery, Free + Personal Plus |

> App gate still opens shop tools in Africa **and** LatAm (`BillingConfig.shopBusinessOpenFor`). This marketing page uses Africa-only for the shop story; LatAm visitors see the personal tour until product decides otherwise.

The picker lists **181** countries from the app registry. Choice is stored in `localStorage` (`qb_country`).

## Preview

```bash
python3 -m http.server 8080
# http://127.0.0.1:8080/  — United States / France → personal tour; Ghana → shop
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
