import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Electrical Contractor in Delhi NCR | Commercial Electrical Services | ITSS",

  description:
    "ITSS is a leading electrical contractor in Delhi NCR providing commercial electrical installation, power distribution, wiring and maintenance services in Noida, Gurgaon and across India.",

  keywords: [
    "electrical contractor Delhi NCR",
    "commercial electrical services Delhi",
    "office electrical installation",
    "power distribution services",
    "electrical contractor Gurgaon Noida",
  ],
};

export default function Page() {
  return <PageClient />;
}
