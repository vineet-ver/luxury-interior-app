import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title:
    "MEP Services in India | Mechanical Electrical Plumbing Contractors | ITSS",

  description:
    "ITSS provides MEP services in India including mechanical, electrical and plumbing solutions for commercial, industrial and interior projects. Based in Delhi NCR serving pan India.",

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