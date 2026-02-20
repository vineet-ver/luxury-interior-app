import type { Metadata } from "next";
import ClientsPage from "./ClientsPage";

export const metadata: Metadata = {
  title: "Enterprise Clients | Commercial Interior Company in India",

  description:
    "Explore leading enterprise and government clients who trust ITSS for commercial interior design, turnkey office fit-outs, corporate infrastructure and industrial interior solutions across India.",

  keywords: [
    "commercial interior company India",
    "enterprise interior contractor India",
    "corporate office interior clients",
    "turnkey fit-out company India",
    "office interior contractor Delhi",
    "industrial interior solutions India",
    "ITSS enterprise clients",
  ],

  alternates: {
    canonical: "https://www.itss.co.in/clients",
  },

  openGraph: {
    title:
      "Enterprise Clients of ITSS | Commercial Interior Experts India",
    description:
      "Trusted by enterprise brands and government organizations across India for premium commercial interior and turnkey infrastructure solutions.",
    url: "https://www.itss.co.in/clients",
    siteName: "ITSS Interior Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itss.co.in/og-clients.jpg",
        width: 1200,
        height: 630,
        alt: "ITSS Enterprise Clients",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Enterprise Clients of ITSS | Commercial Interior Experts India",
    description:
      "Discover leading enterprise clients and corporate partners of ITSS across India.",
    images: ["https://www.itss.co.in/og-clients.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ClientsPage />;
}
