import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "EPC Services Delhi | Engineering Procurement | ITSS",
// 52 chars ✅

description: "ITSS provides EPC contracting in Delhi NCR — engineering, procurement and construction for large commercial interior projects. Pan-India execution.",
// 148 chars ✅

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