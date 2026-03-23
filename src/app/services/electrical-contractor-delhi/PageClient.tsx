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
          Electrical Contractor in Delhi NCR
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Professional electrical services for commercial and industrial projects including installation, wiring, power distribution and maintenance across Delhi, Noida and Gurgaon.
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
          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>
              <Image
                src="/services/electrical.jpg"
                alt="Electrical contractor in Delhi NCR commercial installation"
                width={500}
                height={400}
                className="rounded-xl"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Commercial Electrical Solutions
              </h2>

              <p className="mt-4 text-gray-600">
                ITSS provides complete electrical solutions including wiring, power distribution, lighting systems, panel installation and maintenance services for offices and commercial buildings.
              </p>

              <p className="mt-4 text-gray-600">
                Our expert team ensures safety, efficiency and compliance with industry standards for all electrical projects.
              </p>

            </div>

          </div>
        </Container>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-gray-50">
        <Container>

          <h2 className="text-3xl font-bold text-center mb-10">
            Our Electrical Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">

            {[
              "Electrical Installation",
              "Power Distribution Systems",
              "Commercial Wiring Solutions",
              "Lighting Installation",
              "Panel Installation & Maintenance",
              "Electrical Repair & Maintenance"
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
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
      <section className="py-20">
        <Container>

          <h2 className="text-3xl font-bold text-center">
            Electrical Services Across Delhi NCR
          </h2>

          <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide electrical contractor services in Delhi, Noida, Gurgaon, Ghaziabad and across India for offices, commercial buildings and industrial spaces.
          </p>

        </Container>
      </section>

      {/* ================= INTERNAL LINKS ================= */}
      <section className="py-16 bg-gray-50 text-center">
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
              <h3 className="font-semibold">
                What electrical services do you provide?
              </h3>
              <p className="text-gray-600">
                We provide installation, wiring, power systems and maintenance services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Do you provide services in Delhi NCR?
              </h3>
              <p className="text-gray-600">
                Yes, we provide services in Delhi, Noida and Gurgaon.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Do you handle commercial electrical projects?
              </h3>
              <p className="text-gray-600">
                Yes, we specialize in commercial and industrial electrical solutions.
              </p>
            </div>

          </div>

        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">
          Looking for Electrical Contractor Services?
        </h2>

        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-[#c8a951] text-white rounded">
            Get Free Quote →
          </button>
        </Link>
      </section>

      {/* ================= SCHEMA ================= */}
      <Script
        id="electrical-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Electrical Services",
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
