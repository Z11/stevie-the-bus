# Stevie the Photo Bus Website

This is the official website for Stevie the Photo Bus - Houston's grooviest photo booth experience.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Styled Components + CSS Modules
- **CMS**: Prismic
- **UI Components**: Material-UI
- **Language**: JavaScript/React

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Add your Prismic credentials

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

- `NEXT_PUBLIC_PRISMIC_REPOSITORY` - Your Prismic repository name
- `PRISMIC_ACCESS_TOKEN` - Your Prismic access token
- `NEXT_PUBLIC_GA_TRACKING_ID` - Google Analytics tracking ID (optional)

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
├── constants/        # Constants and configuration
├── css/             # CSS modules and global styles
├── helpers/         # Utility functions
├── lib/             # Library code (Prismic client, etc.)
└── svgs/            # SVG assets
```

## Migration from Gatsby

This project was migrated from Gatsby to Next.js 14. Key changes:
- Gatsby's GraphQL → Prismic Client API
- gatsby-image → next/image (where applicable)
- Gatsby routing → Next.js App Router
- gatsby-plugin-react-helmet → Next.js Metadata API

## License

MIT
