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
          Carpentry Services in Delhi NCR
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Expert carpentry services for office furniture, modular workstation installation, wooden partitions and commercial interiors across Delhi, Noida and Gurgaon.
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
                src="/service_image/carpentry.jpg"
                alt="Office carpentry services in Delhi NCR furniture and workstation installation"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Commercial Carpentry & Furniture Solutions
              </h2>

              <p className="mt-4 text-gray-600">
                ITSS offers high-quality carpentry services including office furniture installation, modular workstation setup and customized wooden work for commercial interiors.
              </p>

              <p className="mt-4 text-gray-600">
                Our carpentry solutions are designed for durability, functionality and modern office aesthetics, ensuring a perfect fit for corporate and commercial environments.
              </p>

            </div>

          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <Container>

          <h2 className="text-3xl font-bold text-center mb-10">
            Our Carpentry Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">

            {[
              "Office Furniture Installation",
              "Modular Workstation Setup",
              "Wooden Partition Work",
              "Custom Furniture Design",
              "Commercial Carpentry Work",
              "Office Storage & Cabinets",
              "Reception Desk & Panels",
              "Interior Wood Finishing"
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
                {item}
              </div>
            ))}

          </div>

        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20">
        <Container>

          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Our Carpentry Services?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            {[
              "High-Quality Materials",
              "Experienced Craftsmanship",
              "Custom Design Solutions",
              "On-Time Project Delivery"
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

      {/* GEO */}
      <section className="py-20 bg-gray-50">
        <Container>

          <h2 className="text-3xl font-bold text-center">
            Carpentry Services Across Delhi NCR
          </h2>

          <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide carpentry services in Delhi, Noida, Gurgaon, Ghaziabad and across India for offices, retail stores and commercial projects.
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
              Interior Fitout
            </Link>

            <Link href="/services/electrical-contractor-delhi" className="text-[#c8a951]">
              Electrical Services
            </Link>

            <Link href="/services/mep-services-india" className="text-[#c8a951]">
              MEP Services
            </Link>

          </div>

        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <Container>

          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="max-w-2xl mx-auto space-y-6">

            <div>
              <h3 className="font-semibold">What carpentry services do you offer?</h3>
              <p className="text-gray-600">We offer office furniture, workstation installation, wooden partitions and commercial carpentry work.</p>
            </div>

            <div>
              <h3 className="font-semibold">Do you provide services in Delhi NCR?</h3>
              <p className="text-gray-600">Yes, we provide carpentry services in Delhi, Noida and Gurgaon.</p>
            </div>

            <div>
              <h3 className="font-semibold">Do you handle commercial projects?</h3>
              <p className="text-gray-600">Yes, we specialize in office and commercial carpentry solutions.</p>
            </div>

          </div>

        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-3xl font-bold">
          Need Professional Carpentry Services?
        </h2>

        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-[#c8a951] text-white rounded">
            Get Free Quote →
          </button>
        </Link>
      </section>

      {/* SCHEMA */}
      <Script
        id="carpentry-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Carpentry Services",
            "areaServed": "Delhi NCR",
            "provider": {
              "@type": "Organization",
              "name": "ITSS"
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