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
          Workstation Installation Services in Delhi NCR
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Professional modular workstation installation, office setup and furniture installation services for modern corporate spaces across Delhi, Noida and Gurgaon.
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
                src="/service_image/workstation.jpg"
                alt="Modular workstation installation in Delhi NCR office setup"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Modular Workstation & Office Setup Solutions
              </h2>

              <p className="mt-4 text-gray-600">
                ITSS provides end-to-end workstation installation services including modular workstation setup, office furniture installation and complete workspace solutions.
              </p>

              <p className="mt-4 text-gray-600">
                Our team ensures efficient space planning, ergonomic designs and seamless installation for corporate offices, IT companies and commercial workspaces.
              </p>

            </div>

          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <Container>

          <h2 className="text-3xl font-bold text-center mb-10">
            Our Workstation Installation Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">

            {[
              "Modular Workstation Setup",
              "Office Furniture Installation",
              "Corporate Office Setup",
              "IT Workstation Installation",
              "Cubicle & Partition Installation",
              "Office Desk & Seating Setup",
              "Conference Room Setup",
              "Workspace Reconfiguration"
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
            Why Choose Our Workstation Installation Services?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            {[
              "Expert Installation Team",
              "Efficient Space Planning",
              "Modern & Ergonomic Designs",
              "On-Time Project Delivery"
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-100 rounded-xl">
                {item}
              </div>
            ))}

          </div>

        </Container>
      </section>

      {/* SERVICE AREAS */}
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
            Workstation Installation Across Delhi NCR
          </h2>

          <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide workstation installation services in Delhi, Noida, Gurgaon, Ghaziabad and across India for offices, IT companies and commercial projects.
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

            <Link href="/services/networking-services-india" className="text-[#c8a951]">
              Networking Services
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
              <h3 className="font-semibold">What is workstation installation?</h3>
              <p className="text-gray-600">It includes setup of modular desks, partitions, seating and office layout planning.</p>
            </div>

            <div>
              <h3 className="font-semibold">Do you provide services in Delhi NCR?</h3>
              <p className="text-gray-600">Yes, we cover Delhi, Noida, Gurgaon and nearby regions.</p>
            </div>

            <div>
              <h3 className="font-semibold">Do you handle IT office setups?</h3>
              <p className="text-gray-600">Yes, we specialize in IT and corporate workstation installations.</p>
            </div>

          </div>

        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-3xl font-bold">
          Need Workstation Installation Services?
        </h2>

        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-[#c8a951] text-white rounded">
            Get Free Quote →
          </button>
        </Link>
      </section>

      {/* SCHEMA */}
      <Script
        id="workstation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Workstation Installation Services",
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