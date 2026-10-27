import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "HVAC Services Delhi NCR | Office AC Systems | ITSS",
// 51 chars ✅

description: "Expert HVAC installation and maintenance for offices in Delhi NCR. ITSS designs and installs air conditioning systems for commercial spaces. Free quote.",
// 152 chars ✅

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