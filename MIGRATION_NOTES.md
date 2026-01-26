# Migration Notes: Gatsby → Next.js

## Completed Changes

### Core Framework
- ✅ Migrated from Gatsby 2 to Next.js 14 (App Router)
- ✅ Updated package.json with Next.js dependencies
- ✅ Created next.config.js with styled-components support
- ✅ Set up jsconfig.json for path aliases (@/*)

### Routing & Pages
- ✅ Converted pages to Next.js App Router structure:
  - `src/pages/index.js` → `src/app/page.js`
  - `src/pages/events.js` → `src/app/events/page.js`
  - `src/pages/gallery.js` → `src/app/gallery/page.js`
  - `src/pages/faq.js` → `src/app/faq/page.js`
  - `src/pages/404.js` → `src/app/not-found.js`

### SEO & Metadata
- ✅ Replaced react-helmet with Next.js Metadata API
- ✅ Moved SEO config to `src/app/layout.js`
- ✅ Created dynamic sitemap at `src/app/sitemap.js`
- ✅ Created robots.txt at `src/app/robots.js`

### Data Fetching
- ✅ Replaced Gatsby GraphQL with Prismic Client API
- ✅ Created `src/lib/prismic.js` for Prismic integration
- ✅ Updated home page to use async data fetching

### Components
- ✅ Updated NavBar to use Next.js Link
- ✅ Converted StyledHero from gatsby-background-image to CSS background
- ✅ Added 'use client' directive to client components
- ✅ Created styled-components registry for SSR

### Configuration
- ✅ Updated .gitignore for Next.js
- ✅ Created .env.example for environment variables
- ✅ Removed Gatsby-specific files

## Required Manual Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create `.env.local` file with:
```
NEXT_PUBLIC_PRISMIC_REPOSITORY=steviethephotobus
PRISMIC_ACCESS_TOKEN=your_token_here
NEXT_PUBLIC_GA_TRACKING_ID=your_ga_id
```

### 3. Update Components (if needed)
Check these component folders for any Gatsby-specific code:
- `src/components/Events/`
- `src/components/Faq/`
- `src/components/Gallery/`
- `src/components/Home/`

Look for:
- Gatsby Link imports → Replace with `next/link`
- gatsby-image → Replace with `next/image` or CSS backgrounds
- GraphQL queries → Replace with Prismic client calls
- Add 'use client' if components use hooks/interactivity

### 4. SVG Imports
SVGs are imported directly. If you encounter issues, you may need to:
- Install `@svgr/webpack` and configure in next.config.js, OR
- Convert SVG imports to use next/image

### 5. Google Analytics
Install and configure Google Analytics for Next.js:
```bash
npm install @next/third-parties
```

Then add to layout.js:
```javascript
import { GoogleAnalytics } from '@next/third-parties/google'

// In layout body:
<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
```

### 6. Material-UI
Material-UI v4 is outdated. Consider upgrading to MUI v5:
```bash
npm install @mui/material @emotion/react @emotion/styled
```

### 7. Test the Site
```bash
npm run dev
```

Visit http://localhost:3000 and test:
- All pages load correctly
- Navigation works
- Images display properly
- Forms submit correctly
- Prismic content loads

### 8. Image Optimization
Consider replacing CSS background images with next/image for better performance:
```javascript
import Image from 'next/image'

<Image
  src={imageUrl}
  alt="Description"
  fill
  style={{ objectFit: 'cover' }}
  priority // for above-fold images
/>
```

## Breaking Changes

1. **Routing**: Hash links (/#section) work differently in Next.js. You may need a scroll library.
2. **Images**: gatsby-image's blur-up effect is gone. Use next/image's placeholder="blur" instead.
3. **Build Output**: Next.js creates `.next/` folder instead of `public/`
4. **Static Export**: If you need static export, add `output: 'export'` to next.config.js

## Performance Improvements

Next.js offers:
- Faster builds with Turbopack (use `next dev --turbo`)
- Better image optimization out of the box
- Automatic code splitting
- Server Components for reduced JavaScript
- Streaming SSR

## Deployment

For Vercel (recommended):
```bash
npm run build
```

For other platforms, ensure Node.js 18+ is available.
