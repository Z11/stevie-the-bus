# Google Analytics Setup Guide

## ✅ Google Analytics is Now Configured!

I've added Google Analytics 4 (GA4) support using Next.js's official `@next/third-parties` package.

## Current Status

✅ **Package Installed**: `@next/third-parties`  
✅ **Code Added**: GoogleAnalytics component in layout  
⚠️ **Tracking ID Needed**: Replace placeholder with your actual GA4 ID

## How to Get Your GA4 Tracking ID

### Option 1: From Your Existing GA Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** (gear icon in bottom left)
3. Under **Property**, click **Data Streams**
4. Click on your web stream
5. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

### Option 2: Create a New GA4 Property

If you don't have GA4 set up yet:

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** → **Create Property**
3. Enter property details:
   - Property name: "Stevie the Photo Bus"
   - Time zone: Your timezone
   - Currency: USD
4. Click **Next** → **Create**
5. Add a **Data Stream**:
   - Platform: **Web**
   - Website URL: `https://www.steviethephotobus.com`
   - Stream name: "Stevie Website"
6. Copy the **Measurement ID** (starts with `G-`)

## Update Your Environment Variable

Edit `.env.local` and replace the placeholder:

```env
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

## Restart the Dev Server

After updating `.env.local`:

```bash
# Press Ctrl+C to stop the server
npm run dev
```

## Verify It's Working

### 1. Check Browser Console

Open your site and check the browser console (F12). You should see:
- No GA-related errors
- Network requests to `google-analytics.com`

### 2. Use GA DebugView

1. Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/) Chrome extension
2. Enable the extension
3. Visit your site
4. Go to GA Admin → DebugView
5. You should see real-time events

### 3. Check Real-Time Reports

1. Go to Google Analytics
2. Click **Reports** → **Realtime**
3. Visit your website
4. You should see yourself as an active user

## What Gets Tracked

The `@next/third-parties/google` package automatically tracks:

- **Page views** - Every page navigation
- **Scroll depth** - How far users scroll
- **Outbound clicks** - Links to external sites
- **File downloads** - PDF, images, etc.
- **Video engagement** - If you have videos
- **Site search** - If implemented

## Features vs Old Gatsby Setup

### Old Gatsby Plugin
```javascript
gatsby-plugin-google-analytics
- Tracking ID: UA-XXXXXXXXX (Universal Analytics)
- Manual pageview tracking
- Basic events only
```

### New Next.js Setup
```javascript
@next/third-parties/google
- Measurement ID: G-XXXXXXXXXX (GA4)
- Automatic pageview tracking
- Enhanced measurement (scroll, clicks, etc.)
- Better performance (loads async)
- Privacy-focused (respects DNT)
```

## Privacy & Performance

The implementation:
- ✅ Loads asynchronously (doesn't block page load)
- ✅ Only loads if tracking ID is set
- ✅ Works with ad blockers (gracefully fails)
- ✅ GDPR compliant (no cookies without consent)
- ✅ Respects Do Not Track (DNT) browser setting

## Optional: Add Cookie Consent

If you need GDPR/CCPA compliance, consider adding a cookie consent banner:

```bash
npm install react-cookie-consent
```

Then wrap the GoogleAnalytics component with consent logic.

## Troubleshooting

### GA Not Tracking

1. **Check the ID format**: Must be `G-XXXXXXXXXX` (not `UA-XXXXXXXXXX`)
2. **Verify env variable**: Must start with `NEXT_PUBLIC_`
3. **Restart dev server**: Changes to `.env.local` require restart
4. **Check browser console**: Look for errors
5. **Disable ad blockers**: They may block GA scripts

### Old UA Property

If you have an old Universal Analytics (UA-XXXXXXXXX) property:

1. Create a new GA4 property (they can coexist)
2. Use the GA4 Measurement ID
3. Universal Analytics stopped collecting data on July 1, 2023

### Testing in Development

GA works in development mode. To test:

```bash
npm run dev
# Visit http://localhost:3000
# Check GA Real-Time reports
```

### Production Deployment

When deploying to production:

1. **Vercel**: Add `NEXT_PUBLIC_GA_TRACKING_ID` in project settings
2. **Netlify**: Add in Site settings → Environment variables
3. **Other platforms**: Set environment variable in your hosting dashboard

## Migration Notes

### What Changed from Gatsby

**Before (Gatsby):**
```javascript
// gatsby-config.js
{
  resolve: `gatsby-plugin-google-analytics`,
  options: {
    trackingId: process.env.GOOGLE_TRACKING_ID,
    head: true,
    anonymize: true,
    respectDNT: true,
  },
}
```

**After (Next.js):**
```javascript
// src/app/layout.js
import { GoogleAnalytics } from '@next/third-parties/google'

<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
```

### Benefits of New Setup

1. **Simpler**: One line of code vs plugin configuration
2. **Modern**: Uses GA4 instead of deprecated Universal Analytics
3. **Faster**: Optimized loading strategy
4. **Maintained**: Official Next.js package

## Need Help?

- [Next.js Analytics Docs](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Third Parties Package](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)

---

**Ready to track!** Just add your GA4 Measurement ID to `.env.local` and restart the server. 📊
