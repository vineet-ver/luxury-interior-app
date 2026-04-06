import type { Metadata } from "next";
import Script from "next/script";
import HomeClient from "@/components/home/HomeClient";

/* ================= META ================= */
export const metadata: Metadata = {
  title: "Commercial Interior Design Company in Delhi NCR | Office Interior Contractor | ITSS",

  description:
    "ITSS is a leading commercial interior design company in Delhi NCR offering office interior design, turnkey fitout, EPC, MEP, HVAC and electrical services across Noida, Gurgaon and India.",

  keywords: [
    "interior decorators",
    "interior design",
    "design & interiors",
    "commercial interior design",
    "it office interior design",
    "office interiors & design",
    "design for office interior",
    "space interiors",
    "interior design for commercial",
    "room interior decorator",
    "office interior designer Delhi",
    "turnkey interior contractor India",
    "office fitout company Delhi NCR",
    "corporate office interior design",
    "MEP contractor Delhi",
    "HVAC services Delhi NCR",
    "electrical contractor Delhi",
    "interior design company Gurgaon Noida",
  ],

  openGraph: {
    title: "Commercial Interior Design & Fitout Solutions | ITSS",
    description:
      "Office interior design, turnkey fitout and EPC services across Delhi NCR and India. 250+ projects. 120+ clients including Blinkit, Zomato, Godrej, Tech Mahindra.",
    url: "https://www.itss.co.in",
    siteName: "ITSS Interior Solutions",
    images: [
      {
        url: "https://www.itss.co.in/hero_images/interior-bg.png",
        width: 1200,
        height: 630,
        alt: "ITSS Commercial Interior Design Delhi NCR",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Commercial Interior Design Company Delhi NCR | ITSS",
    description: "Office interior design, turnkey fitout, EPC, MEP and HVAC services across Delhi NCR and India.",
    images: ["https://www.itss.co.in/hero_images/interior-bg.png"],
  },

  alternates: {
    canonical: "https://www.itss.co.in",
  },
};

/* ================= FAQ SCHEMA DATA ================= */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Office interior fit-out mein kitna time lagta hai Delhi NCR mein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project size pe depend karta hai. 1,000–3,000 sq ft office: 30–45 days. 5,000–10,000 sq ft: 60–75 days. 10,000 sq ft se bada: 90+ days.",
      },
    },
    {
      "@type": "Question",
      name: "1,000 sq ft commercial office interior ka approximate cost kya hoga?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delhi NCR mein basic office interior ₹800–1,200 per sq ft se shuru hota hai. Premium interiors ₹1,500–2,500+ per sq ft tak. Final cost finishes, MEP scope aur furniture pe depend karta hai.",
      },
    },
    {
      "@type": "Question",
      name: "Kya ITSS turnkey projects complete karta hai — design se lekar handover tak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Haan, ITSS complete turnkey interior execution karta hai — concept design, civil work, MEP, HVAC, networking, fire-fighting, furniture aur final handover. Single-point responsibility.",
      },
    },
    {
      "@type": "Question",
      name: "MEP services kya hoti hain office interiors mein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEP matlab Mechanical, Electrical aur Plumbing systems — HVAC ducting, electrical wiring, plumbing, data networking aur fire alarm. Hamare turnkey projects mein fully included.",
      },
    },
    {
      "@type": "Question",
      name: "Kya aap Delhi NCR ke bahar bhi services dete ho?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Haan, ITSS pan-India services deta hai — Delhi, Gurgaon, Noida, Mumbai, Bangalore, Hyderabad, Chennai, Pune aur 15+ cities mein projects complete kiye hain.",
      },
    },
    {
      "@type": "Question",
      name: "Kya aap sirf design dete ho ya execution bhi karte ho?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dono. ITSS design-only aur full turnkey execution dono karta hai. Turnkey mein design + execution ek hi team se milta hai.",
      },
    },
  ],
};

/* ================= PAGE ================= */
export default function Page() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}