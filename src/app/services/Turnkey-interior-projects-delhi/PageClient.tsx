"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Container } from "@/components/ui/Container";
import { MainLayout } from "@/components/layout/MainLayout";

export default function PageClient() {
  return (
    <MainLayout>

<section className="py-24 bg-white">
<Container>
<div>

{/* HERO */}
<section className="py-24 bg-gray-50 text-center">

  <h1 className="text-4xl md:text-5xl font-bold text-[#0b1f3a]">
    Turnkey Interior Contractors in Delhi NCR
  </h1>

  <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
    We are Delhi NCR based turnkey interior contractors specializing in warehouse interiors, industrial fit-outs and large-scale turnkey projects across India.
  </p>

  {/* INTERNAL LINKS */}
  <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
    Explore our{" "}
    <Link href="/services/epc-services-delhi" className="text-blue-600">
      EPC services
    </Link>,{" "}
    <Link href="/services/mep-services-india" className="text-blue-600">
      MEP services
    </Link>{" "}
    and{" "}
    <Link href="/services/office-interior-services" className="text-blue-600">
      office interior design services
    </Link>.
  </p>

  <Link href="/contact">
    <button className="mt-8 px-6 py-3 bg-[#0b1f3a] text-white rounded">
      Get Free Consultation →
    </button>
  </Link>

</section>

{/* IMAGE + CONTENT */}
<section className="py-20">
  <Container>
    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div>
        <Image
          src="/service_image/turnkey1.jpg"
          alt="Turnkey warehouse interior contractors India industrial fitout services"
          width={500}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold">
          Warehouse & Industrial Turnkey Interior Solutions
        </h2>

        <p className="mt-4 text-gray-600">
          ITSS specializes in turnkey warehouse interiors and industrial fit-out projects designed for efficiency, durability and scalability.
        </p>

        <p className="mt-4 text-gray-600">
          From planning to execution, we deliver complete solutions for warehouses, logistics hubs, factories and industrial facilities.
        </p>

      </div>

    </div>
  </Container>
</section>

{/* SERVICES */}
<section className="py-20 bg-gray-50">
  <Container>

    <h2 className="text-3xl font-bold text-center mb-10">
      Our Turnkey Interior Services
    </h2>

    <div className="grid md:grid-cols-3 gap-6 text-center">

      {[
        "Warehouse Interior Fit-outs",
        "Industrial Space Planning",
        "Factory Interior Execution",
        "Storage & Racking Layout Design",
        "Electrical & HVAC Integration",
        "MEP & Civil Works",
        "Logistics & Distribution Center Setup",
        "End-to-End Turnkey Execution"
      ].map((item, i) => (
        <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
          {item}
        </div>
      ))}

    </div>

  </Container>
</section>

{/* WHY CHOOSE */}
<section className="py-20">
  <Container>

    <h2 className="text-3xl font-bold text-center mb-10">
      Why Choose Our Turnkey Contractors?
    </h2>

    <div className="grid md:grid-cols-4 gap-6 text-center">

      {[
        "Expert Industrial Experience",
        "End-to-End Project Execution",
        "On-Time Delivery",
        "Cost-Effective Solutions"
      ].map((item, i) => (
        <div key={i} className="p-6 bg-gray-100 rounded-xl">
          {item}
        </div>
      ))}

    </div>

  </Container>
</section>

{/* GEO */}
<section className="py-20 bg-gray-50">
  <Container>

    <h2 className="text-3xl font-bold text-center">
      Turnkey Interior Projects Across India
    </h2>

    <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
      Based in Delhi NCR, we deliver turnkey interior and warehouse projects across India including Mumbai, Bangalore, Hyderabad, Pune, Chennai and other industrial regions.
    </p>

  </Container>
</section>

{/* INTERNAL LINKS */}
<section className="py-16 text-center">
  <Container>

    <h2 className="text-2xl font-bold mb-6">
      Explore Related Services
    </h2>

    <div className="flex flex-wrap justify-center gap-4">

      <Link href="/services/epc-services-delhi" className="text-[#c8a951]">
        EPC Services
      </Link>

      <Link href="/services/mep-services-india" className="text-[#c8a951]">
        MEP Services
      </Link>

      <Link href="/services/hvac-services-delhi" className="text-[#c8a951]">
        HVAC Services
      </Link>

    </div>

  </Container>
</section>

{/* CTA */}
<section className="py-20 text-center bg-gray-50">

  <h2 className="text-3xl font-bold">
    Need Turnkey Warehouse or Industrial Interior Solutions?
  </h2>

  <Link href="/contact">
    <button className="mt-6 px-6 py-3 bg-[#c8a951] text-white rounded">
      Get Free Quote →
    </button>
  </Link>

</section>

{/* SCHEMA */}
<Script
  id="turnkey-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Turnkey Interior Contractor",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "provider": {
        "@type": "Organization",
        "name": "ITSS",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Delhi",
          "addressCountry": "India"
        }
      }
    })
  }}
/>

</div>
</Container>
</section>

</MainLayout>
  );
}