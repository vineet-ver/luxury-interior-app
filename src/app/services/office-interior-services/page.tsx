import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title:
    "Office Interior Designers in Delhi NCR | Pan India Services | ITSS",

  description:
    "ITSS is a Delhi NCR based office interior design company providing corporate interior, turnkey and workspace design services across India.",

  keywords: [
    "office interior designers",
    "office interior designers in Delhi NCR",
    "corporate office interior designers Delhi",
    "workspace interior design India",
    "office interior design services",
    "commercial interior designers Delhi"
  ],

  alternates: {
    canonical: "https://www.itss.co.in/services/office-interior-services",
  },
};

export default function Page() {
  return <PageClient />;
}