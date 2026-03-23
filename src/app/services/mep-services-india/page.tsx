import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "MEP Contractor in Delhi NCR | Mechanical Electrical Plumbing Services | ITSS",

  description:
    "ITSS is a leading MEP contractor in Delhi NCR providing mechanical, electrical and plumbing services for commercial buildings, offices and industrial projects across Noida, Gurgaon and India.",

  keywords: [
    "MEP contractor Delhi NCR",
    "mechanical electrical plumbing services",
    "MEP services company India",
    "commercial MEP contractor",
    "MEP contractor Gurgaon Noida",
  ],
};

export default function Page() {
  return <PageClient />;
}
