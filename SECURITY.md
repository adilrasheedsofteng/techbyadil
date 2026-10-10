# Security Policy & Implementation Architecture — TechByAdil

**Domain**: `techbyadil.xyz`  
**Brand**: Adil Rasheed • TechByAdil  
**Security Status**: Enterprise Hardened  

---

## 1. Overview & Threat Model

The **TechByAdil** portfolio is engineered with a **defense-in-depth security model** designed to protect visitor privacy, withstand automated bot scraping/spam, prevent Cross-Site Scripting (XSS), eliminate clickjacking, and enforce strict modern browser sandboxing.

---

## 2. Implemented Security Controls

### A. Content Security Policy (CSP)
Strict CSP directives are deployed via HTTP headers (`_headers` for Cloudflare/Netlify and `vercel.json` for Vercel) and validated in meta tags:

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self'; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self' mailto: https://wa.me;
```

- **`frame-ancestors 'none'`**: Completely prevents embedding inside iframes on external websites, mitigating clickjacking attacks.
- **`object-src 'none'`**: Blocks malicious legacy browser plugins (Flash, Java).
- **`base-uri 'self'`**: Prevents `<base>` tag injection attacks.
- **`form-action 'self' mailto: https://wa.me`**: Ensures forms cannot be manipulated to send payloads to unauthorized third-party domains.

---

### B. HTTP Hardening Headers

| Header | Value | Purpose |
| :--- | :--- | :--- |
| **`X-Frame-Options`** | `DENY` | Prevents rendering within frames/iframes |
| **`X-Content-Type-Options`** | `nosniff` | Prevents browser MIME-type sniffing |
| **`Referrer-Policy`** | `strict-origin-when-cross-origin` | Strips path data when navigating external links |
| **`Permissions-Policy`** | `camera=(), microphone=(), geolocation=(), payment=()` | Disables access to sensitive hardware APIs |
| **`Strict-Transport-Security`** | `max-age=63072000; includeSubDomains; preload` | Enforces HTTPS for 2 years with HSTS preload |
| **`Cross-Origin-Opener-Policy`**| `same-origin` | Isolates browsing context against Spectre leaks |
| **`Cross-Origin-Resource-Policy`**| `same-origin` | Blocks cross-origin asset theft |

---

### C. Input Sanitization & XSS Defense
All client-side form fields are passed through `sanitizeInput()` (`src/utils/security.ts`):
- Strips any HTML tags (`<script>`, `<iframe>`, `<img>`, etc.).
- Truncates excessive input lengths (max 100 chars for names, 120 for emails, 3,000 for details) to prevent memory flooding or buffer attacks.
- Uses a **non-backtracking ReDoS-safe email validation regex** that complies with RFC standards without risking catastrophic backtracking.

---

### D. Anti-Spam & Anti-Bot Architecture
Instead of user-hostile CAPTCHAs that degrade international client conversions, TechByAdil employs a **dual-layer invisible defense**:
1. **Honeypot Trap (`botcheck`)**: An invisible input field that is hidden from legitimate users via CSS and ARIA. Automated scrapers and spam bots auto-fill this field; if any value is present, the submission is rejected.
2. **Timing Challenge**: Automated bots submit forms within milliseconds of loading. The form timestamps its initial render (`formRenderTime`); if submitted under 2.5 seconds, the submission is flagged and rejected.
3. **Client-Side Cooldown / Rate Limiting**: Enforces a minimum 30-second interval between inquiries per browser session using `sessionStorage`, preventing submission floods.

---

### E. Link Security (`rel="noopener noreferrer"`)
All external links (GitHub, LinkedIn, WhatsApp, Live Demos) open with `target="_blank"` and strict `rel="noopener noreferrer"` attributes, preventing `window.opener` reverse tabnabbing vulnerabilities.

---

### F. Zero Secret Exposure
- No private API keys, database credentials, or secret authentication tokens exist in the client-side JavaScript bundle.
- Any future serverless functions or backends are configured exclusively via server environment variables.

---

## 3. Reporting a Vulnerability

If you discover a security issue or vulnerability relating to `techbyadil.xyz`, please report it directly to:
- **Email**: `security@techbyadil.xyz` or `contact@techbyadil.xyz`
- **Response SLA**: Within 24 hours
