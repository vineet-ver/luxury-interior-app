import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title:
    "HVAC Services in Delhi NCR | Heating Ventilation Air Conditioning Solutions | ITSS",

  description:
    "ITSS provides HVAC services in Delhi NCR including heating, ventilation and air conditioning solutions for commercial, industrial and warehouse projects across India.",

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