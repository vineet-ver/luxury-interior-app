import type { Metadata } from "next";
import ServicesClient from "@/components/services/ServicesClient";

export const metadata: Metadata = {
  title:
    "Commercial Interior Contractor in India | Turnkey Office Interiors – ITSS",
  description:
    "ITSS is a trusted commercial interior contractor in India providing turnkey office interiors, corporate fit-out services, and end-to-end commercial interior execution across India.",
  keywords:
    "commercial interior contractor in India, office interior contractor in India, turnkey interior contractor India, commercial interior services India, turnkey office interiors, corporate interior fit out services",
  alternates: {
    canonical: "https://www.itss.co.in/services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does ITSS provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ITSS provides commercial interior design, turnkey office interior execution, corporate fit-out services, civil contracting, space planning, and office furniture maintenance across India.",
        },
      },
      {
        "@type": "Question",
        name: "Are you a turnkey interior contractor in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, ITSS is a leading turnkey interior contractor in India delivering complete office interior solutions from design planning to final execution and handover.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle commercial civil and MEP works?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we handle commercial civil works including false ceiling, partitions, flooring, electrical systems, HVAC, and complete MEP execution for office interiors.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer pan-India commercial interior services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, ITSS delivers commercial interior projects and turnkey office interiors across major cities in India.",
        },
      },
    ],
  };

  return (
    <>
      <ServicesClient />

      {/* FAQ Schema for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
