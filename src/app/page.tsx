

import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "Commercial Interior & Turnkey Office Interiors | ITSS India",
  description:
    "ITSS is a leading commercial interior contractor in India offering turnkey office interiors, corporate fit-out and execution services pan-India.",

  keywords: [
    "commercial interior contractor",
    "office interior contractor",
    "turnkey office interiors",
    "corporate interior fit out",
    "commercial interior services",
    "turnkey interior solutions",
    "office fit out services",
    "corporate workspace interiors",
    "end-to-end interior solutions",
    "commercial interior services in India",
    "office interior contractor India",
    "turnkey interior services across India"
  ],

  alternates: {
    canonical: "https://www.itss.co.in/",
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "ITSS – India Technical Solution Services" }],
  publisher: "ITSS – India Technical Solution Services",
};

export default function Home() {
  return <HomeClient />;
}


