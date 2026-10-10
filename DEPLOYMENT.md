# Deployment & Live Custom Domain Guide — `techbyadil.xyz`

This guide explains how to take the **TechByAdil** portfolio website live on your custom domain **`techbyadil.xyz`** with free automated HTTPS/SSL and global CDN caching.

---

## 🎯 Quickest Way to Go Live: Vercel (100% Free & Zero Config)

Vercel natively supports Vite + React, automatically provisions SSL certificates, and honors our `vercel.json` security headers.

### Step 1: Push Project to GitHub
```bash
git add .
git commit -m "feat: TechByAdil portfolio ready for launch on techbyadil.xyz"
# If you have not created your remote repository yet:
# git remote add origin https://github.com/techbyadil/techbyadil.git
# git branch -M main
# git push -u origin main
```

### Step 2: Import into Vercel
1. Go to [https://vercel.com/new](https://vercel.com/new).
2. Select your `techbyadil` repository.
3. Keep default settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your site will be live on a `*.vercel.app` domain in ~45 seconds.

### Step 3: Connect Your Domain `techbyadil.xyz`
1. In your Vercel Project Dashboard, click **Settings** → **Domains**.
2. Type **`techbyadil.xyz`** and click **Add**.
3. Vercel will ask you to add `www.techbyadil.xyz` as well (recommended: redirect `www` to root).
4. Vercel will show the exact DNS records to configure at your domain registrar (Namecheap, Hostinger, GoDaddy, Cloudflare, Porkbun, etc.):

#### Your DNS Records:
| Type | Name / Host | Target / Value | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` (or leave blank) | `76.76.21.21` | Automatic / 300 |
| **CNAME** | `www` | `cname.vercel-dns.com` | Automatic / 300 |

5. Once you save these records in your DNS manager, Vercel verifies them automatically within 2 to 15 minutes and issues a free Let's Encrypt SSL certificate!

---

## 🛡️ Alternative: Cloudflare Pages (Enterprise DDoS & Zero Egress)

1. Go to [https://dash.cloudflare.com/](https://dash.cloudflare.com/) → **Workers & Pages** → **Create application** → **Pages**.
2. Connect your GitHub repository.
3. Build Settings:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Click **Save and Deploy**.
5. Go to **Custom domains** → Add **`techbyadil.xyz`**. Cloudflare will handle SSL and DNS routing automatically if your nameservers are on Cloudflare!

---

## 💻 Alternative: Hostinger / cPanel / Shared Hosting / VPS

If you are using traditional shared hosting or VPS:
1. Run local build:
   ```bash
   npm run build
   ```
2. Upload all files from the `dist/` folder directly to your hosting's `public_html/` folder.
3. Ensure `.htaccess` (Apache) or Nginx redirects all routes to `index.html`:

### `.htaccess` for Apache / cPanel:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔍 Post-Launch Verification

- [ ] Visit `https://techbyadil.xyz/` in your browser.
- [ ] Confirm dark mode loads smoothly by default and light mode toggles cleanly.
- [ ] Test the Project Estimator, Case Study modals, and Contact inquiry form.
- [ ] Run a test on [https://securityheaders.com/](https://securityheaders.com/) with `techbyadil.xyz` to verify your Grade A / A+ rating.
