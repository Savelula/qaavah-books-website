# Qaavah Books — website

Marketing site + privacy policy for **Qaavah Books** (operator: **Qavaah Platforms LLC**).

| Path | Live URL (after deploy) |
|------|-------------------------|
| `index.html` | `https://YOUR_DOMAIN/` |
| `privacy/index.html` | `https://YOUR_DOMAIN/privacy/` |

Draft markdown for counsel: `docs/privacy-policy-draft.md`

## Preview

```bash
python3 -m http.server 8080
# http://127.0.0.1:8080/  and  http://127.0.0.1:8080/privacy/
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
