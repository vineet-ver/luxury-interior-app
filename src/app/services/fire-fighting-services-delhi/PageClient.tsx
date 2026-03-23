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
          Fire Fighting System Contractor in Delhi NCR
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Professional fire safety services including fire alarm systems, sprinkler systems and fire protection solutions for commercial and industrial projects across Delhi, Noida and Gurgaon.
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
                src="/services/fire-fighting.jpg"
                alt="Fire fighting system contractor in Delhi NCR sprinkler and alarm installation"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Fire Safety & Protection Solutions
              </h2>

              <p className="mt-4 text-gray-600">
                ITSS provides complete fire fighting solutions including fire alarm systems, sprinkler systems, fire extinguishers and fire safety compliance services.
              </p>

              <p className="mt-4 text-gray-600">
                Our solutions ensure maximum safety, regulatory compliance and protection for commercial buildings and industrial facilities.
              </p>

            </div>

          </div>
        </Container>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-gray-50">
        <Container>

          <h2 className="text-3xl font-bold text-center mb-10">
            Our Fire Fighting Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">

            {[
              "Fire Alarm System Installation",
              "Sprinkler System Installation",
              "Fire Extinguishers Setup",
              "Fire Hydrant Systems",
              "Fire Safety Compliance",
              "Fire Protection System Maintenance"
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
            Why Choose ITSS for Fire Safety Services?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            {[
              "Certified Safety Standards",
              "Expert Installation Team",
              "Regulatory Compliance",
              "Reliable Fire Protection Systems"
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
            Fire Fighting Services Across Delhi NCR & India
          </h2>

          <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide fire safety services in Delhi, Noida, Gurgaon, Ghaziabad and across India for offices, commercial buildings and industrial projects.
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
              <h3 className="font-semibold">What fire fighting services do you provide?</h3>
              <p className="text-gray-600">
                We provide fire alarm systems, sprinkler systems, hydrants and fire safety compliance solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Do you provide services in Delhi NCR?</h3>
              <p className="text-gray-600">
                Yes, we provide fire safety services in Delhi, Noida and Gurgaon.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Do you handle commercial projects?</h3>
              <p className="text-gray-600">
                Yes, we specialize in commercial and industrial fire protection systems.
              </p>
            </div>

          </div>

        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-3xl font-bold">
          Need Fire Safety System Installation?
        </h2>

        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-[#c8a951] text-white rounded">
            Get Free Quote →
          </button>
        </Link>
      </section>

      {/* ================= SCHEMA ================= */}
      <Script
        id="fire-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Fire Fighting Services",
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
