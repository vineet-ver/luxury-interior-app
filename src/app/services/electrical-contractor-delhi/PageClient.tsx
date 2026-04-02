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
    Electrical Contractor in Delhi NCR
  </h1>

  <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
    We are a Delhi NCR based electrical contractor providing commercial and industrial electrical services including installation, power distribution and maintenance across India.
  </p>

  {/* INTERNAL LINKS */}
  <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
    Explore our{" "}
    <Link href="/services/mep-services-india" className="text-blue-600">
      MEP services
    </Link>,{" "}
    <Link href="/services/hvac-services-delhi" className="text-blue-600">
      HVAC solutions
    </Link>{" "}
    and{" "}
    <Link href="/services/epc-services-delhi" className="text-blue-600">
      EPC services
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
          src="/service_image/electrical-1.jpg"
          alt="Electrical contractor Delhi NCR commercial industrial electrical services"
          width={500}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold">
          Complete Electrical Installation & Power Solutions
        </h2>

        <p className="mt-4 text-gray-600">
          ITSS provides comprehensive electrical services including system design, installation, testing and maintenance for commercial and industrial projects.
        </p>

        <p className="mt-4 text-gray-600">
          Our team ensures safe, efficient and reliable electrical infrastructure tailored to your project requirements.
        </p>

      </div>

    </div>
  </Container>
</section>

{/* SERVICES */}
<section className="py-20 bg-gray-50">
  <Container>

    <h2 className="text-3xl font-bold text-center mb-10">
      Our Electrical Services
    </h2>

    <div className="grid md:grid-cols-3 gap-6 text-center">

      {[
        "Electrical System Design & Planning",
        "Power Distribution Systems",
        "Cable Laying & Wiring",
        "Lighting Installation & Design",
        "Panel Installation & Testing",
        "Industrial Electrical Works",
        "Maintenance & Repair Services",
        "Turnkey Electrical Solutions"
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
      Why Choose Our Electrical Services?
    </h2>

    <div className="grid md:grid-cols-4 gap-6 text-center">

      {[
        "Certified Electrical Experts",
        "Safe & Reliable Systems",
        "On-Time Execution",
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
      Electrical Services Across India
    </h2>

    <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
      Based in Delhi NCR, we provide electrical services across India including Mumbai, Bangalore, Hyderabad, Chennai, Pune and other cities.
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

      <Link href="/services/hvac-services-delhi" className="text-[#c8a951]">
        HVAC Services
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
    Need Electrical Services for Your Project?
  </h2>

  <Link href="/contact">
    <button className="mt-6 px-6 py-3 bg-[#c8a951] text-white rounded">
      Get Free Quote →
    </button>
  </Link>

</section>

{/* SCHEMA */}
<Script
  id="electrical-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Electrical Services",
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