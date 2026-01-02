
import type { Metadata } from "next";
import PortfolioClient from "@/components/portfolio/PortfolioClient";

export const metadata: Metadata = {
    title: "Commercial Interior Projects Portfolio",
    description: "View our completed office, retail, restaurant & corporate interior design projects across India.",
    keywords: "retail store interior design, showroom interior design, restaurant interior design services, cafe interior design company, hotel interior design company, clinic interior design services, hospital interior design firm, salon interior design services, gym interior design company, coworking space interior design",
};

export default function PortfolioPage() {
    return <PortfolioClient />;
}
