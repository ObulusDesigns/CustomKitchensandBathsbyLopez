import type { Metadata } from 'next'
import { Inter, Playfair_Display, Montserrat } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import OrganizationSchema from '@/components/seo/OrganizationSchema'
import ClientProviders from '@/components/providers/ClientProviders'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://customkitchensbylopez.com'),
  title: 'Custom Kitchens & Baths by Lopez | Luxury Kitchen & Bathroom Remodeling in Monmouth County NJ',
  description: 'Professional kitchen and bathroom remodeling services in Monmouth County, NJ. Custom cabinetry, luxury renovations, and expert craftsmanship. Serving Freehold, Colts Neck, Holmdel, and surrounding areas.',
  keywords: 'kitchen remodeling, bathroom renovation, custom kitchens, Monmouth County, NJ, Freehold, Colts Neck, Holmdel, luxury remodeling',
  icons: {
    icon: '/images/favicon/cropped-SHOP-LOPEZKITCHEN-PROOF-2.webp',
    shortcut: '/images/favicon/cropped-SHOP-LOPEZKITCHEN-PROOF-2.webp',
    apple: '/images/favicon/cropped-SHOP-LOPEZKITCHEN-PROOF-2.webp',
    other: {
      rel: 'apple-touch-icon',
      url: '/images/favicon/cropped-SHOP-LOPEZKITCHEN-PROOF-2.webp',
    },
  },
  openGraph: {
    title: 'Custom Kitchens & Baths by Lopez',
    description: 'Transform your home with luxury kitchen and bathroom remodeling in Monmouth County, NJ',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} ${montserrat.variable}`}>
      <head>
        <LocalBusinessSchema />
        <OrganizationSchema />
      </head>
      <body className={`${inter.className} font-body`}>
        <ClientProviders>
          <Navbar />
          <main className="pt-20 md:pt-24 lg:pt-32">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}