"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Container } from "@/components/ui/Container";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <MainLayout>

      {/* ================= HERO ================= */}
      <section className="relative py-36 overflow-hidden">

        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-office-hero.png"
            alt="EPC MEP HVAC Electrical Interior Services India"
            fill
            priority
            className="object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f3ef]/95 via-[#f5f3ef]/90 to-[#f5f3ef]/95" />
        </div>

        <Container className="relative z-10 text-center">

          <h1 className="text-4xl md:text-6xl font-bold text-black">
            EPC, MEP, HVAC, Electrical & Interior Services
            <span className="block text-[#c8a951] mt-3">
              Delhi NCR & Pan India
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            ITSS provides complete engineering and interior solutions including EPC,
            MEP, HVAC, electrical, fire fighting, carpentry and commercial fitout services.
          </p>

        </Container>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-28 bg-[#f8fafc]">
        <Container>

          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold">
              Our Complete Service Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              {
                title: "EPC SERVICES",
                desc: "Engineering, Procurement and Construction solutions.",
                link: "/services/epc-services-delhi",
              },
              {
                title: "MEP SERVICES",
                desc: "Mechanical, Electrical and Plumbing solutions.",
                link: "/services/mep-services-india",
              },
              {
                title: "ELECTRICAL SERVICES",
                desc: "Power distribution and electrical infrastructure.",
                link: "/services/electrical-contractor-delhi",
              },
              {
                title: "HVAC SERVICES",
                desc: "Heating, ventilation and air conditioning systems.",
                link: "/services/hvac-services-delhi",
              },
              {
                title: "NETWORKING SERVICES",
                desc: "Structured cabling and IT networking solutions.",
                link: "/services/networking-services-india",
              },
              {
                title: "FIRE FIGHTING SERVICES",
                desc: "Fire safety systems, sprinklers and compliance solutions.",
                link: "/services/fire-fighting-services-delhi",
              },
              {
                title: "CARPENTRY SERVICES",
                desc: "Workstation installation, modular furniture and woodwork.",
                link: "/services/carpentry-services-delhi",
              },
              {
                title: "INTERIOR FITOUT SERVICES",
                desc: "Commercial interior, turnkey projects and office fitouts.",
                link: "/services/commercial-interior-fitout-delhi",
              }
            ].map((service, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
              >

                <Link href={service.link}>
                  <h3 className="text-2xl font-semibold text-[#0b1f3a] mb-3 hover:text-[#c8a951]">
                    {service.title}
                  </h3>
                </Link>

                <p className="text-gray-600">{service.desc}</p>

                <Link href={service.link} className="inline-block mt-4 text-[#c8a951] font-medium">
                  Learn More →
                </Link>

              </motion.div>

            ))}

          </div>

        </Container>
      </section>

      {/* ================= INTERNAL SEO BLOCK ================= */}
      <section className="py-20 bg-white">
        <Container className="max-w-5xl">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Explore Our Services
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-blue-600">

            <Link href="/services/epc-services-delhi">EPC Services Delhi NCR</Link>
            <Link href="/services/mep-services-india">MEP Services India</Link>
            <Link href="/services/electrical-contractor-delhi">Electrical Contractor Delhi</Link>
            <Link href="/services/hvac-services-delhi">HVAC Services Delhi</Link>
            <Link href="/services/networking-services-india">Networking Services</Link>
            <Link href="/services/fire-fighting-services-delhi">Fire Fighting Services</Link>
            <Link href="/services/carpentry-services-delhi">Carpentry Services</Link>
            <Link href="/services/commercial-interior-fitout-delhi">Interior Fitout Services</Link>

          </div>

        </Container>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-24 bg-[#f5f3ef]">
        <Container className="max-w-4xl">

          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            {[
              {
                q: "What services does ITSS provide?",
                a: "ITSS provides EPC, MEP, HVAC, electrical, fire fighting, carpentry and interior fitout services."
              },
              {
                q: "Do you provide services across India?",
                a: "Yes, ITSS provides services across Delhi NCR and major cities in India."
              },
              {
                q: "Do you handle turnkey interior projects?",
                a: "Yes, we provide complete turnkey interior and fitout solutions."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}

          </div>

        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center">
        <Container>

          <h2 className="text-4xl font-bold mb-6">
            Need Complete Engineering & Interior Solutions?
          </h2>

          <Link href="/contact">
            <button className="px-10 py-5 bg-black text-white rounded-full hover:bg-[#c8a951]">
              Get Free Consultation →
            </button>
          </Link>

        </Container>
      </section>

      {/* ================= SCHEMA ================= */}
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "EPC, MEP, HVAC, Electrical, Fire Fighting, Carpentry, Interior Fitout",
            "provider": {
              "@type": "Organization",
              "name": "ITSS"
            }
          })
        }}
      />

    </MainLayout>
  );
}
