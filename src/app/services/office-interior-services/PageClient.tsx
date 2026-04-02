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
    Office Interior Designers in Delhi NCR
  </h1>

  <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
    We are Delhi NCR based office interior designers providing modern workspace design, corporate office interiors and turnkey interior solutions across India.
  </p>

  {/* INTERNAL LINKS */}
  <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
    Explore our{" "}
    <Link href="/services/epc-services-delhi" className="text-blue-600">
      EPC services in Delhi NCR
    </Link>,{" "}
    <Link href="/services/workstation-installation-delhi" className="text-blue-600">
      workstation installation services
    </Link>{" "}
    and{" "}
    <Link href="/services/Turnkey-interior-projects-delhi" className="text-blue-600">
      turnkey interior solutions
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
          src="/service_image/office-interior.jpg"
          alt="Office interior designers in Delhi NCR corporate workspace design services"
          width={500}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold">
          Modern Office Interior Design Solutions in Delhi NCR
        </h2>

        <p className="mt-4 text-gray-600">
          ITSS is a leading team of office interior designers specializing in modern corporate office interiors, workspace planning and functional office design solutions.
        </p>

        <p className="mt-4 text-gray-600">
          We design offices that improve productivity, reflect your brand identity and create a professional working environment.
        </p>

      </div>

    </div>
  </Container>
</section>

{/* SERVICES */}
<section className="py-20 bg-gray-50">
  <Container>

    <h2 className="text-3xl font-bold text-center mb-10">
      Our Office Interior Design Services in Delhi NCR
    </h2>

    <div className="grid md:grid-cols-3 gap-6 text-center">

      {[
        "Workspace Planning & Layout Design",
        "Corporate Office Interior Design",
        "Modular Office Design",
        "Reception & Lobby Design",
        "Conference Room Design",
        "Cabin & Workspace Design",
        "Ergonomic Design Solutions",
        "Branding & Theme-Based Interiors"
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
      Why Choose Our Office Interior Designers?
    </h2>

    <div className="grid md:grid-cols-4 gap-6 text-center">

      {[
        "Creative & Functional Designs",
        "Experienced Design Team",
        "Customized Office Solutions",
        "End-to-End Project Support"
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
      Office Interior Design Services Across India
    </h2>

    <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
      Based in Delhi NCR, we provide office interior design services across India including Mumbai, Bangalore, Hyderabad, Chennai, Pune and other major cities.
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

      <Link href="/services/commercial-interior-fitout-delhi" className="text-[#c8a951]">
        Commercial Interior Designers Delhi
      </Link>

      <Link href="/services/workstation-installation-delhi" className="text-[#c8a951]">
        Workstation Installation Services
      </Link>

      <Link href="/services/epc-services-delhi" className="text-[#c8a951]">
        EPC Services in Delhi NCR
      </Link>

    </div>

  </Container>
</section>

{/* CTA */}
<section className="py-20 text-center bg-gray-50">

  <h2 className="text-3xl font-bold">
    Looking for Office Interior Designers in Delhi NCR?
  </h2>

  <Link href="/contact">
    <button className="mt-6 px-6 py-3 bg-[#c8a951] text-white rounded">
      Get Free Quote →
    </button>
  </Link>

</section>

{/* SCHEMA */}
<Script
  id="office-interior-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Office Interior Design",
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