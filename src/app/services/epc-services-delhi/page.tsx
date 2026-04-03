import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title:
    "EPC Services in Delhi NCR | Engineering Procurement Construction Company | ITSS",

  description:
    "ITSS provides EPC services in Delhi NCR including engineering, procurement and construction solutions for commercial, industrial and interior projects across India.",

  keywords: [
    "EPC services",
    "EPC company Delhi NCR",
    "engineering procurement construction India",
    "EPC contractors India",
    "commercial EPC services",
    "industrial EPC company India"
  ],

  alternates: {
    canonical: "https://www.itss.co.in/services/epc-services-delhi",
  },
};

export default function Page() {
  return <PageClient />;
}