import type { Metadata } from "next";
import Script from "next/script";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Office Interior Designers in Gurgaon | Commercial Interior Contractor | ITSS",

  description:
    "ITSS — leading office interior designers in Gurgaon. Commercial interior design, turnkey fitouts, EPC, MEP, HVAC and electrical services. 250+ projects delivered across India.",

  keywords: [
    "office interior designers in gurgaon",
    "commercial interior design gurgaon",
    "office interior contractor gurgaon",
    "interior design company gurgaon",
    "turnkey interior contractors gurgaon",
    "corporate interior designers gurgaon",
    "office fitout company gurgaon",
    "MEP contractor gurgaon",
  ],

  alternates: {
    canonical: "https://www.itss.co.in/office-interior-contractor-gurgaon",
  },

  openGraph: {
    title: "Office Interior Designers in Gurgaon | ITSS",
    description:
      "Top commercial interior designers in Gurgaon — office interiors, turnkey, EPC, MEP & HVAC. 250+ projects, 10+ years experience.",
    url: "https://www.itss.co.in/office-interior-contractor-gurgaon",
    siteName: "ITSS Interior Solutions",
    images: [
      {
        url: "https://www.itss.co.in/hero_images/interior-bg.png",
        width: 1200,
        height: 630,
        alt: "Office Interior Design Gurgaon — ITSS",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Office Interior Designers in Gurgaon | ITSS",
    description: "Professional office interior contractors in Gurgaon.",
    images: ["https://www.itss.co.in/hero_images/interior-bg.png"],
  },

  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.itss.co.in" },
    { "@type": "ListItem", position: 2, name: "Office Interior Designer Gurgaon", item: "https://www.itss.co.in/office-interior-contractor-gurgaon" },
  ],
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ITSS Interior Solutions — Gurgaon",
  url: "https://www.itss.co.in/office-interior-contractor-gurgaon",
  telephone: "+919718371994",
  areaServed: { "@type": "City", name: "Gurgaon" },
  priceRange: "₹₹₹",
};

export default function Page() {
  return (
    <>
      <Script id="breadcrumb-gurgaon" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="local-gurgaon" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <PageClient />
    </>
  );
}
