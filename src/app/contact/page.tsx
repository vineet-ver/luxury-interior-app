
import type { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
    title: "Contact ITSS | Turnkey Interior Contractors",
    description: "Get in touch with our expert office interior designers in Gurgaon and Noida.",
    keywords: "commercial interior design near me, office interior designers near me, office interior designers in Gurgaon, office interior designers in Noida",
};

export default function ContactPage() {
    return <ContactClient />;
}
