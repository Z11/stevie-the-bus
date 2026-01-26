# Netlify Deployment Guide

## ✅ Files Updated for Next.js Deployment

The following files have been created/updated to fix the Netlify deployment:

1. **`netlify.toml`** - Netlify configuration for Next.js
2. **`package.json`** - Added `@netlify/plugin-nextjs` dependency

## Steps to Deploy

### 1. Install the Netlify Plugin Locally (Optional)

```bash
npm install
```

This will install the `@netlify/plugin-nextjs` package.

### 2. Update Netlify Site Settings

Go to your Netlify dashboard and update these settings:

**Site Settings → Build & deploy → Build settings:**

- **Build command**: `npm run build` (or leave empty, netlify.toml will handle it)
- **Publish directory**: `.next` (or leave empty, netlify.toml will handle it)

### 3. Set Environment Variables

In Netlify dashboard: **Site settings → Environment variables**

Add these variables:
```
NEXT_PUBLIC_PRISMIC_REPOSITORY=your_prismic_repository_name
PRISMIC_ACCESS_TOKEN=your_prismic_token
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

### 4. Deploy

**Option A: Push to GitHub**
```bash
git add .
git commit -m "Migrate to Next.js and fix Netlify deployment"
git push origin master
```

Netlify will automatically detect the push and deploy.

**Option B: Manual Deploy**
In Netlify dashboard: **Deploys → Trigger deploy → Deploy site**

## What Changed

### Before (Gatsby):
```toml
[build]
  command = "gatsby build"
  publish = "public"
```

### After (Next.js):
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## Netlify Next.js Plugin Features

The `@netlify/plugin-nextjs` provides:
- ✅ Server-side rendering (SSR)
- ✅ API routes support
- ✅ Image optimization
- ✅ Incremental Static Regeneration (ISR)
- ✅ Middleware support
- ✅ Edge functions

## Troubleshooting

### Build fails with "gatsby: command not found"
- **Cause**: Old build command still configured
- **Fix**: Update build command in Netlify UI or ensure `netlify.toml` is committed

### Environment variables not working
- **Cause**: Variables not set in Netlify
- **Fix**: Add all required variables in Site settings → Environment variables

### Images not loading
- **Cause**: Prismic domain not configured
- **Fix**: Already configured in `next.config.js` with `remotePatterns`

### 404 errors on routes
- **Cause**: Redirect rules not working
- **Fix**: Already configured in `netlify.toml`

## Verify Deployment

After deployment, check:
1. ✅ Site loads at your Netlify URL
2. ✅ All pages work (/, /events, /gallery, /faq)
3. ✅ Images load from Prismic
4. ✅ Navigation works
5. ✅ Contact form works

## Alternative: Vercel Deployment

If you prefer Vercel (recommended for Next.js):

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel auto-detects Next.js
4. Add environment variables
5. Deploy!

Vercel is built by the Next.js team and has better Next.js support.

## Need Help?

- [Netlify Next.js Plugin Docs](https://docs.netlify.com/integrations/frameworks/next-js/)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)

---

**Ready to deploy!** Just push to GitHub and Netlify will build with the correct Next.js configuration.
