import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Office Interior Designers in Noida | Commercial Interior Design Company",
  
  description:
    "Looking for office interior designers in Noida? We provide commercial interior design, turnkey interiors, EPC, MEP and HVAC solutions across Noida and NCR.",
  
  keywords: [
    "interior designer noida",
    "office interior designers in noida",
    "commercial interior design noida",
    "interior design company in noida",
    "interior decorators in noida",
    "office interior design company noida",
    "turnkey interior contractors noida",
    "best interior designers in noida",
    "corporate interior designers noida"
  ],

  alternates: {
    canonical: "/office-interior-contractor-noida",
  },

  openGraph: {
    title: "Office Interior Designers in Noida | ITSS",
    description:
      "Top commercial interior designers in Noida offering office interiors, turnkey projects and EPC services.",
    url: "https://yourdomain.com/office-interior-contractor-noida",
    siteName: "ITSS Interior Solutions",
    images: [
      {
        url: "/hero_images/interior-bg.png",
        width: 1200,
        height: 630,
        alt: "Office Interior Design Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Office Interior Designers in Noida",
    description:
      "Professional interior designers in Noida for office and commercial projects.",
    images: ["/hero_images/interior-bg.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <PageClient />;
}