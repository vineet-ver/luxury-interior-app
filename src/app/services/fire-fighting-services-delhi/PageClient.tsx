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
    Fire Fighting Services in Delhi NCR
  </h1>

  <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
    We are a Delhi NCR based fire fighting contractor providing fire safety systems, fire alarms, sprinkler systems and compliance solutions for commercial and industrial projects across India.
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
    <Link href="/services/electrical-contractor-delhi" className="text-blue-600">
      electrical services
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
          src="/service_image/fire-fighting1.jpg"
          alt="Fire fighting services Delhi NCR fire safety systems sprinkler installation"
          width={500}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold">
          Complete Fire Safety & Protection Solutions
        </h2>

        <p className="mt-4 text-gray-600">
          ITSS provides complete fire fighting solutions including system design, installation and maintenance for commercial and industrial spaces.
        </p>

        <p className="mt-4 text-gray-600">
          We ensure compliance with fire safety regulations and deliver reliable systems to protect your property and workforce.
        </p>

      </div>

    </div>
  </Container>
</section>

{/* SERVICES */}
<section className="py-20 bg-gray-50">
  <Container>

    <h2 className="text-3xl font-bold text-center mb-10">
      Our Fire Fighting Services
    </h2>

    <div className="grid md:grid-cols-3 gap-6 text-center">

      {[
        "Fire Alarm System Installation",
        "Sprinkler System Installation",
        "Hydrant System Setup",
        "Fire Detection Systems",
        "Industrial Fire Safety Solutions",
        "Fire Compliance & Safety Audits",
        "Maintenance & Inspection Services",
        "Turnkey Fire Protection Solutions"
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
      Why Choose Our Fire Fighting Services?
    </h2>

    <div className="grid md:grid-cols-4 gap-6 text-center">

      {[
        "Certified Fire Safety Experts",
        "Compliance with Regulations",
        "Reliable System Installation",
        "On-Time Project Delivery"
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
      Fire Fighting Services Across India
    </h2>

    <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
      Based in Delhi NCR, we provide fire safety and fire fighting services across India including Mumbai, Bangalore, Hyderabad, Chennai, Pune and other cities.
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

      <Link href="/services/electrical-contractor-delhi" className="text-[#c8a951]">
        Electrical Services
      </Link>

    </div>

  </Container>
</section>

{/* CTA */}
<section className="py-20 text-center bg-gray-50">

  <h2 className="text-3xl font-bold">
    Need Fire Fighting & Safety Solutions?
  </h2>

  <Link href="/contact">
    <button className="mt-6 px-6 py-3 bg-[#c8a951] text-white rounded">
      Get Free Quote →
    </button>
  </Link>

</section>

{/* SCHEMA */}
<Script
  id="fire-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Fire Fighting Services",
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