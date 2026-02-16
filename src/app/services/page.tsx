import type { Metadata } from "next";
import ServicesClient from "@/components/services/ServicesClient";

export const metadata: Metadata = {
  title:
    "Commercial Interior Contractor in India | Turnkey Office Interiors – ITSS",

  description:
    "ITSS is a leading commercial interior contractor in India delivering turnkey office interiors, corporate fit-out services, civil execution, and complete commercial interior solutions across India.",

  keywords: [
    "commercial interior contractor in India",
    "turnkey interior contractor India",
    "office interior contractor India",
    "corporate interior fit out services",
    "turnkey office interiors India",
    "commercial interior design company India",
  ],

  alternates: {
    canonical: "https://www.itss.co.in/services",
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "ITSS – India Technical Solution Services" }],
  publisher: "ITSS – India Technical Solution Services",

  openGraph: {
    title:
      "Commercial Interior Contractor in India | Turnkey Office Interiors – ITSS",
    description:
      "Trusted commercial interior contractor in India providing turnkey office interiors and corporate fit-out solutions across India.",
    url: "https://www.itss.co.in/services",
    siteName: "ITSS",
    images: [
      {
        url: "https://www.itss.co.in/luxury-office-hero.png",
        width: 1200,
        height: 630,
        alt: "Commercial Interior Contractor in India – ITSS",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Commercial Interior Contractor in India | Turnkey Office Interiors – ITSS",
    description:
      "ITSS delivers turnkey commercial interior design and office execution services across India.",
    images: ["https://www.itss.co.in/luxury-office-hero.png"],
  },
};


/* ================= FAQ SCHEMA ================= */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a turnkey office interior project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A turnkey office interior project includes complete design, space planning, civil execution, MEP works, and final handover handled by a single commercial interior contractor."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide commercial interior services across India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, ITSS provides turnkey commercial interior design and execution services across major cities in India."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose ITSS as a commercial interior contractor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ITSS combines precision engineering, premium materials, and seamless project execution to deliver high-performance corporate office interiors."
      }
    },
    {
      "@type": "Question",
      "name": "What services are included in commercial interior contracting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Services include interior design, space planning, civil works, false ceiling, partitions, electrical and MEP execution, furniture installation, and final handover."
      }
    }
  ]
};

export default function ServicesPage() {
  return (
    <>
      {/* FAQ Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ServicesClient />
    </>
  );
}
  
