# Custom Kitchens & Baths by Lopez

## Prerequisites

This project requires Node.js version 18.x or 20.x (LTS versions). 

**Important**: Node.js v24+ is not supported and will cause webpack runtime errors.

### Recommended Setup

1. Install NVM (Node Version Manager):
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

2. Use the correct Node version:
   ```bash
   nvm install
   nvm use
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Quick Workaround

If you can't install NVM, you can run the development server with:
```bash
npx -p node@18 npm run dev
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

```bash
npm run build
```

## Production

The site is automatically deployed to Vercel. Vercel uses Node.js 18.x by default, which is why the production site works correctly.

## Environment Variables

Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_SITE_URL=https://customkitchensbylopez.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-id
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-key
RECAPTCHA_SECRET_KEY=your-secret-key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-maps-key
```