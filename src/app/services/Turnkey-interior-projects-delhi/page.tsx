import type { Metadata } from "next";
import Script from "next/script";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Turnkey Interior Contractors Delhi NCR | ITSS",
// 46 chars ✅

description: "Complete turnkey office fitout in Delhi NCR — design to handover. Civil, MEP, HVAC, electrical & furniture. 250+ projects. Get a free quote today.",
// 148 chars ✅
  keywords: [
    "turnkey interior contractors in delhi",
    "turnkey interior contractors delhi ncr",
    "turnkey interior contractor delhi",
    "turnkey office fitout delhi",
    "turnkey interior solutions delhi",
    "complete office fitout delhi ncr",
    "office interior contractor delhi",
    "turnkey interior projects delhi",
    "commercial interior contractor delhi",
  ],
  alternates: {
    canonical: "https://www.itss.co.in/services/Turnkey-interior-projects-delhi",
  },
  openGraph: {
    title: "Turnkey Interior Contractors in Delhi NCR | ITSS — 250+ Projects",
    description:
      "Complete office fitout from design to handover. Civil, MEP, HVAC, electrical and furniture — one contract, one team.",
    url: "https://www.itss.co.in/services/Turnkey-interior-projects-delhi",
    siteName: "ITSS Interior Solutions",
    images: [
      {
        url: "https://www.itss.co.in/hero_images/interior-bg.png",
        width: 1200,
        height: 630,
        alt: "Turnkey interior contractors Delhi NCR — ITSS",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.itss.co.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.itss.co.in/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Turnkey Interior Contractors Delhi",
      item: "https://www.itss.co.in/services/Turnkey-interior-projects-delhi",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly is a turnkey interior contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A turnkey contract means ITSS is responsible for delivering a complete, ready-to-use office. We handle design, civil, MEP, HVAC, electrical, networking, furniture and handover. You don't manage any vendors — just approve milestones and move in on the agreed date.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of a turnkey office interior in Delhi NCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Turnkey office fit-outs in Delhi NCR range from ₹800–₹3,000+ per sq ft depending on finish level. A complete mid-range 3,000 sq ft turnkey office typically costs ₹40–55 lakhs including design, civil, MEP, HVAC and furniture.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a turnkey office interior project take in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1,000–3,000 sq ft takes 35–45 days. 3,000–8,000 sq ft takes 45–65 days. 8,000–20,000 sq ft takes 65–90 days. Timeline is fixed in the contract with milestone-based tracking.",
      },
    },
    {
      "@type": "Question",
      name: "How is turnkey different from hiring separate contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With separate contractors you manage scheduling conflicts, quality issues and delays caused by inter-vendor dependencies. With turnkey, all risks sit with ITSS — one team accountable for the entire project.",
      },
    },
    {
      "@type": "Question",
      name: "Does ITSS handle MEP and HVAC in turnkey projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ITSS has in-house MEP, HVAC, electrical, fire-fighting, networking and carpentry teams. Everything is executed under one roof — no subcontracting of major disciplines.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Turnkey Interior Contractors Delhi NCR",
  provider: {
    "@type": "LocalBusiness",
    name: "ITSS Interior Solutions",
    url: "https://www.itss.co.in",
    telephone: "+919718371994",
    address: {
      "@type": "PostalAddress",
      streetAddress: "First Floor, F-16/F-2, Dilshad Colony",
      addressLocality: "Delhi",
      postalCode: "110095",
      addressCountry: "IN",
    },
  },
  areaServed: ["Delhi", "Noida", "Gurgaon", "Delhi NCR", "India"],
  description:
    "Complete turnkey interior fitout services for offices in Delhi NCR — design, civil, MEP, HVAC, electrical, furniture and handover under one contract.",
  url: "https://www.itss.co.in/services/Turnkey-interior-projects-delhi",
};

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-turnkey"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-turnkey"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-turnkey"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageClient />
    </>
  );
}