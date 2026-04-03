import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

/* ================= META ================= */
export const metadata: Metadata = {
  title: "Commercial Interior Design Company in Delhi NCR | Office Interior Contractor | ITSS",

  description:
    "ITSS is a leading commercial interior design company in Delhi NCR offering office interior design, turnkey fitout, EPC, MEP, HVAC and electrical services across Noida, Gurgaon and India.",

  keywords: [
    "commercial interior design Delhi NCR",
    "office interior designer Delhi",
    "turnkey interior contractor India",
    "office fitout company Delhi NCR",
    "corporate office interior design",
    "MEP contractor Delhi",
    "HVAC services Delhi NCR",
    "electrical contractor Delhi",
    "interior design company Gurgaon Noida",
    "office fitout company Delhi NCR",
  ],

  openGraph: {
    title: "Commercial Interior Design & Fitout Solutions | ITSS",
    description:
      "Office interior design, turnkey fitout and EPC services across Delhi NCR and India.",
    url: "https://www.itss.co.in",
    siteName: "ITSS",
    images: [
      {
        url: "/hero_images/interior-bg.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical: "https://www.itss.co.in",
  },
};

/* ================= PAGE ================= */
export default function Page() {
  return <HomeClient />;
}