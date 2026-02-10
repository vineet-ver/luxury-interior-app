
import type { Metadata } from "next";
import ServicesClient from "@/components/services/ServicesClient";

export const metadata: Metadata = {
  title: "Commercial Office Interior & Fit-Out Contractor | ITSS India",
  description:
    "ITSS is a trusted commercial interior contractor in India providing turnkey office interiors, corporate fit-out services, and end-to-end commercial interior execution across India.",
  keywords:
    "commercial interior contractor in India, office interior contractor in India, turnkey interior contractor India, commercial interior services India, turnkey office interiors, corporate interior fit out services",
  alternates: {
    canonical: "https://www.itss.co.in/services",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "ITSS – India Technical Solution Services" }],
  publisher: "ITSS – India Technical Solution Services",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
