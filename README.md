# Stevie the Photo Bus Website

Official website for Stevie the Photo Bus - Houston's grooviest photo booth experience.

**Built with Next.js 14** ✨

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables (see below)
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Create `.env.local` in the root directory:

```env
NEXT_PUBLIC_PRISMIC_REPOSITORY=your_prismic_repository_name
PRISMIC_ACCESS_TOKEN=your_access_token_here
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) for detailed setup guide.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Styled Components + CSS Modules
- **CMS**: Prismic
- **UI Components**: Material-UI v5 (MUI)
- **Language**: JavaScript/React
- **Analytics**: Google Analytics 4

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── layout.js     # Root layout with navbar/footer
│   ├── page.js       # Home page
│   ├── events/       # Events page
│   ├── gallery/      # Gallery page
│   └── faq/          # FAQ page
├── components/       # React components
│   ├── Home/         # Home page sections
│   ├── Events/       # Events components
│   ├── Gallery/      # Gallery components
│   ├── Faq/          # FAQ components
│   ├── NavBar.js     # Navigation
│   └── Footer.js     # Footer
├── constants/        # Constants and configuration
├── css/              # CSS modules and global styles
├── helpers/          # Utility functions
├── lib/              # Library code (Prismic client, etc.)
└── svgs/             # SVG assets
```

## Documentation

- **[SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)** - Detailed setup and configuration
- **[GOOGLE_ANALYTICS_SETUP.md](./GOOGLE_ANALYTICS_SETUP.md)** - GA4 setup guide

## Key Features

✅ Server-side rendering with Next.js  
✅ Optimized images with next/image  
✅ SEO-friendly with Next.js Metadata API  
✅ Google Analytics 4 integration  
✅ Responsive design (mobile, tablet, desktop)  
✅ Contact form integration  
✅ Dynamic content from Prismic CMS  

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_PRISMIC_REPOSITORY` | Prismic repository name | Yes |
| `PRISMIC_ACCESS_TOKEN` | Prismic API access token | Yes |
| `NEXT_PUBLIC_GA_TRACKING_ID` | Google Analytics 4 Measurement ID | Optional |

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in project settings
4. Deploy automatically

### Netlify

The project includes `netlify.toml` configuration:

1. Connect your GitHub repository
2. Add environment variables in Site settings
3. Ensure build image is set to **Ubuntu Noble 24.04**
4. Deploy

### Other Platforms

Requires Node.js 18+:
```bash
npm run build
npm start
```

## Development

### Clear Cache
If you encounter caching issues:
```bash
rm -rf .next
npm run dev
```

### Check for Issues
```bash
npm run lint
```



## License

MIT

## Support

For issues or questions about the migration, see the documentation files in the root directory.

---

**Built with ❤️ using Next.js**
