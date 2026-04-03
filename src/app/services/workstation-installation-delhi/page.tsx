import type { Metadata } from "next";
import PageClient from "./pageClient";

export const metadata: Metadata = {
  title: "Workstation Installation Services in Delhi NCR | Modular Office Setup | ITSS",

  description:
    "ITSS provides professional workstation installation services in Delhi NCR including modular office workstation setup, office furniture installation, and corporate workspace solutions in Noida, Gurgaon and across India.",

  keywords: [
    "workstation installation Delhi NCR",
    "modular workstation setup Delhi",
    "office workstation installation",
    "office furniture installation Delhi",
    "corporate workstation setup Gurgaon Noida",
    "IT workstation installation services",
  ],
};

export default function Page() {
  return <PageClient />;
}