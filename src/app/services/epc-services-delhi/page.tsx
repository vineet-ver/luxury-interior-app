import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "EPC Contractor in Delhi NCR | Turnkey EPC Services Company | ITSS",

  description:
    "ITSS is a leading EPC contractor in Delhi NCR offering engineering, procurement and construction services for commercial and industrial projects across Noida, Gurgaon and India.",

  keywords: [
    "EPC contractor Delhi NCR",
    "turnkey EPC services company",
    "engineering procurement construction company",
    "commercial EPC contractor India",
    "EPC contractor Gurgaon Noida",
  ],
};

export default function Page() {
  return <PageClient />;
}
