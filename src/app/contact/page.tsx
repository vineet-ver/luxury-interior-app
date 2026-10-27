
import type { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
    title: "Contact ITSS | Interior Contractor Delhi NCR",
// 45 chars ✅

description: "Get a free consultation from ITSS — leading commercial interior contractor in Delhi NCR. Call +91 97183 71994 or fill our form for a site visit.",
// 145 chars ✅
};

export default function ContactPage() {
    return <ContactClient />;
}
