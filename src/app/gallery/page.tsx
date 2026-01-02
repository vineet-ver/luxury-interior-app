
import type { Metadata } from "next";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
    title: "Interior Support Work Gallery | ITSS",
    description: "Showcasing our commercial interior design excellence.",
    keywords: "commercial false ceiling contractor, office partition work contractor, modular office furniture installation, commercial electrical fit out services, commercial HVAC fit out contractor, MEP fit out contractor",
};

export default function GalleryPage() {
    return <GalleryClient />;
}
