import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Office Interior Designers in Gurgaon | Commercial Interior Design Company",
  
  description:
    "Looking for office interior designers in Gurgaon? We provide commercial interior design, turnkey interiors, EPC, MEP and HVAC solutions across Gurgaon and India.",
  
  keywords: [
    "interior designers in gurgaon",
    "office interior designers in gurgaon",
    "commercial interior design gurgaon",
    "interior design company in gurgaon",
    "interior decorators gurgaon",
    "office interior design company gurgaon",
    "turnkey interior contractors gurgaon",
    "best interior designers in gurgaon",
    "corporate interior designers gurgaon"
  ],

  alternates: {
    canonical: "/office-interior-contractor-gurgaon",
  },

  openGraph: {
    title: "Office Interior Designers in Gurgaon | ITSS",
    description:
      "Top commercial interior designers in Gurgaon offering office interiors, turnkey projects and EPC services.",
    url: "https://yourdomain.com/office-interior-contractor-gurgaon",
    siteName: "ITSS Interior Solutions",
    images: [
      {
        url: "/hero_images/interior-bg.png",
        width: 1200,
        height: 630,
        alt: "Office Interior Design Gurgaon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Office Interior Designers in Gurgaon",
    description:
      "Professional interior designers in Gurgaon for office and commercial projects.",
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