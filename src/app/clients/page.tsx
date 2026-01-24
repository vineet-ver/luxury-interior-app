import type { Metadata } from "next";
import ClientsPage from "./ClientsPage";

export const metadata: Metadata = {
  title: "Our Clients & Corporate Partners | ITSS Interior Solutions",
  description:
    "Discover leading enterprise clients and corporate partners who trust ITSS for commercial interior design, turnkey fit-out services, and office infrastructure solutions across India.",
  keywords: [
    "ITSS clients",
    "corporate interior design clients",
    "office interior design company India",
    "commercial interior fit-out projects",
    "turnkey interior solutions India"
  ],
  alternates: {
    canonical: "https://www.itss.co.in/clients",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "ITSS Interior Experts" }],
  publisher: "India Technical Solution Services",
};

export default function Page() {
  return <ClientsPage />;
}
