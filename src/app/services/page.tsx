
import type { Metadata } from "next";
import ServicesClient from "@/components/services/ServicesClient";

export const metadata: Metadata = {
    title: "Office Interior Design & Turnkey Fit-Out Services",
    description: "Office interior design company offering corporate interiors, renovation & turnkey office fit-out services.",
    keywords: "office interior design company, office interior designers, office fit out services, turnkey office interior solutions, corporate office interior design, workspace interior design services, modern office interior design services, office renovation contractor, commercial renovation contractor, turnkey interior contractor for office",
};

export default function ServicesPage() {
    return <ServicesClient />;
}
