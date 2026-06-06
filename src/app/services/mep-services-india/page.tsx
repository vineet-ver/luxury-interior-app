import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "MEP Services India | Mechanical Electrical | ITSS",
// 50 chars ✅

description: "ITSS delivers MEP services across India — mechanical, electrical and plumbing for offices and commercial spaces. In-house team, 250+ projects delivered.",
// 153 chars ✅

  keywords: [
    "MEP services India",
    "MEP contractors India",
    "mechanical electrical plumbing services",
    "MEP company Delhi NCR",
    "commercial MEP services",
    "industrial MEP contractors India"
  ],

  alternates: {
    canonical: "https://www.itss.co.in/services/mep-services-india",
  },
};

export default function Page() {
  return <PageClient />;
}