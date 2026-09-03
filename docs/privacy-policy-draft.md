# Privacy Policy — Qaavah Books

**Status:** DRAFT — not yet published. Review with counsel before going live.  
**Last updated:** 14 July 2026  
**Effective date:** _[set when published]_  

**Operator:** Qavaah Platforms LLC (“we”, “us”, “our”)  
**Product:** Qaavah Books (mobile app for shop bookkeeping and personal ledgers)  
**Contact (privacy):** _[REPLACE: privacy@yourdomain.com]_  
**Postal address:** _[REPLACE: LLC registered address]_  

When published, host this at a stable HTTPS URL (see **`website/privacy/`** in the app repo — deploy instructions in `website/README.md`) and use that same URL in Google Play Console, App Store Connect, and (optionally) in-app Settings.

---

## 1. Scope

This policy explains how we collect, use, store, and share information when you use Qaavah Books on Android or iOS, and our related backend services.

It does **not** cover third-party websites or apps that we do not control.

---

## 2. Information we collect

### 2.1 Account and authentication

- **Phone number** — used to create and sign in to your account.
- **One-time passcodes (OTP)** — sent by SMS through our SMS provider so we can verify that you control the number. We do not treat the OTP as a long-term password; session access uses a secure token stored on your device.
- **Account profile details you provide** — for example display name and optional profile photo.

### 2.2 Business and financial data you enter

Depending on how you use the app, this may include:

- Business / workplace names, country, currency, and business type  
- Sales, expenses, custom ledger entries, notes, payment method labels  
- Inventory or services catalogue (names, prices, stock, barcodes you generate)  
- Staff-related data owners invite (e.g. staff phone for join invites, role/tier)  
- Transport-related records if you use those features (trips, handovers, costs)  
- Personal-finance entries, budgets, debts, wallets, and similar tools when you use a personal ledger  

You decide what to type or import. We process it to provide the product (sync, reports, multi-device/staff access where enabled).

### 2.3 Photos and device captures

| Feature | What happens |
|---------|----------------|
| **Profile avatar** | Uploaded to our servers; we resize/re-encode as JPEG and store it for your account. |
| **Inventory product photos** | Processed on the device (size/safety checks + JPEG re-encode) for shelf labels; **not synced to our servers** in the current version. |
| **Receipt scan** | Image is processed **on the device** for OCR to help fill an entry. The receipt image is **not uploaded** to our servers as part of that flow. |
| **Barcode / QR scanner** | Camera is used on-device to look up catalogue items; we do not receive a live camera stream. |

### 2.4 Device and technical data

- App version, device type/OS (as needed for diagnostics and compatibility)  
- Approximate request metadata such as IP address, timestamps, and security/rate-limit signals when your app talks to our API  
- Crash or error information **if** we later enable a crash-reporting SDK (we will update this policy if we do)

We do **not** sell your personal information.

### 2.5 Personal finance “on-device-only” mode

For a personal ledger, you may enable **on-device-only** privacy. When enabled for that ledger:

- Entries for that ledger stay on your phone (local encrypted/local storage as implemented in the app).  
- Those entries are **not** uploaded to our cloud sync for that ledger.  
- If you lose the device without a backup you exported yourself, **we cannot restore** that on-device data.

Encrypted personal backups (`.konta` files) that you export stay under your control; we do not receive them unless you choose to send them to us for support.

---

## 3. How we use information

We use the information above to:

- Create and authenticate accounts (including OTP verification)  
- Provide bookkeeping features, sync, reports, staff access, and related product functions  
- Secure the service (abuse prevention, rate limits, fraud/security monitoring)  
- Communicate transactional messages (e.g. login codes); marketing only if you opt in where required by law  
- Comply with law and enforce our terms  
- Improve reliability and fix bugs  

Legal bases (where GDPR/UK GDPR or similar apply) typically include: **contract** (providing the app you asked for), **legitimate interests** (security, product integrity), and **consent** where required (e.g. certain notifications or optional analytics if added later).

---

## 4. How we share information

We share data only as needed to run the service:

