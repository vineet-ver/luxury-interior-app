import type { Metadata } from "next";
import Script from "next/script";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "Commercial Interior Contractor Delhi NCR | ITSS",
  description:
    "Trusted commercial interior contractor in Delhi NCR. Office fitouts, turnkey projects & MEP services. 10+ years, 250+ projects. Free quote today.",
  keywords: [
    "commercial interior contractor Delhi NCR",
    "office interior contractor Delhi",
    "turnkey interior contractor India",
    "office fitout company Delhi NCR",
    "corporate office interior design",
    "MEP contractor Delhi",
    "HVAC services Delhi NCR",
    "electrical contractor Delhi",
    "interior design company Gurgaon Noida",
    "commercial interior design Delhi",
  ],
  openGraph: {
    title: "Best Commercial Interior Contractor Delhi | Turnkey Fitout & MEP | ITSS",
    description:
      "Office interior design, turnkey fitout and EPC services across Delhi NCR and India.",
    url: "https://www.itss.co.in",
    siteName: "ITSS",
    images: [{ url: "/hero_images/interior-bg.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "https://www.itss.co.in" },
};

/* ===== FAQ SCHEMA ===== */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a commercial interior contractor do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A commercial interior contractor manages the complete fitout of a business space — from design and engineering drawings to civil work, MEP systems, HVAC, fire safety, furniture and final handover.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a commercial interior fitout cost in Delhi NCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Delhi NCR, commercial office fitout costs range from ₹800–₹1,200 per sq ft for basic finishes to ₹1,800–₹3,000+ per sq ft for premium turnkey projects.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a commercial office interior project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 1,000–3,000 sq ft office typically takes 30–45 days. A 5,000–10,000 sq ft space takes 60–75 days. Projects above 10,000 sq ft take 90+ days.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a turnkey contractor and a regular interior designer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A regular interior designer creates drawings only. A turnkey contractor like ITSS handles everything — design, civil work, MEP, HVAC, furniture and handover under one contract.",
      },
    },
    {
      "@type": "Question",
      name: "Does ITSS handle MEP, HVAC and electrical work along with interior fitout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ITSS has in-house teams for MEP, HVAC, electrical contracting, fire-fighting systems, networking and carpentry — all under one roof.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas does ITSS serve for commercial interior projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ITSS serves Delhi, Noida, Gurgaon, Greater Noida, Ghaziabad and Faridabad. We also handle pan-India projects in Mumbai, Bangalore, Hyderabad, Chennai, Pune and 15+ cities.",
      },
    },
  ],
};

/* ===== PAGE ===== */
export default function Page() {
  return (
    <>
      <Script
        id="faq-schema-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}