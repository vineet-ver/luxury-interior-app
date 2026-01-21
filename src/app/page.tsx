
import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "Commercial Interior Design Company in India | ITSS",
  description: "Leading commercial interior designers delivering turnkey office and corporate interior solutions across India. Trusted pan-India interior design company for modern businesses.",
  keywords: "commercial interior design company, commercial interior designers, commercial interior solutions, turnkey commercial interior company, corporate office interiors, best commercial interior design firm, commercial interior design company in india, office interior design company, turnkey interior contractors, commercial interior designers india, turnkey office interior solutions, interior design company india",
 alternates: {
    canonical: "https://www.itss.co.in/"
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
