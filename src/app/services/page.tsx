
import type { Metadata } from "next";
import ServicesClient from "@/components/services/ServicesClient";

export const metadata: Metadata = {
  title: "Office Interior Design & Turnkey Fit-Out Services | ITSS",
  description:
    "Office interior design company offering corporate interiors, renovation & turnkey office fit-out services across India for modern and functional workspaces.",
  keywords: [
    "office interior design company",
    "office interior designers",
    "office fit out services",
    "turnkey office interior solutions",
    "corporate office interior design",
    "workspace interior design services",
    "office renovation contractor",
    "commercial interior design services",
    "turnkey commercial interiors",
    "corporate fit out services",
  ],
  alternates: {
    canonical: "https://www.itss.co.in/services",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "ITSS Interior Experts" }],
  publisher: "India Technical Solution Services",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
