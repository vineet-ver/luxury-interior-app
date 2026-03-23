"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Container } from "@/components/ui/Container";

export default function PageClient() {
  return (
    <div>

      {/* HERO */}
      <section className="py-24 bg-gray-50 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0b1f3a]">
          Commercial Interior Design Company in Delhi NCR
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          We provide office interior design, turnkey fitout and workspace solutions for corporate offices, retail and commercial spaces across Delhi, Noida and Gurgaon.
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
          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>
              <Image
                src="/services/interior-fitout.jpg"
                alt="Commercial office interior design company in Delhi NCR"
                width={500}
                height={400}
                className="rounded-xl"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Office Interior Design & Turnkey Fitout Solutions
              </h2>

              <p className="mt-4 text-gray-600">
                ITSS provides complete commercial interior design and turnkey fitout services including space planning, furniture installation, electrical, HVAC and MEP execution.
              </p>

            </div>

          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <Container>

          <h2 className="text-3xl font-bold text-center mb-10">
            Our Interior Fitout Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">

            {[
              "Office Interior Design",
              "Turnkey Fitout Projects",
              "Workspace Planning",
              "Furniture & Workstation Setup",
              "MEP & Electrical Works",
              "HVAC & Ventilation"
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow">
                {item}
              </div>
            ))}

          </div>

        </Container>
      </section>

      {/* GEO */}
      <section className="py-20">
        <Container>

          <h2 className="text-3xl font-bold text-center">
            Interior Design Services Across Delhi NCR
          </h2>

          <p className="text-center mt-4 text-gray-600">
            We provide commercial interior design services in Delhi, Noida, Gurgaon, Ghaziabad and across India.
          </p>

        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <Container>

          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="max-w-2xl mx-auto space-y-6">

            <div>
              <h3 className="font-semibold">
                What services does your interior company provide?
              </h3>
              <p className="text-gray-600">
                We provide commercial interior design, turnkey fitout, workspace planning and execution services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Do you provide services in Delhi NCR?
              </h3>
              <p className="text-gray-600">
                Yes, we serve Delhi, Noida, Gurgaon and across India.
              </p>
            </div>

          </div>

        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">
          Looking for Interior Fitout Services?
        </h2>

        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-[#c8a951] text-white rounded">
            Get Free Quote →
          </button>
        </Link>
      </section>

      {/* SCHEMA */}
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Commercial Interior Design",
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
