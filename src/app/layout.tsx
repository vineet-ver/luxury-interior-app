import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import WhatsAppButton from "@/components/WhatsAppButton"; // ✅ ADDED
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.itss.co.in"),

  title: {
    default:
      "ITSS Interior Solutions | Office Interior Contractor Delhi NCR",
    template: "%s | ITSS Interior Solutions",
  },

  description:
    "ITSS is a leading office interior contractor in Delhi NCR delivering commercial interior design, corporate workspace planning and turnkey interior fit-out services across India.",

  keywords: [
    "office interior contractor Delhi",
    "commercial interior contractor Delhi NCR",
    "turnkey interior contractor India",
    "corporate office interior design Delhi",
    "office interior design company Gurgaon",
    "commercial interior contractor Noida",
    "workspace interior contractor India",
    "industrial interior contractor India",
    "office renovation contractor Delhi NCR",
    "corporate fitout contractor India"
  ],

  alternates: {
    canonical: "https://www.itss.co.in",
  },

  openGraph: {
    title: "ITSS Interior Solutions | Office Interior Contractor India",
    description:
      "Leading office interior contractor in Delhi NCR providing commercial interior design, turnkey fit-out and corporate workspace solutions across India.",
    url: "https://www.itss.co.in",
    siteName: "ITSS Interior Solutions",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    "geo.region": "IN-DL",
    "geo.placename": "Delhi NCR",
    "geo.position": "28.6139;77.2090",
    "ICBM": "28.6139, 77.2090",
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

        {/* ✅ LocalBusiness Schema for SEO */}
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ITSS Interior Solutions",
              image: "https://www.itss.co.in/logo.png",
              url: "https://www.itss.co.in",
              telephone: "+919718371994",
              description:
                "Leading office interior contractor in Delhi NCR providing commercial interior design and turnkey fit-out services.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi",
                addressCountry: "India",
              },
              areaServed: [
                "Delhi",
                "Gurgaon",
                "Noida",
                "Haryana",
                "Punjab",
                "Mumbai",
                "Uttar Pradesh",
              ],
              sameAs: [
                "https://www.linkedin.com/company/112454950/admin/dashboard/",
                "https://www.facebook.com/profile.php?id=61584705850003",
                "https://www.instagram.com/itss_interiors?igsh=YnFoN3V1b3lvbmJ3"
              ],
            }),
          }}
        />

        {children}

        {/* ✅ WHATSAPP BUTTON (ADDED HERE) */}
        <WhatsAppButton />

        {/* ✅ Google Analytics */}
        <GoogleAnalytics gaId="G-AB12CD34EF" />

      </body>
    </html>
  );
}
