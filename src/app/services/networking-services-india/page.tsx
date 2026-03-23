import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "IT Networking Services Company in India | Structured Cabling & IT Infrastructure | ITSS",

  description:
    "ITSS provides professional IT networking services including structured cabling, server setup, data networking and IT infrastructure solutions for offices and commercial spaces across India.",

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
