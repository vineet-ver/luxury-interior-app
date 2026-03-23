import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "HVAC Contractor in Delhi NCR | Air Conditioning & Ventilation Services | ITSS",

  description:
    "ITSS is a leading HVAC contractor in Delhi NCR providing air conditioning, ventilation and HVAC installation services for offices, commercial buildings and industrial projects across Noida, Gurgaon and India.",

  keywords: [
    "HVAC contractor Delhi NCR",
    "HVAC services Delhi",
    "air conditioning contractor Delhi",
    "ventilation system installation",
    "commercial HVAC contractor Gurgaon Noida",
  ],
};

export default function Page() {
  return <PageClient />;
}
