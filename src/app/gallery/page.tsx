
import type { Metadata } from "next";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Interior Design Portfolio | Office & Commercial Interior Projects",
  description: "Explore ITSS commercial interior work gallery featuring office interiors, workspace design, furniture installation, and turnkey fit-out projects completed across India.",
  keywords: [
    "interior design photos",
    "office interior design photos",
    "interior designers studio",
    "workspace interior design",
    "turnkey interior projects",
    "office interior projects",
    "interior design commercial projects",
    "interior design studio in Delhi",
    "best interior designers in bangalore"
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
