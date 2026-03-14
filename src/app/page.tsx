import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "Office Interior Contractor Delhi NCR | Commercial Interior Company India | ITSS",

  description:
    "ITSS is a leading office interior contractor in Delhi NCR offering commercial interior design, corporate workspace planning and turnkey office interior fit-out services across India.",

  keywords: [
    "office interior contractor delhi",
    "commercial interior contractor delhi ncr",
    "turnkey office interior contractor india",
    "corporate office interior design delhi",
    "commercial interior design company india",
    "office interior design company gurgaon",
    "office interior contractor noida",
    "workspace interior contractor india",
    "office renovation contractor delhi ncr",
    "corporate office fitout contractor india",
    "commercial interior services india",
    "turnkey office interior services"
  ],

  alternates: {
    canonical: "https://www.itss.co.in/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Office Interior Contractor Delhi NCR | ITSS Interior Solutions",
    description:
      "Leading commercial interior contractor providing corporate office interiors and turnkey workspace solutions across India.",
    url: "https://www.itss.co.in/",
    siteName: "ITSS Interior Solutions",
    locale: "en_IN",
    type: "website",
  },

  authors: [{ name: "ITSS – India Technical Solution Services" }],
  publisher: "ITSS – India Technical Solution Services",
};

export default function Home() {
  return <HomeClient />;
}
