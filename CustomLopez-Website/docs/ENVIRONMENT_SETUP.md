# Environment Setup Guide

## Google Analytics Setup

Google Analytics has been integrated into the website. The measurement ID has been configured in `.env.local`.

### Features Implemented:
- Page view tracking (automatic)
- Contact form submissions
- Phone number clicks
- Quote requests
- Service page views
- Portfolio/project views
- External link clicks
- Scroll depth tracking
- Time on page tracking

### Verification:
1. Visit the website
2. Open Google Analytics Real-Time reports
3. You should see your visit tracked
4. Test form submissions and phone clicks to verify event tracking

## Google reCAPTCHA Enterprise Setup

reCAPTCHA Enterprise has been integrated to protect the contact form from spam.

### Features:
- Invisible reCAPTCHA (no user interaction required unless suspicious)
- Enterprise-grade protection
- Automatic token verification
- Fallback error handling

### Important Notes:
1. The site key is configured in `.env.local`
2. You'll need to add the secret key for server-side verification
3. Update the project ID in `/app/api/contact/route.ts` for production

### To Complete reCAPTCHA Setup:
1. Get your reCAPTCHA Enterprise secret key from Google Cloud Console
2. Add it to `.env.local`: `RECAPTCHA_SECRET_KEY=your_secret_key_here`
3. Update the project ID in the API route

## Email Service Setup (Required for Contact Form)

The contact form API is ready but needs an email service configured.

### Recommended Services:
1. **SendGrid** (Easy setup, good free tier)
2. **Mailgun** (Developer-friendly)
3. **AWS SES** (Cost-effective at scale)
4. **Postmark** (Great deliverability)

### To Set Up Email:
1. Choose and sign up for an email service
2. Get your API key
3. Add to `.env.local` (e.g., `SENDGRID_API_KEY=...`)
4. Update `/app/api/contact/route.ts` with your email service code

## Google Maps API Setup

The interactive map requires a Google Maps API key.

### To Set Up:
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create or select a project
3. Enable "Maps JavaScript API"
4. Create credentials (API Key)
5. Add to `.env.local`: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here`
6. Restrict the key to your domain for security

## Testing Checklist

- [ ] Google Analytics tracking verified in real-time reports
- [ ] Contact form submission works
- [ ] reCAPTCHA badge appears on contact page
- [ ] Map displays correctly with markers
- [ ] All environment variables are set
- [ ] No console errors in production build