import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title:
    "Fire Fighting Services in Delhi NCR | Fire Safety Systems & Contractors | ITSS",

  description:
    "ITSS provides fire fighting services in Delhi NCR including fire safety systems, sprinkler systems, fire alarms and compliance solutions for commercial and industrial projects across India.",

  keywords: [
    "fire fighting services Delhi NCR",
    "fire safety systems India",
    "fire alarm installation Delhi",
    "sprinkler system contractors",
    "fire protection services India",
    "industrial fire safety solutions"
  ],

  alternates: {
    canonical: "https://www.itss.co.in/services/fire-fighting-services-delhi",
  },
};

export default function Page() {
  return <PageClient />;
}