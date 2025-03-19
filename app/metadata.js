export const metadata = {
  title: 'Rojeh Naddaf | Real Estate Consultant',
  description: 'Professional real estate consulting and marketing services',
  manifest: '/site.webmanifest',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'https://rojeh-nadaf.vercel.app'
  ),
  keywords: [
    'real estate',
    'property',
    'consultant',
    'RE/MAX',
    'Haifa',
    'Rojeh Naddaf',
    'buy property',
    'sell property'
  ],
  authors: [{ name: 'Shhady Serhan' }],
  creator: 'Shhady Serhan',
  openGraph: {
    title: 'Rojeh Naddaf | Real Estate Consultant',
    description: 'Professional real estate consulting and marketing services',
    url: '/',
    siteName: 'Rojeh Naddaf | Real Estate Consultant',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rojeh Naddaf Real Estate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}; 