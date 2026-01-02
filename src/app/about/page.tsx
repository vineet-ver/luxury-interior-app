
import type { Metadata } from "next";
import AboutClient from "@/components/about/AboutClient";

export const metadata: Metadata = {
    title: "About ITSS - Commercial Interior Experts",
    description: "Learn about our legacy in commercial interior design across Delhi and Mumbai.",
    keywords: "commercial interior designers in Delhi, office interior designers in Delhi, commercial interior designers in Mumbai, office interior designers in Mumbai",
};

export default function AboutPage() {
    return <AboutClient />;
}
