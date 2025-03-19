import { Geist, Geist_Mono } from "next/font/google";
import { Heebo } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const heebo = Heebo({
  subsets: ["hebrew"],
  variable: "--font-heebo",
});


export const metadata = {
  title: "רוג'יה נדאף | יועץ ומשווק נדל״ן \n כרטיס ביקור דיגיטלי",
  description: 'אתכם כל הדרך לעסקה מוצלחת',
  manifest: '/site.webmanifest',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'https://rojeh-nadaf.vercel.app'
  ),
  keywords: [
    'נדל״ן',
    'יצירת נדל״ן',
    'מכירה נדל״ן',
    'רוג\'יה נדאף',
    'רימקס',
    'סוכן נדל״ן חיפה',
    'נכסים למכירה',
    'חיפה',
  ],
  authors: [{ name: 'Shhady Serhan' }],
  creator: 'Shhady Serhan',
  openGraph: {
    title: 'רוג\'יה נדאף | יועץ ומשווק נדל״ן \n כרטיס ביקור דיגיטלי',
    description: 'אתכם כל הדרך לעסקה מוצלחת',
    url: '/',
    siteName: 'רוג\'יה נדאף | יועץ ומשווק נדל״ן \n כרטיס ביקור דיגיטלי',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
          alt: 'תמונת כיסוי',
      },
    ],
    locale: 'he_IL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#4f46e5" />
        <meta property="og:site_name" content="רוג'יה נדאף | יועץ ומשווק נדל״ן | כרטיס ביקור דיגיטלי" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${heebo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}