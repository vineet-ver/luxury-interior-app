"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Container } from "@/components/ui/Container";

export default function PageClient() {
  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="py-24 bg-gray-50 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0b1f3a]">
          EPC Contractor in Delhi NCR
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Leading EPC contractor providing engineering, procurement and construction services for commercial and industrial projects across Delhi, Noida and Gurgaon.
        </p>

        <Link href="/contact">
          <button className="mt-8 px-6 py-3 bg-[#0b1f3a] text-white rounded">
            Get Free Consultation →
          </button>
        </Link>
      </section>

      {/* ================= IMAGE + CONTENT ================= */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <Image
                src="/services/epc.jpg"
                alt="EPC contractor in Delhi NCR commercial construction project"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Engineering, Procurement & Construction Solutions
              </h2>

              <p className="mt-4 text-gray-600">
                ITSS offers complete EPC solutions covering engineering design, procurement of materials and construction execution for commercial and industrial projects.
              </p>

              <p className="mt-4 text-gray-600">
                Our team ensures efficient project management, cost optimization and timely delivery with high-quality standards.
              </p>

            </div>

          </div>
        </Container>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-gray-50">
        <Container>

          <h2 className="text-3xl font-bold text-center mb-10">
            Our EPC Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">

            {[
              "Engineering Design & Planning",
              "Procurement & Material Supply",
              "Construction & Execution",
              "Project Management",
              "Industrial & Commercial Projects",
              "Turnkey EPC Solutions"
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
                {item}
              </div>
            ))}

          </div>

        </Container>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20">
        <Container>

          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose ITSS for EPC Services?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            {[
              "End-to-End Project Execution",
              "Experienced Engineering Team",
              "Cost Effective Solutions",
              "On-Time Delivery"
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-100 rounded-xl">
                {item}
              </div>
            ))}

          </div>

        </Container>
      </section>

      {/* ================= SERVICE AREAS ================= */}
<section className="py-16 text-center">
  <Container>

    <h2 className="text-2xl font-bold mb-6">
      Our Service Locations
    </h2>

    <div className="flex flex-wrap justify-center gap-4">

      <Link href="/services-delhi" className="text-blue-600">
        Delhi Services
      </Link>

      <Link href="/office-interior-contractor-noida" className="text-blue-600">
        Noida Services
      </Link>

      <Link href="/office-interior-contractor-gurgaon" className="text-blue-600">
        Gurgaon Services
      </Link>

    </div>

  </Container>
</section>

      {/* ================= GEO ================= */}
      <section className="py-20 bg-gray-50">
        <Container>

          <h2 className="text-3xl font-bold text-center">
            EPC Services Across Delhi NCR & India
          </h2>

          <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide EPC services in Delhi, Noida, Gurgaon, Ghaziabad and across India for commercial and industrial projects.
          </p>

        </Container>
      </section>

      {/* ================= INTERNAL LINKS ================= */}
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

            <Link href="/services/commercial-interior-fitout-delhi" className="text-[#c8a951]">
              Interior Fitout
            </Link>

          </div>

        </Container>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20">
        <Container>

          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="max-w-2xl mx-auto space-y-6">

            <div>
              <h3 className="font-semibold">What is EPC service?</h3>
              <p className="text-gray-600">EPC stands for Engineering, Procurement and Construction, where a company handles complete project execution.</p>
            </div>

            <div>
              <h3 className="font-semibold">Do you provide EPC services in Delhi NCR?</h3>
              <p className="text-gray-600">Yes, we provide EPC services in Delhi, Noida and Gurgaon.</p>
            </div>

            <div>
              <h3 className="font-semibold">Do you handle turnkey projects?</h3>
              <p className="text-gray-600">Yes, we specialize in turnkey EPC project execution.</p>
            </div>

          </div>

        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-3xl font-bold">
          Looking for EPC Contractor?
        </h2>

        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-[#c8a951] text-white rounded">
            Get Free Quote →
          </button>
        </Link>
      </section>

      {/* ================= SCHEMA ================= */}
      <Script
        id="epc-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "EPC Services",
            "areaServed": "Delhi NCR",
            "provider": {
              "@type": "Organization",
              "name": "ITSS"
            }
          })
        }}
      />

    </div>
  );
}
