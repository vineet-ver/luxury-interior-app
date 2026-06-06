import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Fire Fighting Services Delhi | Safety Systems | ITSS",
// 53 chars ✅

description: "ITSS installs fire fighting systems in Delhi NCR — sprinklers, fire alarms, emergency lighting and Fire NOC compliance for commercial offices.",
// 143 chars ✅

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