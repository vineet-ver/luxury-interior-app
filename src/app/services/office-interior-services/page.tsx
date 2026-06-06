import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Office Interior Services Delhi NCR | Design | ITSS",
// 51 chars ✅

description: "ITSS offers complete office interior design and fitout services in Delhi NCR — space planning, 3D design, civil work, furniture and handover.",
// 142 chars ✅

  keywords: [
    "office interior designers",
    "office interior designers in Delhi NCR",
    "corporate office interior designers Delhi",
    "workspace interior design India",
    "office interior design services",
    "commercial interior designers Delhi"
  ],

  alternates: {
    canonical: "https://www.itss.co.in/services/office-interior-services",
  },
};

export default function Page() {
  return <PageClient />;
}