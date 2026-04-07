import type { Metadata } from "next";
import Script from "next/script";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Office Interior Designers in Mumbai | Commercial Interior Contractor | ITSS",

  description:
    "ITSS — leading office interior designers in Mumbai. Commercial interior design, turnkey fitouts, EPC, MEP, HVAC and electrical services. 250+ projects delivered across India.",

  keywords: [
    "office interior designers in mumbai",
    "commercial interior design mumbai",
    "office interior contractor mumbai",
    "interior design company mumbai",
    "turnkey interior contractors mumbai",
    "corporate interior designers mumbai",
    "office fitout company mumbai",
    "MEP contractor mumbai",
  ],

  alternates: {
    canonical: "https://www.itss.co.in/office-interior-contractor-mumbai",
  },

  openGraph: {
    title: "Office Interior Designers in Mumbai | ITSS",
    description:
      "Top commercial interior designers in Mumbai — office interiors, turnkey, EPC, MEP & HVAC. 250+ projects, 10+ years experience.",
    url: "https://www.itss.co.in/office-interior-contractor-mumbai",
    siteName: "ITSS Interior Solutions",
    images: [
      {
        url: "https://www.itss.co.in/hero_images/interior-bg.png",
        width: 1200,
        height: 630,
        alt: "Office Interior Design Mumbai — ITSS",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Office Interior Designers in Mumbai | ITSS",
    description: "Professional office interior contractors in Mumbai.",
    images: ["https://www.itss.co.in/hero_images/interior-bg.png"],
  },

  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.itss.co.in" },
    { "@type": "ListItem", position: 2, name: "Office Interior Designer Mumbai", item: "https://www.itss.co.in/office-interior-contractor-mumbai" },
  ],
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ITSS Interior Solutions — Mumbai",
  url: "https://www.itss.co.in/office-interior-contractor-mumbai",
  telephone: "+919718371994",
  areaServed: { "@type": "City", name: "Mumbai" },
  priceRange: "₹₹₹",
};

export default function Page() {
  return (
    <>
      <Script id="breadcrumb-mumbai" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="local-mumbai" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <PageClient />
    </>
  );
}
