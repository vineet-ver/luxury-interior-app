import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title:
    "Turnkey Interior Contractors in Delhi NCR | Warehouse & Industrial Projects | ITSS",

  description:
    "ITSS is a Delhi NCR based turnkey interior contractor specializing in warehouse interiors, industrial projects and large-scale fit-outs across India.",

  keywords: [
    "turnkey interior contractors",
    "warehouse interior contractors India",
    "industrial interior design India",
    "turnkey warehouse projects",
    "commercial interior contractors Delhi",
    "industrial fitout services India"
  ],

  alternates: {
    canonical: "https://www.itss.co.in/services/Turnkey-interior-projects-delhi",
  },
};

export default function Page() {
  return <PageClient />;
}