| Recipient | Why |
|-----------|-----|
| **Cloud hosting / infrastructure** | Run the API and databases (e.g. cloud compute and managed storage in regions we configure). |
| **SMS provider** | Deliver OTP codes to your phone number. |
| **Payment / billing providers** | Process paid plans if you subscribe (e.g. store billing or third-party checkout). Card data is handled by the payment provider, not stored as full card numbers on our servers. |
| **Staff you invite** | Owners can grant workplace access; staff see data allowed by their role. |
| **Professional advisers / authorities** | Only when required by law or to protect rights, safety, and the service. |

We do **not** sell personal information or share it for third-party advertising.

---

## 5. International transfers

Our servers and subprocessors may be located in countries different from yours (including the United States or other regions). Where required, we use appropriate safeguards for cross-border transfers.

---

## 6. Retention

- **Account and synced ledger data** — kept while your account is active and for a reasonable period afterward if needed for backups, disputes, or legal obligations.  
- **On-device-only personal data** — retained on your device until you delete it or uninstall the app (subject to your device backups).  
- **OTP / security logs** — short retention consistent with security needs.  
- **Profile photos** — retained while associated with an active account.

When you request deletion (see below), we delete or anonymize personal data in our systems within a reasonable period, except where we must retain information for law, fraud prevention, or unresolved disputes.

---

## 7. Security

We use industry-standard measures appropriate to a financial bookkeeping app, including:

- Encryption **in transit** (HTTPS/TLS) for production API traffic  
- Access controls and session tokens for authenticated APIs  
- Server-side checks on certain uploads (e.g. avatar size and image re-encoding)  
- Optional on-device-only mode for personal ledgers  

No method of transmission or storage is 100% secure. Protect your phone with a device lock; treat staff invites carefully.

---

## 8. Your rights and choices

Depending on where you live, you may have rights to access, correct, delete, export, or restrict certain processing of your personal data, and to object to certain processing.

**In-app / product choices today:**

- Edit or delete many ledger entries you control  
- Enable/disable personal on-device-only privacy for a personal ledger  
- Export encrypted personal backups where the app provides that feature  
- Sign out and remove the local session token from the device  

**Account or full data deletion:** email _[REPLACE: privacy@yourdomain.com]_ from the phone number / email associated with the account and ask for deletion. We may verify that you control the account before acting. _[Note for operators: ship an in-app “Delete account” flow before or soon after launch if Play/Apple require a URL or in-app path.]_

You may also complain to a data protection authority in your country where applicable.

---

## 9. Children

Qaavah Books is aimed at adults running businesses or personal finances. We do not knowingly collect personal information from children under 13 (or under 16 where that is the local standard). If you believe a child has created an account, contact us and we will take appropriate steps.

---

## 10. Third-party links and stores

Purchases may be processed by Google Play or Apple. Their privacy policies apply to store account and payment data. We only receive what we need to unlock features you bought.

---

## 11. Changes to this policy

We may update this policy from time to time. We will change the “Last updated” date and, for material changes, provide additional notice (e.g. in-app or by email/SMS where appropriate). Continued use after the effective date means you accept the updated policy where permitted by law.

---

## 12. Contact

**Privacy requests:** _[REPLACE: privacy@yourdomain.com]_  
**Operator:** Qavaah Platforms LLC  
**Address:** _[REPLACE]_  

---

## Operator checklist before publish

- [ ] Replace all `_ [REPLACE] _` fields (email, address, effective date)  
- [ ] Confirm SMS provider name in §4 if you want it named (optional; “SMS provider” is enough for many listings)  
- [ ] Confirm hosting region wording matches production (EC2 / cloud)  
- [ ] Confirm whether crash reporting / analytics will ship in v1 — if yes, add a short subsection  
- [ ] Lawyer or trusted review (recommended for LLC + money apps)  
- [ ] Publish at HTTPS URL; paste same URL into Play Console + App Store Connect  
- [ ] Optionally add Settings → Privacy policy link opening that URL  
- [ ] Prefer an in-app **Delete account** path before/shortly after store launch  

---

*This draft is a product-aligned starting point, not legal advice.*
