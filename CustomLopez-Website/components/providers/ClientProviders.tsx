'use client';

import { useEffect } from 'react';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';

interface ClientProvidersProps {
  children: React.ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    // Ensure client-side only
    console.log('ClientProviders mounted');
  }, []);

  return (
    <>
      {measurementId && <GoogleAnalytics measurementId={measurementId} />}
      {children}
    </>
  );
}