
import type { Metadata } from "next";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Commercial Interior Work Gallery | Office Projects by ITSS",
  description: "Explore ITSS commercial interior work gallery featuring office interiors, workspace design, furniture installation, and turnkey fit-out projects completed across India.",
  keywords: [
    "commercial interior work gallery",
    "office interior projects",
    "turnkey fit out gallery",
    "workspace interior design",
    "ITSS interior projects"
  ],
  alternates: {
    canonical: "https://www.itss.co.in/gallery",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "ITSS Interior Experts" }],
  publisher: "India Technical Solution Services",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
