
import type { Metadata } from "next";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Project Gallery | Office Interiors India | ITSS",
// 48 chars ✅

description: "Explore completed office interior photos by ITSS — turnkey fitouts, workstation setups, MEP and HVAC installations across Delhi NCR and pan-India.",
// 148 chars ✅
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
