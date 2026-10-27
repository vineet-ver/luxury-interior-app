import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Carpentry Services Delhi NCR | Office Joinery | ITSS",
// 53 chars ✅

description: "Custom carpentry and joinery services for offices in Delhi NCR. ITSS fabricates workstations, cabins, reception desks and false ceiling work.",
// 142 chars ✅

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