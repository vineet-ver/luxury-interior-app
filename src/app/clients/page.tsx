import type { Metadata } from "next";
import ClientsPage from "./ClientsPage";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.itss.co.in"),

  title: "Enterprise Clients of ITSS | Commercial Interior Experts India",

  description:
    "Explore leading enterprise clients and corporate partners who trust ITSS for commercial interior design, turnkey fit-outs, and office infrastructure projects across India.",

  keywords: [
    "ITSS clients",
    "enterprise interior projects India",
    "commercial interior company India",
    "corporate office fit-out experts",
    "turnkey interior contractor India",
  ],

  authors: [{ name: "ITSS Interior Experts" }],
  publisher: "India Technical Solution Services",

  alternates: {
    canonical: "/clients",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title:
      "Enterprise Clients of ITSS | Commercial Interior Experts India",
    description:
      "Trusted by enterprise brands and government organizations across India for commercial interior excellence.",
    url: "/clients",
    siteName: "ITSS Interior Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-clients.jpg",
        width: 1200,
        height: 630,
        alt: "ITSS Enterprise Clients and Corporate Interior Projects",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Enterprise Clients of ITSS | Commercial Interior Experts India",
    description:
      "Discover corporate clients and enterprise brands partnering with ITSS for turnkey commercial interiors.",
    images: ["/og-clients.jpg"],
  },
};

export default function Page() {
  return <ClientsPage />;
}
