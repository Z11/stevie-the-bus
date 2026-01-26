# Setup Instructions

## Prerequisites

- Node.js 18 or higher
- npm or yarn
- Prismic account with repository set up

## Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create `.env.local` in the root directory:

```env
NEXT_PUBLIC_PRISMIC_REPOSITORY=your_prismic_repository_name
PRISMIC_ACCESS_TOKEN=your_actual_prismic_token_here
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

**Get your Prismic credentials:**
- Repository name: Found in Prismic dashboard settings
- Access token: Settings → API & Security → Generate Access Token

**Get your Google Analytics ID:**
- See [GOOGLE_ANALYTICS_SETUP.md](./GOOGLE_ANALYTICS_SETUP.md) for detailed instructions

### 3. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

### 4. Build for Production

```bash
npm run build
npm start
```

## Testing Checklist

Verify these features work:

- [ ] Home page loads with hero images
- [ ] About, Services, Packages sections display
- [ ] Contact form works
- [ ] Events page shows event cards
- [ ] Gallery page displays images with lightbox
- [ ] FAQ page shows accordions
- [ ] Navigation works (including mobile menu)
- [ ] Social icons display correctly

## Troubleshooting

### Pages don't load
- Verify `.env.local` exists with correct Prismic credentials
- Check Prismic repository name matches exactly
- Review browser console for errors

### Images don't display
- Ensure `images.prismic.io` is in `next.config.js` domains
- Verify Prismic image URLs are valid

### Styles look broken
```bash
rm -rf .next
npm run dev
```

### Build errors
- Check all environment variables are set
- Ensure Prismic access token is valid
- Run `npm run lint` to check for code issues

## Development Tips

### Clear cache
```bash
rm -rf .next
```

### Check for issues
```bash
npm run lint
```

### Update dependencies
```bash
npm update
```

## Support

- [Next.js Documentation](https://nextjs.org/docs)
- [MUI Documentation](https://mui.com/)
- [Prismic Next.js Guide](https://prismic.io/docs/nextjs)

---

Need help? Check the README.md for more information.
