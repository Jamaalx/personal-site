# Deploy on Coolify (Hetzner)

Step-by-step for first deploy of this portfolio at `alexandru.zed-zen.com`.

## 1. Coolify — New Resource

1. Log into Coolify on your server
2. **+ New** → **Public Repository**
3. **Git Repository**: `https://github.com/Jamaalx/personal-site`
4. **Branch**: `main`
5. **Build Pack**: `Nixpacks` (auto-detects Next.js) — or `Docker` if you prefer (see optional Dockerfile below)
6. **Port**: `3000`

## 2. Build & Start Commands

If Nixpacks doesn't auto-detect correctly, set these manually:

| Field | Value |
|-------|-------|
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Start Command | `npm start` |
| Port | `3000` |

## 3. Domain

1. **Domains** tab in Coolify
2. Add `https://alexandru.zed-zen.com`
3. Enable **Force HTTPS**
4. Coolify will auto-provision a Let's Encrypt cert

## 4. DNS (Cloudflare or wherever zed-zen.com lives)

Add a CNAME record:
- **Type**: `CNAME`
- **Name**: `alexandru`
- **Target**: your Coolify server's IP / hostname
- **Proxy status**: DNS only (grey cloud) — Coolify handles SSL via Let's Encrypt

Or A record pointing directly at the server IP.

## 5. Environment Variables

None required for now. (Add `NEXT_PUBLIC_GA_TRACKING_ID` if you want Google Analytics later.)

## 6. Deploy

Click **Deploy** in Coolify. First build takes ~3-5 minutes (npm install + Next.js build).

## 7. Auto-deploy on push

In **Configuration → Webhook**, copy the webhook URL and add it to GitHub:
- Repo Settings → Webhooks → Add webhook
- Paste URL, set Content type to `application/json`
- Events: just `push`

Now every push to `main` auto-deploys.

## Optional: Dockerfile

If you prefer Docker over Nixpacks, create this `Dockerfile` in repo root:

```dockerfile
FROM node:22-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "start"]
```

Then in Coolify pick **Build Pack: Dockerfile**.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Build fails on TypeScript errors | Run `npm run type-check` locally and fix |
| 404 on subpages after deploy | Check that `npm start` is the start command (not `npx next export`) |
| Images not loading | Verify `public/images/projects/` was committed (run `git ls-files public/images` locally) |
| SSL cert pending | DNS not propagated yet — wait 5-30 min and retry deploy |
| Wrong domain in OG meta | Update `SITE_URL` in `src/lib/utils.ts` if you switch domains |
