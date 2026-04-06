import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Office Interior Designers in Delhi | Commercial Interior Design Company",
  
  description:
    "Looking for office interior designers in Delhi? We provide commercial interior design, turnkey interiors, EPC, MEP and HVAC solutions across Delhi NCR and India.",
  
  keywords: [
    "interior designer delhi",
    "office interior designers in delhi",
    "commercial interior design delhi",
    "interior design company in delhi",
    "interior decorators in delhi",
    "office interior design company delhi",
    "turnkey interior contractors delhi",
    "best interior designers in delhi",
    "corporate interior designers delhi"
  ],

  alternates: {
    canonical: "/office-interior-contractor-delhi",
  },

  openGraph: {
    title: "Office Interior Designers in Delhi | ITSS",
    description:
      "Top commercial interior designers in Delhi offering office interiors, turnkey projects and EPC services.",
    url: "https://itss.co.in/office-interior-contractor-delhi",
    siteName: "ITSS Interior Solutions",
    images: [
      {
        url: "/hero_images/interior-bg.png",
        width: 1200,
        height: 630,
        alt: "Office Interior Design Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Office Interior Designers in Delhi",
    description:
      "Professional interior designers in Delhi for office and commercial projects.",
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