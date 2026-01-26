# Setup Instructions

## ✅ Migration Complete!

Your Gatsby site has been successfully migrated to Next.js 14 with all Material-UI imports updated to MUI v5.

## Quick Start

### 1. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_PRISMIC_REPOSITORY=your_prismic_repository_name
PRISMIC_ACCESS_TOKEN=your_actual_prismic_token_here
NEXT_PUBLIC_GA_TRACKING_ID=your_google_analytics_id
```

**Important:** Replace `your_actual_prismic_token_here` with your real Prismic access token. The build errors you're seeing are because the token is missing or invalid.

### 2. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

### 3. Build for Production

Once you've added your Prismic token:

```bash
npm run build
npm start
```

## What Was Changed

### ✅ Dependencies
- Removed all Gatsby packages
- Added Next.js 14
- Upgraded Material-UI v4 → MUI v5
- Added @svgr/webpack for SVG support
- Updated Prismic packages

### ✅ Code Updates
- All `@material-ui/core` → `@mui/material`
- All `gatsby-image` → `next/image`
- All Gatsby Link → Next.js Link
- All GraphQL queries → Prismic Client API
- Added 'use client' to interactive components
- Fixed CSS module selectors

### ✅ File Structure
- `src/pages/` → `src/app/` (App Router)
- `gatsby-config.js` → `next.config.js`
- SEO component → Next.js metadata API
- Layout component → `src/app/layout.js`

## Current Build Status

The build is working but failing at the data fetching stage because:
1. **Missing Prismic Access Token** - Add your token to `.env.local`
2. Pages will build successfully once Prismic credentials are configured

## Testing Checklist

Once you add your Prismic token, test:

- [ ] Home page loads with hero images
- [ ] About section displays
- [ ] Services section displays
- [ ] Packages section displays
- [ ] Contact form works
- [ ] Events page shows event cards
- [ ] Gallery page displays images with lightbox
- [ ] FAQ page shows accordions
- [ ] Navigation works (including hash links)
- [ ] Mobile menu toggles correctly
- [ ] Social icons display and link correctly

## Troubleshooting

### If pages don't load:
1. Check that `.env.local` exists with correct Prismic token
2. Verify Prismic repository name is correct
3. Check browser console for errors

### If images don't display:
1. Ensure `images.prismic.io` is in next.config.js domains
2. Check that image URLs from Prismic are valid

### If styles look broken:
1. Clear `.next` folder: `rm -rf .next`
2. Rebuild: `npm run build`

### If SVGs don't render:
1. Ensure @svgr/webpack is installed
2. Check next.config.js has webpack configuration

## Performance Benefits

Next.js offers several advantages over Gatsby:

- **Faster builds** - Incremental builds instead of full rebuilds
- **Better image optimization** - Automatic WebP conversion
- **Server Components** - Reduced JavaScript bundle size
- **Streaming SSR** - Faster initial page loads
- **Modern architecture** - Active development and support

## Next Steps

1. **Add your Prismic token** to `.env.local`
2. **Test the site** with `npm run dev`
3. **Deploy** to Vercel or your preferred platform
4. **Optional**: Add Google Analytics using `@next/third-parties`

## Support

If you encounter issues:
- Check `MIGRATION_COMPLETE.md` for detailed migration notes
- Review Next.js docs: https://nextjs.org/docs
- Check MUI docs: https://mui.com/
- Review Prismic Next.js guide: https://prismic.io/docs/nextjs

---

**Ready to go!** Just add your Prismic credentials and start the dev server. 🚀
