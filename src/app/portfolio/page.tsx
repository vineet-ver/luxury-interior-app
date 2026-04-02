
import type { Metadata } from "next";
import PortfolioClient from "@/components/portfolio/PortfolioClient";

export const metadata: Metadata = {
  title: "Commercial Interior Projects Portfolio | ITSS",
  description:
    "Explore ITSS commercial interior projects portfolio featuring office, retail, restaurant and corporate interior design work delivered across India.",
  alternates: {
    canonical: "https://www.itss.co.in/portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "ITSS Interior Experts" }],
  publisher: "India Technical Solution Services",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
