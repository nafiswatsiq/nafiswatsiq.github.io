import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import StructuredData from "@/components/StructuredData";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ppTelegraf = localFont({
  src: './fonts/PPTelegraf-Regular.otf',
  display: 'swap',
  variable: '--font-pp-telegraf',
});

export const metadata: Metadata = {
  title: "NAFIS WATSIQ - Fullstack Web Developer | Pembuatan Website Cilacap",
  description: "Jasa pembuatan website profesional di Cilacap. Fullstack Web Developer berpengalaman dalam React, Next.js, Node.js. Website responsif, modern, dan SEO-friendly untuk bisnis Anda.",
  keywords: [
    "web developer cilacap",
    "jasa pembuatan website cilacap",
    "fullstack developer",
    "nafis watsiq",
    "website cilacap",
    "react developer",
    "nextjs developer",
    "programmer cilacap",
    "web design cilacap",
    "aplikasi web cilacap"
  ],
  authors: [{ name: "Nafis Watsiq", url: "https://nafiswatsiq.com" }],
  creator: "Nafis Watsiq",
  publisher: "Nafis Watsiq",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nafiswatsiq.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "NAFIS WATSIQ - Fullstack Web Developer | Pembuatan Website Cilacap",
    description: "Jasa pembuatan website profesional di Cilacap. Fullstack Web Developer berpengalaman dalam React, Next.js, Node.js. Website responsif, modern, dan SEO-friendly untuk bisnis Anda.",
    url: 'https://nafiswatsiq.com',
    siteName: 'Nafis Watsiq Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nafis Watsiq - Fullstack Web Developer',
      }
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "NAFIS WATSIQ - Fullstack Web Developer | Pembuatan Website Cilacap",
    description: "Jasa pembuatan website profesional di Cilacap. Fullstack Web Developer berpengalaman dalam React, Next.js, Node.js.",
    images: ['/og-image.jpg'],
    creator: '@nafiswatsiq',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ppTelegraf.variable} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
        {/* {children} */}
      </body>
    </html>
  );
}
