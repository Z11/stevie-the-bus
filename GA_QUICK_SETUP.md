# Google Analytics - Quick Setup

## ✅ Already Configured!

Google Analytics is set up and ready to use. Just need your tracking ID.

## 3 Steps to Activate

### 1. Get Your GA4 Measurement ID

Go to [Google Analytics](https://analytics.google.com/):
- Admin → Data Streams → Your Stream
- Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Update `.env.local`

Replace the placeholder:
```env
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

### 3. Restart Server

```bash
# Press Ctrl+C
npm run dev
```

## Verify It Works

1. Visit your site
2. Go to GA → Reports → Realtime
3. You should see yourself as an active user

## What's Tracked Automatically

✅ Page views  
✅ Scroll depth  
✅ Outbound clicks  
✅ File downloads  
✅ Form submissions (Contact form)

## Important Notes

- **Use GA4** (G-XXXXXXXXXX), not old Universal Analytics (UA-XXXXXXXXXX)
- **Must start with `NEXT_PUBLIC_`** for browser access
- **Restart required** after changing `.env.local`
- **Works in dev mode** for testing

## For Production Deployment

Add the environment variable in your hosting platform:
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables
- **Other**: Add `NEXT_PUBLIC_GA_TRACKING_ID` in your platform

---

See `GOOGLE_ANALYTICS_SETUP.md` for detailed instructions.
