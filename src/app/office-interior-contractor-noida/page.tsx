import type { Metadata } from "next";
import Script from "next/script";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Office Interior Designers in Noida | Commercial Interior Contractor | ITSS",

  description:
    "ITSS — leading office interior designers in Noida. Commercial interior design, turnkey fitouts, EPC, MEP, HVAC and electrical services. 250+ projects delivered across India.",

  keywords: [
    "office interior designers in noida",
    "commercial interior design noida",
    "office interior contractor noida",
    "interior design company noida",
    "turnkey interior contractors noida",
    "corporate interior designers noida",
    "office fitout company noida",
    "MEP contractor noida",
  ],

  alternates: {
    canonical: "https://www.itss.co.in/office-interior-contractor-noida",
  },

  openGraph: {
    title: "Office Interior Designers in Noida | ITSS",
    description:
      "Top commercial interior designers in Noida — office interiors, turnkey, EPC, MEP & HVAC. 250+ projects, 10+ years experience.",
    url: "https://www.itss.co.in/office-interior-contractor-noida",
    siteName: "ITSS Interior Solutions",
    images: [
      {
        url: "https://www.itss.co.in/hero_images/interior-bg.png",
        width: 1200,
        height: 630,
        alt: "Office Interior Design Noida — ITSS",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Office Interior Designers in Noida | ITSS",
    description: "Professional office interior contractors in Noida.",
    images: ["https://www.itss.co.in/hero_images/interior-bg.png"],
  },

  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.itss.co.in" },
    { "@type": "ListItem", position: 2, name: "Office Interior Designer Noida", item: "https://www.itss.co.in/office-interior-contractor-noida" },
  ],
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ITSS Interior Solutions — Noida",
  url: "https://www.itss.co.in/office-interior-contractor-noida",
  telephone: "+919718371994",
  areaServed: { "@type": "City", name: "Noida" },
  priceRange: "₹₹₹",
};

export default function Page() {
  return (
    <>
      <Script id="breadcrumb-noida" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="local-noida" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <PageClient />
    </>
  );
}
