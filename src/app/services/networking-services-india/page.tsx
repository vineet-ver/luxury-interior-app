import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "IT Networking Services India | Structured Cabling | ITSS",
// 57 chars ✅

description: "ITSS provides structured cabling, LAN/WAN setup and IT networking services across India for offices and commercial spaces. Certified team.",
// 139 chars ✅

  keywords: [
    "IT networking services India",
    "structured cabling company",
    "office networking setup",
    "data cabling services",
    "IT infrastructure company India",
  ],
};

export default function Page() {
  return <PageClient />;
}