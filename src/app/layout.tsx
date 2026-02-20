import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.itss.co.in"),

  title: {
    default:
      "ITSS Interior Solutions | Commercial Interior Company India",
    template: "%s | ITSS Interior Solutions",
  },

  description:
    "ITSS is a leading commercial interior and turnkey fit-out company in India delivering corporate office, industrial and infrastructure interior solutions.",

  keywords: [
    "commercial interior company India",
    "office interior contractors India",
    "turnkey interior fit out company",
    "corporate office interior design India",
    "warehouse interior contractor",
    "industrial interior solutions",
    "commercial interior design India",
    "corporate fit out company India",
  ],

  alternates: {
    canonical: "https://www.itss.co.in",
  },

  openGraph: {
    title: "ITSS Interior Solutions",
    description:
      "Premium commercial interior & turnkey infrastructure solutions across India.",
    url: "https://www.itss.co.in",
    siteName: "ITSS Interior Solutions",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* ✅ Structured Data for Google */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ITSS Interior Solutions",
              url: "https://www.itss.co.in",
              logo: "https://www.itss.co.in/logo.png",
              description:
                "Leading commercial interior and turnkey fit-out company in India.",
              areaServed: "India",
              sameAs: [
                "https://www.linkedin.com/",
                "https://www.facebook.com/"
              ],
            }),
          }}
        />

        {children}

        {/* ✅ Google Analytics (Replace with your GA ID) */}
        <GoogleAnalytics gaId="G-AB12CD34EF" />

      </body>
    </html>
  );
}
