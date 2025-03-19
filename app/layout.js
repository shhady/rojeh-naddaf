import { Geist, Geist_Mono } from "next/font/google";
import { Heebo } from "next/font/google";
import "./globals.css";
import { metadata as siteMetadata } from "./metadata";

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

// Use the imported metadata
export const metadata = siteMetadata;

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
        
        {/* Explicit Open Graph tags for social sharing */}
        <meta property="og:title" content="רוג'יה נדאף | יועץ ומשווק נדל״ן" />
        <meta property="og:description" content="אתכם כל הדרך לעסקה מוצלחת" />
        <meta property="og:image" content="https://rojeh-nadaf.vercel.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://rojeh-nadaf.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="רוג'יה נדאף" />
        
        {/* Facebook specific meta tags */}
        <meta property="fb:app_id" content="your-fb-app-id-if-you-have-one" />
        
        {/* Instagram and additional sharing meta tags */}
        <meta property="og:image:secure_url" content="https://rojeh-nadaf.vercel.app/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:locale" content="he_IL" />
        
        {/* Twitter card data - sometimes helps with Instagram */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="רוג'יה נדאף | יועץ ומשווק נדל״ן" />
        <meta name="twitter:description" content="אתכם כל הדרך לעסקה מוצלחת" />
        <meta name="twitter:image" content="https://rojeh-nadaf.vercel.app/og-image.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${heebo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}