import type { Metadata } from "next";
import Script from "next/script";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Office Interior Designers in Delhi | Commercial Interior Contractor | ITSS",

  description:
    "ITSS — top office interior designers in Delhi. We provide commercial interior design, turnkey fitouts, EPC, MEP, HVAC and electrical services across Delhi NCR. 250+ projects delivered.",

  keywords: [
    "office interior designers in delhi",
    "commercial interior design delhi",
    "office interior contractor delhi",
    "interior design company in delhi",
    "turnkey interior contractors delhi",
    "corporate interior designers delhi",
    "office fitout company delhi",
    "MEP contractor delhi",
    "HVAC services delhi offices",
  ],

  alternates: {
    canonical: "https://www.itss.co.in/office-interior-contractor-delhi",
  },

  openGraph: {
    title: "Office Interior Designers in Delhi | ITSS",
    description:
      "Top commercial interior designers in Delhi offering office interiors, turnkey projects, EPC, MEP & HVAC. 250+ projects, 10+ years experience.",
    url: "https://www.itss.co.in/office-interior-contractor-delhi",
    siteName: "ITSS Interior Solutions",
    images: [
      {
        url: "https://www.itss.co.in/hero_images/interior-bg.png",
        width: 1200,
        height: 630,
        alt: "Office Interior Design Delhi — ITSS",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Office Interior Designers in Delhi | ITSS",
    description: "Professional office interior contractors in Delhi for commercial projects.",
    images: ["https://www.itss.co.in/hero_images/interior-bg.png"],
  },

  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.itss.co.in" },
    { "@type": "ListItem", position: 2, name: "Office Interior Designer Delhi", item: "https://www.itss.co.in/office-interior-contractor-delhi" },
  ],
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ITSS Interior Solutions — Delhi",
  url: "https://www.itss.co.in/office-interior-contractor-delhi",
  telephone: "+919718371994",
  address: {
    "@type": "PostalAddress",
    streetAddress: "First Floor, F-16/F-2, Dilshad Colony",
    addressLocality: "Delhi",
    addressRegion: "DL",
    postalCode: "110095",
    addressCountry: "IN",
  },
  areaServed: { "@type": "City", name: "Delhi" },
  priceRange: "₹₹₹",
};

export default function Page() {
  return (
    <>
      <Script id="breadcrumb-delhi" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="local-delhi" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <PageClient />
    </>
  );
}
