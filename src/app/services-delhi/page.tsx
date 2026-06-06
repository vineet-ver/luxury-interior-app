import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Interior Design Company in Delhi | Commercial Interior & Turnkey Services | ITSS",

  description:
    "ITSS is a leading interior design company in Delhi offering commercial interior design, turnkey fitout, EPC, MEP, HVAC, electrical and fire fighting services across Delhi NCR.",

  keywords: [
    "interior design company Delhi",
    "office interior designer Delhi",
    "commercial interior contractor Delhi",
    "turnkey interior fitout Delhi",
    "EPC contractor Delhi",
    "MEP HVAC electrical services Delhi",
  ],
};

export default function Page() {
  return <PageClient />;
}