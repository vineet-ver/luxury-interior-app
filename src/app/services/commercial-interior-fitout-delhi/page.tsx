import type { Metadata } from "next";
import PageClient from "./PageClient";

/* ================= META ================= */
export const metadata: Metadata = {
  title: "Commercial Interior Design Company in Delhi NCR | Office Fitout Experts | ITSS",
  description:
    "ITSS is a leading commercial interior design company in Delhi NCR offering office interior design, turnkey fitout, workspace planning and execution services across Noida, Gurgaon and India.",

  keywords: [
    "commercial interior design Delhi NCR",
    "office interior designer Delhi",
    "turnkey interior fitout company",
    "office fitout contractor Delhi",
    "corporate interior design India",
  ],
};

export default function Page() {
  return <PageClient />;
}
