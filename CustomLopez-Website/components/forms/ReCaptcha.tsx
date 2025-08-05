'use client';

import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Script from 'next/script';

interface ReCaptchaProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
}

export interface ReCaptchaRef {
  reset: () => void;
  execute: () => void;
}

declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void;
        render: (container: string | HTMLElement, options: any) => string;
        execute: (widgetId: string, options?: any) => Promise<string>;
        reset: (widgetId?: string) => void;
        getResponse: (widgetId?: string) => string;
      };
    };
  }
}

const ReCaptcha = forwardRef<ReCaptchaRef, ReCaptchaProps>(
  ({ onVerify, onError, onExpire }, ref) => {
    const captchaRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);

    useImperativeHandle(ref, () => ({
      reset: () => {
        if (window.grecaptcha && widgetIdRef.current !== null) {
          window.grecaptcha.enterprise.reset(widgetIdRef.current);
        }
      },
      execute: () => {
        if (window.grecaptcha && widgetIdRef.current !== null) {
          window.grecaptcha.enterprise.execute(widgetIdRef.current);
        }
      },
    }));

    useEffect(() => {
      let mounted = true;

      const initializeCaptcha = () => {
        if (!captchaRef.current || !window.grecaptcha || !mounted) return;

        window.grecaptcha.enterprise.ready(() => {
          if (!captchaRef.current || !mounted) return;

          const widgetId = window.grecaptcha.enterprise.render(captchaRef.current, {
            sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
            callback: (token: string) => {
              if (mounted) {
                onVerify(token);
              }
            },
            'error-callback': () => {
              if (mounted && onError) {
                onError();
              }
            },
            'expired-callback': () => {
              if (mounted && onExpire) {
                onExpire();
              }
            },
            size: 'compact',
            badge: 'bottomright',
          });

          if (mounted) {
            widgetIdRef.current = widgetId;
          }
        });
      };

      if (window.grecaptcha) {
        initializeCaptcha();
      } else {
        // Wait for the script to load
        const checkInterval = setInterval(() => {
          if (window.grecaptcha) {
            clearInterval(checkInterval);
            initializeCaptcha();
          }
        }, 100);

        return () => {
          clearInterval(checkInterval);
          mounted = false;
        };
      }

      return () => {
        mounted = false;
      };
    }, [onVerify, onError, onExpire]);

    return (
      <>
        <Script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
        <div ref={captchaRef} id="recaptcha-container" />
      </>
    );
  }
);

ReCaptcha.displayName = 'ReCaptcha';

export default ReCaptcha;