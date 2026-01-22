
import type { Metadata } from "next";
import ServicesClient from "@/components/services/ServicesClient";

export const metadata: Metadata = {
    title: "Commercial Interior Design Services Across India | ITSS ",
    description: "ITSS is a leading commercial interior design company in India providing office interior design, turnkey commercial interiors, and corporate fit-out services across India.",
    keywords: "office interior design company, office interior designers, office fit out services, turnkey office interior solutions, corporate office interior design, workspace interior design services, modern office interior design services, office renovation contractor, commercial renovation contractor, turnkey interior contractor for office, commercial interior design services, office interior design company, turnkey commercial interiors, corporate fit out services, office interior designers india",
};
 alternates: {
    canonical: "https://www.itss.co.in/services",
};
robots: {
    index: true,
    follow: true,
  },
authors: [{ name: "ITSS Interior Experts" }],
  publisher: "India Technical Solution Services",
};

export default function ServicesPage() {
    return <ServicesClient />;
}
