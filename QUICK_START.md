# Quick Start Guide

## ✅ Migration Complete!

Your site is now running on Next.js 14. The dev server is working!

## Current Status

✅ **Build**: Compiling successfully  
✅ **Dev Server**: Running at http://localhost:3000  
⚠️ **Data**: Needs Prismic access token

## Fix the "Invalid access token" Error

### Option 1: Add Your Prismic Token (Recommended)

1. Create `.env.local` in the root directory:
   ```bash
   touch .env.local
   ```

2. Add your Prismic credentials:
   ```env
   NEXT_PUBLIC_PRISMIC_REPOSITORY=your_prismic_repository_name
   PRISMIC_ACCESS_TOKEN=your_actual_token_here
   ```

3. Get your token from:
   - Go to https://your-repository-name.prismic.io/settings/apps/
   - Or Settings → API & Security → Repository security
   - Copy the "Permanent access token"

4. Restart the dev server:
   ```bash
   # Press Ctrl+C to stop
   npm run dev
   ```

### Option 2: Make Repository Public (Temporary Testing)

If you just want to test without a token:

1. Go to your Prismic dashboard
2. Settings → API & Security
3. Set "Repository security" to "Public API"
4. Remove the `accessToken` line from `src/lib/prismic.js`

## What's Working Now

✅ Next.js server running  
✅ All components compiled  
✅ Material-UI v5 working  
✅ SVG imports working  
✅ Styled components working  
✅ CSS modules working  
✅ Routing configured  

## What Needs Prismic Token

- Home page content
- About section
- Services section  
- Packages section
- Events page
- Gallery images
- FAQ content

## Test Without Prismic (Optional)

You can test the layout and navigation without Prismic data:

1. The pages will load with empty content
2. Navigation will work
3. Forms will work
4. Styling will be visible

## Once Token is Added

The site will:
- Load all content from Prismic
- Display hero images
- Show event cards
- Populate gallery
- Display FAQ items

## Next Steps

1. **Add Prismic token** to `.env.local`
2. **Restart dev server**
3. **Visit** http://localhost:3000
4. **Test all pages**:
   - Home (/)
   - Events (/events)
   - Gallery (/gallery)
   - FAQ (/faq)

## Deploy

Once everything works locally:

### Vercel (Recommended)
```bash
npm run build
# Then deploy to Vercel
```

Add environment variables in Vercel dashboard:
- `PRISMIC_ACCESS_TOKEN`
- `NEXT_PUBLIC_PRISMIC_REPOSITORY`

### Other Platforms
```bash
npm run build
npm start
```

---

**You're almost there!** Just add your Prismic token and you're good to go. 🎉
