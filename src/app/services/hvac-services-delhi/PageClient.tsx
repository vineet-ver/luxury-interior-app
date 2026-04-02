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
    HVAC Services in Delhi NCR
  </h1>

  <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
    We are a Delhi NCR based HVAC contractor providing heating, ventilation and air conditioning solutions for commercial, industrial and warehouse projects across India.
  </p>

  {/* INTERNAL LINKS */}
  <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
    Explore our{" "}
    <Link href="/services/mep-services-india" className="text-blue-600">
      MEP services
    </Link>,{" "}
    <Link href="/services/epc-services-delhi" className="text-blue-600">
      EPC solutions
    </Link>{" "}
    and{" "}
    <Link href="/services/Turnkey-interior-projects-delhi" className="text-blue-600">
      turnkey interior services
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
          src="/service_image/hvac1.jpg"
          alt="HVAC services Delhi NCR air conditioning ventilation systems"
          width={500}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold">
          Complete HVAC System Design & Installation
        </h2>

        <p className="mt-4 text-gray-600">
          ITSS provides advanced HVAC solutions including system design, installation and maintenance for commercial and industrial spaces.
        </p>

        <p className="mt-4 text-gray-600">
          We ensure efficient climate control, energy optimization and long-term performance for offices, warehouses and industrial facilities.
        </p>

      </div>

    </div>
  </Container>
</section>

{/* SERVICES */}
<section className="py-20 bg-gray-50">
  <Container>

    <h2 className="text-3xl font-bold text-center mb-10">
      Our HVAC Services
    </h2>

    <div className="grid md:grid-cols-3 gap-6 text-center">

      {[
        "HVAC System Design & Planning",
        "Air Conditioning Installation",
        "Ventilation System Setup",
        "Ducting & Air Distribution Systems",
        "Industrial HVAC Solutions",
        "Energy Efficient Cooling Systems",
        "Maintenance & Repair Services",
        "Turnkey HVAC Solutions"
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
      Why Choose Our HVAC Services?
    </h2>

    <div className="grid md:grid-cols-4 gap-6 text-center">

      {[
        "Expert HVAC Engineers",
        "Energy Efficient Solutions",
        "Reliable Installation",
        "Timely Project Delivery"
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
      HVAC Services Across India
    </h2>

    <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
      Based in Delhi NCR, we provide HVAC services across India including Mumbai, Bangalore, Hyderabad, Chennai, Pune and other industrial locations.
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

      <Link href="/services/mep-services-india" className="text-[#c8a951]">
        MEP Services
      </Link>

      <Link href="/services/electrical-contractor-delhi" className="text-[#c8a951]">
        Electrical Services
      </Link>

      <Link href="/services/fire-fighting-services-delhi" className="text-[#c8a951]">
        Fire Fighting Services
      </Link>

    </div>

  </Container>
</section>

{/* CTA */}
<section className="py-20 text-center bg-gray-50">

  <h2 className="text-3xl font-bold">
    Need HVAC Solutions for Your Project?
  </h2>

  <Link href="/contact">
    <button className="mt-6 px-6 py-3 bg-[#c8a951] text-white rounded">
      Get Free Quote →
    </button>
  </Link>

</section>

{/* SCHEMA */}
<Script
  id="hvac-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "HVAC Services",
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