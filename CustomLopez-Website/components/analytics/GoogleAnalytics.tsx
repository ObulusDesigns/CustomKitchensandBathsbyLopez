'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

// Event tracking functions
export const GAEvent = {
  // Contact form submission
  contactFormSubmit: () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: 'contact_form',
      });
    }
  },

  // Phone number click
  phoneClick: (phoneNumber: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'contact',
        event_label: 'phone_number',
        value: phoneNumber,
      });
    }
  },

  // Quote request
  quoteRequest: (service?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: 'quote_request',
        value: service || 'general',
      });
    }
  },

  // Page view (for dynamic pages)
  pageView: (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  },

  // Service page view
  viewService: (serviceName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_item', {
        event_category: 'engagement',
        event_label: serviceName,
        value: 1,
      });
    }
  },

  // Portfolio/gallery view
  viewProject: (projectName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_item', {
        event_category: 'portfolio',
        event_label: projectName,
      });
    }
  },

  // Newsletter signup
  newsletterSignup: () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'sign_up', {
        event_category: 'engagement',
        event_label: 'newsletter',
      });
    }
  },

  // External link click
  externalLinkClick: (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'external_link',
        event_label: url,
      });
    }
  },

  // Scroll depth
  scrollDepth: (percentage: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'scroll', {
        event_category: 'engagement',
        event_label: `${percentage}%`,
        value: percentage,
      });
    }
  },

  // Time on page (in seconds)
  timeOnPage: (seconds: number, pageName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'timing_complete', {
        name: 'time_on_page',
        value: seconds * 1000, // Convert to milliseconds
        event_category: 'engagement',
        event_label: pageName,
      });
    }
  },
};

// Declare gtag function on window
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}