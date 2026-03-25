import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://akshaykale.dev";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Akshay Kale | Node.js Backend Developer",
    template: "%s | Akshay Kale",
  },
  description:
    "Portfolio of Akshay Kale — Results-driven Node.js Backend Developer with expertise in Express.js, MongoDB, AWS, and Microservices architecture.",
  keywords: [
    "Node.js",
    "Backend Developer",
    "Express.js",
    "MongoDB",
    "AWS",
    "Docker",
    "TypeScript",
    "Akshay Kale",
    "Pune",
  ],
  authors: [{ name: "Akshay Kale", url: siteUrl }],
  creator: "Akshay Kale",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Akshay Kale — Portfolio",
    title: "Akshay Kale | Node.js Backend Developer",
    description:
      "Results-driven Node.js Backend Developer with expertise in Express.js, MongoDB, AWS, and Microservices architecture.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Akshay Kale — Node.js Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Kale | Node.js Backend Developer",
    description:
      "Results-driven Node.js Backend Developer with expertise in Express.js, MongoDB, AWS, and Microservices architecture.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for Google Fonts performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
