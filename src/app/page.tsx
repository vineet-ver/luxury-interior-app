
import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "Commercial Interior Design Company in India | ITSS",
  description: "Leading commercial interior designers delivering turnkey office & corporate interior solutions across India.",
  keywords: "commercial interior design company, commercial interior designers, commercial interior solutions, turnkey commercial interior company, corporate office interiors, best commercial interior design firm",
};

export default function Home() {
  return <HomeClient />;
}
