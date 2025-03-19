export const metadata = {
  title: 'רוג\'יה נדאף | יועץ ומשווק נדל״ן',
  description: 'אתכם כל הדרך לעסקה מוצלחת',
  manifest: '/site.webmanifest',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'https://rojeh-nadaf.vercel.app'
  ),
  keywords: [
    'נדל\"ן',
    'תיווך',
    'רימקס',
    'חיפה',
    'רוג\'יה נדאף',
    'רכישת נכס',
    'מכירת נכס'
  ],
  authors: [{ name: 'Shhady Serhan' }],
  creator: 'Shhady Serhan',
  openGraph: {
    title: 'רוג\'יה נדאף | יועץ ומשווק נדל״ן',
    description: 'אתכם כל הדרך לעסקה מוצלחת',
    url: '/',
    siteName: 'רוג\'יה נדאף | יועץ ומשווק נדל״ן',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'רוג\'יה נדאף - יועץ ומשווק נדל״ן',
      },
    ],
    locale: 'he_IL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'רוג\'יה נדאף | יועץ ומשווק נדל״ן',
    description: 'אתכם כל הדרך לעסקה מוצלחת',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}; 