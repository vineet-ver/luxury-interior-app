"use client";

import Link from "next/link";
import Script from "next/script";
import { Container } from "@/components/ui/Container";

export default function PageClient() {
  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="py-24 bg-gray-50 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0b1f3a]">
          Interior Design Company in Delhi
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          ITSS provides complete commercial interior design, turnkey fitout and engineering services including EPC, MEP, HVAC, electrical and fire fighting solutions across Delhi.
        </p>

        <Link href="/contact">
          <button className="mt-8 px-6 py-3 bg-[#0b1f3a] text-white rounded">
            Get Free Consultation →
          </button>
        </Link>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-20">
        <Container>

          <h2 className="text-3xl font-bold text-center mb-10">
            Our Services in Delhi
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">

            {[
              { name: "Interior Fitout", link: "/services/commercial-interior-fitout-delhi" },
              { name: "EPC Services", link: "/services/epc-services-delhi" },
              { name: "MEP Services", link: "/services/mep-services-india" },
              { name: "HVAC Services", link: "/services/hvac-services-delhi" },
              { name: "Electrical Services", link: "/services/electrical-contractor-delhi" },
              { name: "Fire Fighting Systems", link: "/services/fire-fighting-services-delhi" },
              { name: "Carpentry Services", link: "/services/carpentry-services-delhi" },
              { name: "Networking Services", link: "/services/networking-services-india" }
            ].map((service, i) => (
              <Link key={i} href={service.link}>
                <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer">
                  {service.name}
                </div>
              </Link>
            ))}

          </div>

        </Container>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 bg-gray-50">
        <Container>

          <h2 className="text-3xl font-bold text-center mb-6">
            Commercial Interior & Engineering Services in Delhi
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            ITSS is a trusted interior design company in Delhi providing complete commercial interior solutions including office interior design, turnkey fitout, EPC execution and MEP services. We specialize in delivering high-quality projects for corporate offices, retail spaces and industrial facilities.
          </p>

        </Container>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20">
        <Container>

          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose ITSS in Delhi?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            {[
              "End-to-End Project Execution",
              "Experienced Team",
              "High Quality Work",
              "On-Time Delivery"
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-100 rounded-xl">
                {item}
              </div>
            ))}

          </div>

        </Container>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-gray-50">
        <Container>

          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="max-w-2xl mx-auto space-y-6">

            <div>
              <h3 className="font-semibold">What services do you provide in Delhi?</h3>
              <p className="text-gray-600">
                We provide interior design, EPC, MEP, HVAC, electrical, fire fighting and carpentry services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Do you handle commercial projects?</h3>
              <p className="text-gray-600">
                Yes, we specialize in office, retail and industrial projects.
              </p>
            </div>

          </div>

        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">
          Looking for Interior Design Services in Delhi?
        </h2>

        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-[#c8a951] text-white rounded">
            Get Free Quote →
          </button>
        </Link>
      </section>

      {/* ================= SCHEMA ================= */}
      <Script
        id="delhi-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ITSS",
            "areaServed": "Delhi",
            "service": [
              "Interior Design",
              "EPC Services",
              "MEP Services",
              "HVAC Services",
              "Electrical Services"
            ]
          })
        }}
      />

    </div>
  );
}
