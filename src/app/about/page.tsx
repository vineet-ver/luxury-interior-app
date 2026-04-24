import type { Metadata } from "next";
import AboutClient from "@/components/about/AboutClient";

export const metadata: Metadata = {
  title: "About ITSS | Office Interior Contractors & Turnkey Interior Experts Since 2017",
  description:
    "ITSS is a trusted office interior design & turnkey project company based in Delhi NCR. With 250+ projects, 120+ clients across 15+ cities, we deliver end-to-end EPC, MEP, HVAC & commercial interiors across India. Founded by Mr. Zaki Khan in 2017.",
  keywords: [
    "office interior contractor India",
    "commercial interior design Delhi NCR",
    "turnkey interior solutions",
    "interior design company Delhi",
    "office fit-out contractor Gurgaon",
    "EPC MEP interior services",
    "ITSS interior company",
    "Mr Zaki Khan interior designer",
    "office interior contractor Noida",
    "pan India interior contractor",
  ],
  alternates: {
    canonical: "https://www.itss.co.in/about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  authors: [{ name: "Mr. Zaki Khan", url: "https://www.itss.co.in/about" }],
  publisher: "India Technical Solution Services (ITSS)",
  openGraph: {
    type: "profile",
    url: "https://www.itss.co.in/about",
    title: "About ITSS | Office Interior Contractors & Turnkey Experts Since 2017",
    description:
      "Founded in 2017 by Mr. Zaki Khan, ITSS delivers world-class commercial interiors, turnkey projects and EPC/MEP solutions across India. 250+ projects. 15+ cities. Trusted by Blinkit, Zomato, Tata 1mg & more.",
    siteName: "ITSS — India Technical Solution Services",
    images: [
      {
        url: "https://www.itss.co.in/shaan_khan.jpg",
        width: 1200,
        height: 630,
        alt: "Mr. Zaki Khan — Founder & MD, ITSS Office Interiors India",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "About ITSS | Office Interior Contractor Delhi NCR",
    description:
      "250+ projects. 15+ cities. Trusted by India's top brands. ITSS delivers turnkey commercial interiors since 2017.",
    images: ["https://www.itss.co.in/shaan_khan.jpg"],
  },
};

// JSON-LD Schema for rich search results
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.itss.co.in/#organization",
      name: "India Technical Solution Services",
      alternateName: "ITSS",
      url: "https://www.itss.co.in",
      logo: {
        "@type": "ImageObject",
        url: "https://www.itss.co.in/logo_v2.png",
        width: 200,
        height: 60,
      },
      description:
        "ITSS is a leading commercial interior design and turnkey project company in India, delivering office interiors, EPC, MEP, HVAC and electrical services since 2017.",
      foundingDate: "2017",
      founder: {
        "@type": "Person",
        name: "Zaki Khan",
        jobTitle: "Founder & Managing Director",
        worksFor: {
          "@id": "https://www.itss.co.in/#organization",
        },
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "First Floor, F-16/F-2, Dilshad Colony",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110095",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-97183-71994",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
      sameAs: [
        "https://www.google.com/search?q=india+technical+solution+reviews",
      ],
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: 50,
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "120",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.itss.co.in/about",
      url: "https://www.itss.co.in/about",
      name: "About ITSS | Office Interior Contractors & Turnkey Interior Experts Since 2017",
      description:
        "Learn about ITSS, a leading commercial interior design and turnkey project company in India. Founded by Mr. Zaki Khan in 2017, with 250+ completed projects across 15+ cities.",
      isPartOf: {
        "@id": "https://www.itss.co.in/#organization",
      },
      about: {
        "@id": "https://www.itss.co.in/#organization",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.itss.co.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: "https://www.itss.co.in/about",
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.itss.co.in/about#zaki-khan",
      name: "Zaki Khan",
      jobTitle: "Founder & Managing Director",
      worksFor: {
        "@id": "https://www.itss.co.in/#organization",
      },
      image: "https://www.itss.co.in/shaan_khan.jpg",
      description:
        "Mr. Zaki Khan founded ITSS in 2017 after over a decade of hands-on experience in carpentry, maintenance and commercial interiors. He has grown the company to deliver 250+ turnkey projects across 15+ Indian cities.",
      knowsAbout: [
        "Office Interior Design",
        "Turnkey Interior Projects",
        "EPC Services",
        "MEP Services",
        "Commercial Renovation",
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}
