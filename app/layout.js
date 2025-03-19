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
  title: {
    default: "רוג'יה נדאף | יועץ ומשווק נדל״ן",
    template: "%s | רוג'יה נדאף"
  },
  description: "הבחירה הנכונה בעולם הנדל״ן \nכרטיס ביקור דיגיטלי",
  keywords: "נדל״ן, יועץ נדל״ן, רוג'יה נדאף, רימקס, סוכן נדל״ן חיפה, נכסים למכירה, חיפה",
  manifest: "/manifest.json",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://rojeh-naddaf.vercel.app/',
    title: 'רוג\'יה נדאף | יועץ ומשווק נדל״ן',
    description: 'הבחירה הנכונה בעולם הנדל״ן \nכרטיס ביקור דיגיטלי',
    images: [
      {
        url: '/rojeh-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'רוג\'יה נדאף, יועץ ומשווק נדל״ן'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'רוג\'יה נדאף | יועץ ומשווק נדל״ן',
    description: 'הבחירה הנכונה בעולם הנדל״ן \nכרטיס ביקור דיגיטלי',
    images: ['/rojeh-profile.jpg']
  }
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#4f46e5" />
        <meta property="og:site_name" content="רוג'יה נדאף" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${heebo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}