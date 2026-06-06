import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Electrical Contractor Delhi NCR | Office Wiring | ITSS",
// 55 chars ✅

description: "Licensed electrical contractor in Delhi NCR. ITSS installs DB panels, office wiring, UPS, lighting and electrical systems for commercial projects.",
// 147 chars ✅

  keywords: [
    "HVAC services Delhi NCR",
    "HVAC contractor Delhi",
    "air conditioning installation India",
    "industrial HVAC systems",
    "commercial HVAC solutions",
    "ventilation systems India"
  ],

  alternates: {
    canonical: "https://www.itss.co.in/services/hvac-services-delhi",
  },
};

export default function Page() {
  return <PageClient />;
}