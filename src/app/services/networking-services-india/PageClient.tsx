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
          IT Networking Services Company in India
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Professional IT networking solutions including structured cabling, server setup and IT infrastructure for offices, commercial buildings and corporate spaces.
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
                src="/services/networking.jpg"
                alt="IT networking services structured cabling office setup"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Structured Cabling & IT Infrastructure Solutions
              </h2>

              <p className="mt-4 text-gray-600">
                ITSS provides complete IT networking solutions including structured cabling, server installation, data networking and communication systems for offices and commercial spaces.
              </p>

              <p className="mt-4 text-gray-600">
                Our networking solutions ensure seamless connectivity, high performance and scalable infrastructure for modern businesses.
              </p>

            </div>

          </div>
        </Container>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-gray-50">
        <Container>

          <h2 className="text-3xl font-bold text-center mb-10">
            Our Networking Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">

            {[
              "Structured Cabling Solutions",
              "Server Installation & Setup",
              "LAN & WAN Networking",
              "Data Cabling Services",
              "Network Design & Planning",
              "IT Infrastructure Setup"
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
            Why Choose ITSS for Networking Services?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            {[
              "Reliable Network Infrastructure",
              "Experienced IT Professionals",
              "Scalable Solutions",
              "High-Speed Connectivity"
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
            Networking Services Across India
          </h2>

          <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide IT networking services in Delhi, Noida, Gurgaon, Mumbai and across India for offices, commercial buildings and corporate setups.
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
              <h3 className="font-semibold">What networking services do you provide?</h3>
              <p className="text-gray-600">
                We provide structured cabling, server setup, network design and IT infrastructure solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Do you provide networking services in India?</h3>
              <p className="text-gray-600">
                Yes, we provide services across India including Delhi, Noida, Gurgaon and Mumbai.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Do you handle office IT setup?</h3>
              <p className="text-gray-600">
                Yes, we specialize in complete office networking and IT infrastructure setup.
              </p>
            </div>

          </div>

        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-3xl font-bold">
          Looking for IT Networking Services?
        </h2>

        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-[#c8a951] text-white rounded">
            Get Free Quote →
          </button>
        </Link>
      </section>

      {/* ================= SCHEMA ================= */}
      <Script
        id="networking-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "IT Networking Services",
            "areaServed": "India",
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
