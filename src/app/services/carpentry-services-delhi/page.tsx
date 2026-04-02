import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Carpentry Services in Delhi NCR | Office Furniture & Workstation Installation | ITSS",

  description:
    "ITSS provides professional carpentry services in Delhi NCR including office furniture installation, modular workstation setup, wooden partitions and commercial carpentry solutions in Noida, Gurgaon and across India.",

  keywords: [
    "carpentry services Delhi NCR",
    "office furniture installation Delhi",
    "modular workstation setup",
    "commercial carpentry contractor",
    "wooden partition work office",
    "carpentry services Gurgaon Noida",
  ],
};

export default function Page() {
  return <PageClient />;
}