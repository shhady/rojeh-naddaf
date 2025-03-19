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
  title: "רוג'ה נדאף | יועץ נדל״ן",
  description: "כרטיס ביקור דיגיטלי מקצועי עבור רוג'ה נדאף, יועץ הנדל״ן האמין שלך.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${heebo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
