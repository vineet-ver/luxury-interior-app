
import type { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
    title: "Our Clients — Trusted by 100+ Brands Across India | ITSS Interior & Technical Solutions",
    description: "ITSS has partnered with leading corporates, real estate developers, and SMEs. See who trusts us for their turnkey interior and technical projects.",
    keywords: "commercial interior design near me, office interior designers near me, office interior designers in Gurgaon, office interior designers in Noida",
};

export default function ContactPage() {
    return <ContactClient />;
}
