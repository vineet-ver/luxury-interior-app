import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "Office Interior Design & Commercial Interior Designers in Delhi NCR | ITSS",
  description:
    "Leading office interior designers in Delhi NCR offering commercial interior design, turnkey interiors, EPC, MEP, HVAC & electrical solutions across India.",

  keywords: [
    "interior design",
    "office interior design",
    "commercial interior design",
    "interior decorators",
    "office interiors",
    "corporate interior design",
    "turnkey interiors",
    "commercial office interior design"
  ],

  metadataBase: new URL("https://www.yourdomain.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Office Interior Design & Fitout Solutions | ITSS India",
    description:
      "Top commercial interior designers in India specializing in office interiors, turnkey fitouts, EPC, MEP & HVAC services.",
    url: "https://www.yourdomain.com",
    siteName: "ITSS - Interior & EPC Solutions",
    images: [
      {
        url: "/hero_images/interior-bg.png",
        width: 1200,
        height: 630,
        alt: "Office Interior Design Delhi NCR",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Office Interior Design & Fitout Solutions | ITSS",
    description:
      "Commercial interior design, turnkey projects, EPC, MEP & HVAC services across India.",
    images: ["/hero_images/interior-bg.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <HomeClient />;
}