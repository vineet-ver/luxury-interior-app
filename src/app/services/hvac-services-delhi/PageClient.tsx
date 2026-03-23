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
          HVAC Contractor in Delhi NCR
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Professional HVAC services including air conditioning, ventilation and climate control solutions for offices, commercial buildings and industrial spaces across Delhi, Noida and Gurgaon.
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
                src="/services/hvac.jpg"
                alt="HVAC contractor in Delhi NCR air conditioning installation"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Heating, Ventilation & Air Conditioning Solutions
              </h2>

              <p className="mt-4 text-gray-600">
                ITSS provides complete HVAC solutions including air conditioning systems, ventilation design and installation services for commercial and industrial spaces.
              </p>

              <p className="mt-4 text-gray-600">
                Our HVAC systems are designed to improve energy efficiency, indoor air quality and overall comfort for modern buildings.
              </p>

            </div>

          </div>
        </Container>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-gray-50">
        <Container>

          <h2 className="text-3xl font-bold text-center mb-10">
            Our HVAC Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">

            {[
              "Air Conditioning Installation",
              "Ventilation System Design",
              "HVAC System Maintenance",
              "Commercial HVAC Solutions",
              "Industrial HVAC Systems",
              "Energy Efficient Cooling Systems"
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
            Why Choose ITSS for HVAC Services?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            {[
              "Energy Efficient Solutions",
              "Experienced HVAC Engineers",
              "Customized System Design",
              "Timely Project Execution"
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-100 rounded-xl">
                {item}
              </div>
            ))}

          </div>

        </Container>
      </section>

      {/* ================= GEO ================= */}
      <section className="py-20 bg-gray-50">
        <Container>

          <h2 className="text-3xl font-bold text-center">
            HVAC Services Across Delhi NCR & India
          </h2>

          <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide HVAC services in Delhi, Noida, Gurgaon, Ghaziabad and across India for offices, commercial buildings and industrial projects.
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

            <Link href="/services/electrical-contractor-delhi" className="text-[#c8a951]">
              Electrical Services
            </Link>

            <Link href="/services/epc-services-delhi" className="text-[#c8a951]">
              EPC Services
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
              <h3 className="font-semibold">What HVAC services do you provide?</h3>
              <p className="text-gray-600">
                We provide installation, maintenance, ventilation and air conditioning solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Do you provide HVAC services in Delhi NCR?</h3>
              <p className="text-gray-600">
                Yes, we provide services in Delhi, Noida and Gurgaon.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Do you handle commercial HVAC projects?</h3>
              <p className="text-gray-600">
                Yes, we specialize in commercial and industrial HVAC solutions.
              </p>
            </div>

          </div>

        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-3xl font-bold">
          Looking for HVAC Contractor?
        </h2>

        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-[#c8a951] text-white rounded">
            Get Free Quote →
          </button>
        </Link>
      </section>

      {/* ================= SCHEMA ================= */}
      <Script
        id="hvac-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "HVAC Services",
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
