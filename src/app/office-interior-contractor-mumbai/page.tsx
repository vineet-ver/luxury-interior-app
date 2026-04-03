import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Office Interior Designers in Mumbai | Commercial Interior Design Company",
  
  description:
    "Looking for office interior designers in Mumbai? We provide commercial interior design, turnkey interiors, EPC, MEP and HVAC solutions across Mumbai and India.",
  
  keywords: [
    "interior designer mumbai",
    "office interior designers in mumbai",
    "commercial interior design mumbai",
    "interior design company in mumbai",
    "interior decorators in mumbai",
    "office interior design company mumbai",
    "turnkey interior contractors mumbai",
    "best interior designers in mumbai",
    "corporate interior designers mumbai"
  ],

  alternates: {
    canonical: "/office-interior-contractor-mumbai",
  },

  openGraph: {
    title: "Office Interior Designers in Mumbai | ITSS",
    description:
      "Top commercial interior designers in Mumbai offering office interiors, turnkey projects and EPC services.",
    url: "https://yourdomain.com/office-interior-contractor-mumbai",
    siteName: "ITSS Interior Solutions",
    images: [
      {
        url: "/hero_images/interior-bg.png",
        width: 1200,
        height: 630,
        alt: "Office Interior Design Mumbai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Office Interior Designers in Mumbai",
    description:
      "Professional interior designers in Mumbai for office and commercial projects.",
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