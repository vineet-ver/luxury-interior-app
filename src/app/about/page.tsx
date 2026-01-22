
import type { Metadata } from "next";
import AboutClient from "@/components/about/AboutClient";

export const metadata: Metadata = {
  title: "About ITSS | Commercial Interior Design Experts in India",
  description:
    "Learn about ITSS, a leading commercial interior design company delivering innovative office interiors, fit-out and renovation solutions across India.",
  alternates: {
    canonical: "https://www.itss.co.in/about",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "ITSS Interior Experts" }],
  publisher: "India Technical Solution Services",
};

export default function AboutPage() {
  return <AboutClient />;
}
