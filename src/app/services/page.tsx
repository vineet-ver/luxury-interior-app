import type { Metadata } from "next";
import ServicesClient from "@/components/services/ServicesClient";

export const metadata: Metadata = {
  title: "Workstation Installation Delhi NCR | Modular | ITSS",
// 52 chars ✅

description: "Modular workstation installation and office furniture setup in Delhi NCR. ITSS supplies and installs workstations for corporate offices pan-India.",
// 147 chars ✅
  keywords: [
    "interior designers",
    "interior design services",
    "interior design firms",
    "interior designers for office",
    "commercial interior designers",
    "hire interior designer",
    "office interior design company"
  ],
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
          text: "ITSS provides commercial interior design, turnkey office interior execution, EPC, MEP, HVAC, electrical and complete fit-out services across India.",
        },
      },
      {
        "@type": "Question",
        name: "Are you a turnkey interior contractor in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, ITSS is a leading turnkey interior contractor in India delivering complete office interior solutions from design to execution.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide services in Delhi NCR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide interior design, EPC, HVAC, MEP and electrical services across Delhi NCR and pan India.",
        },
      },
    ],
  };

  return (
    <>
      <ServicesClient />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}