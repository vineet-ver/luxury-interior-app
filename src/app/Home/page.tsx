import type { Metadata } from "next";
import Script from "next/script";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "Commercial Interior Contractor Delhi NCR | ITSS",
// 48 chars 
description: "Trusted commercial interior contractor in Delhi NCR. Office fitouts, turnkey projects & MEP services. 10+ years, 250+ projects. Free quote today.",
// 146 chars 
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a commercial office interior fitout take in Delhi NCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on project size. A 1,000–3,000 sq ft office typically takes 30–45 days. 5,000–10,000 sq ft takes 60–75 days, and projects above 10,000 sq ft take 90+ days. We provide a clear, committed timeline before work begins."
      }
    },
    {
      "@type": "Question",
      name: "What is the approximate cost for a 1,000 sq ft commercial office interior?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Delhi NCR, basic office interiors start from ₹800–₹1,200 per sq ft. Premium or brand-specific interiors range from ₹1,500–₹2,500+ per sq ft. Final cost depends on finishes, MEP scope and furniture requirements."
      }
    },
    {
      "@type": "Question",
      name: "Do you handle turnkey projects — from design to handover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ITSS delivers complete turnkey interior execution — concept design, civil work, MEP, HVAC, networking, fire-fighting, furniture and final handover. You deal with one team from start to finish."
      }
    },
    {
      "@type": "Question",
      name: "What are MEP services and are they included in the interior project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEP stands for Mechanical, Electrical and Plumbing — essential systems for any commercial office. This includes HVAC ducting, electrical wiring, plumbing, data networking and fire alarms. MEP is fully included in our turnkey projects."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide services outside Delhi NCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ITSS operates pan-India — we have completed projects in Delhi, Gurgaon, Noida, Mumbai, Bangalore, Hyderabad, Chennai, Pune and 15+ other cities."
      }
    },
    {
      "@type": "Question",
      name: "Can we see your past portfolio and completed projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our portfolio includes projects for brands like Godrej, Barclays, Hilton and Battery Smart. Contact us to arrange a site visit to a completed project relevant to your requirement."
      }
    },
  ]
};

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