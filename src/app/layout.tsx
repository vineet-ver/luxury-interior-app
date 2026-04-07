import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.itss.co.in"),

  title: {
    default: "ITSS Interior Solutions | Office Interior Contractor Delhi NCR",
    template: "%s | ITSS Interior Solutions",
  },

  description:
    "ITSS is a leading office interior contractor in Delhi NCR delivering commercial interior design, corporate workspace planning and turnkey interior fit-out services across India. 250+ projects, 120+ clients.",

  keywords: [
    "office interior contractor Delhi",
    "commercial interior contractor Delhi NCR",
    "turnkey interior contractor India",
    "corporate office interior design Delhi",
    "office interior design company Gurgaon",
    "commercial interior contractor Noida",
    "workspace interior contractor India",
    "office renovation contractor Delhi NCR",
    "corporate fitout contractor India",
    "MEP contractor Delhi NCR",
    "HVAC services commercial offices India",
  ],

  alternates: {
    canonical: "https://www.itss.co.in",
  },

  openGraph: {
    title: "ITSS Interior Solutions | Office Interior Contractor India",
    description:
      "Leading office interior contractor in Delhi NCR. Commercial interior design, turnkey fit-out, EPC, MEP, HVAC. 250+ projects. Blinkit, Godrej, Adani, Tech Mahindra among 120+ clients.",
    url: "https://www.itss.co.in",
    siteName: "ITSS Interior Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itss.co.in/hero_images/interior-bg.png",
        width: 1200,
        height: 630,
        alt: "ITSS Office Interior Design Company Delhi NCR",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ITSS Interior Solutions | Office Interior Contractor Delhi NCR",
    description:
      "Commercial interior design, turnkey fit-out, EPC, MEP, HVAC across India.",
    images: ["https://www.itss.co.in/hero_images/interior-bg.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  other: {
    "geo.region": "IN-DL",
    "geo.placename": "Delhi NCR",
    "geo.position": "28.6735;77.3046",
    ICBM: "28.6735, 77.3046",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: "ITSS Interior Solutions",
  image: "https://www.itss.co.in/hero_images/interior-bg.png",
  logo: "https://www.itss.co.in/logo_v2.png",
  url: "https://www.itss.co.in",
  telephone: ["+919718371994", "+919953790266"],
  email: "Itss.facilities@rediffmail.com",
  description:
    "Leading office interior contractor in Delhi NCR providing commercial interior design, turnkey fit-out, EPC, MEP, HVAC and electrical services across India.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "First Floor, F-16/F-2, Dilshad Colony",
    addressLocality: "Delhi",
    addressRegion: "DL",
    postalCode: "110095",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.6735,
    longitude: 77.3046,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  priceRange: "₹₹₹",
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Hyderabad" },
    { "@type": "Country", name: "India" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Office Interior Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Interior Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Turnkey Interior Projects" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "MEP Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "HVAC Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "EPC Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fire Fighting Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Workstation Installation" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "120",
    bestRating: "5",
  },
  sameAs: [
    "https://www.linkedin.com/company/itss-interior-solutions",
    "https://www.facebook.com/profile.php?id=61584705850003",
    "https://www.instagram.com/itss_interiors",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ITSS Interior Solutions",
  url: "https://www.itss.co.in",
  logo: "https://www.itss.co.in/logo_v2.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919718371994",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* LocalBusiness Schema */}
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {children}

        <WhatsAppButton />

        {/* TODO: Replace G-AB12CD34EF with your real GA4 measurement ID from analytics.google.com */}
        <GoogleAnalytics gaId="G-AB12CD34EF" />
      </body>
    </html>
  );
}
