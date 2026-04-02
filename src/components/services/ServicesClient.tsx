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
            alt="Interior design services Delhi NCR India"
            fill
            priority
            className="object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f3ef]/95 via-[#f5f3ef]/90 to-[#f5f3ef]/95" />
        </div>

        <Container className="relative z-10 text-center">

          <h1 className="text-4xl md:text-6xl font-bold text-black">
            Interior Designers in Delhi NCR
            <span className="block text-[#c8a951] mt-3">
              Office, Commercial & Pan India Interior Services
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We are a Delhi based interior design company providing commercial interior design services across India. 
            From office interiors to turnkey execution, we handle projects nationwide including EPC, MEP, HVAC and electrical solutions.
          </p>

          <Link href="/contact">
            <button className="mt-8 px-8 py-4 bg-black text-white rounded-full hover:bg-[#c8a951] transition">
              Get Free Consultation →
            </button>
          </Link>

        </Container>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-28 bg-[#f8fafc]">
        <Container>

          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold">
              Our Complete Interior Design Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              { title: "Office Interior Design Services", desc: "Modern office interior design and workspace planning solutions.", link: "/services/office-interior-services" },
              { title: "Turnkey Interior Projects", desc: "Complete turnkey interior execution from design to delivery.", link: "/services/Turnkey-interior-projects-delhi" },
              { title: "Workstation Installation Services", desc: "Modular workstation setup and office furniture installation.", link: "/services/workstation-installation-delhi" },
              { title: "EPC Project Services", desc: "Engineering, procurement and construction solutions.", link: "/services/epc-services-delhi" },
              { title: "MEP Services", desc: "Mechanical, electrical and plumbing solutions.", link: "/services/mep-services-india" },
              { title: "Electrical Services", desc: "Complete electrical infrastructure and power distribution systems.", link: "/services/electrical-contractor-delhi" },
              { title: "HVAC Services", desc: "Heating, ventilation and air conditioning systems.", link: "/services/hvac-services-delhi" },
              { title: "Networking Services", desc: "Structured cabling and IT networking solutions.", link: "/services/networking-services-india" },
              { title: "Fire Fighting Services", desc: "Fire safety systems and compliance solutions.", link: "/services/fire-fighting-services-delhi" },
              { title: "Carpentry Services", desc: "Custom woodwork and modular furniture solutions.", link: "/services/carpentry-services-delhi" }
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
                  Explore {service.title} →
                </Link>

              </motion.div>

            ))}

          </div>

        </Container>
      </section>

      {/* ================= PAN INDIA SECTION ================= */}
      <section className="py-20 text-center bg-white">
        <Container>

          <h2 className="text-3xl font-bold">
            Serving Clients Across India
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Based in Delhi NCR, we deliver commercial interior design and turnkey projects across major cities in India including Mumbai, Bangalore, Hyderabad, Pune and more.
          </p>

        </Container>
      </section>

      {/* ================= INTERNAL SEO BLOCK ================= */}
      <section className="py-20 bg-white">
        <Container className="max-w-5xl">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Explore Interior Design Services & Locations
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-[#0b1f3a] font-medium">

            <Link href="/services/office-interior-services">Office Interior Design Services</Link>
            <Link href="/services/Turnkey-interior-projects-delhi">Turnkey Interior Projects</Link>
            <Link href="/services/epc-services-delhi">EPC Services</Link>
            <Link href="/services/mep-services-india">MEP Services</Link>
            <Link href="/services/hvac-services-delhi">HVAC Services</Link>
            <Link href="/services/electrical-contractor-delhi">Electrical Services</Link>
            <Link href="/services/networking-services-india">Networking Services</Link>
            <Link href="/services/fire-fighting-services-delhi">Fire Fighting Services</Link>
            <Link href="/services/carpentry-services-delhi">Carpentry Services</Link>

            <Link href="/office-interior-contractor-delhi">Office Interior Designers in Delhi</Link>
            <Link href="/office-interior-contractor-gurgaon">Office Interior Designers in Gurgaon</Link>
            <Link href="/office-interior-contractor-noida">Office Interior Designers in Noida</Link>

            <Link href="/">Home – Interior Design Company</Link>
            <Link href="/gallery">Our Interior Design Portfolio</Link>

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
                q: "What services do you offer?",
                a: "We provide office interior design, commercial interior design, turnkey interiors, EPC, MEP, HVAC and electrical solutions."
              },
              {
                q: "Do you provide services across India?",
                a: "Yes, we are a Delhi NCR based interior design company delivering projects across India."
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
            Hire Interior Designers for Your Office Today
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
            "serviceType": "Interior Design, EPC, MEP, HVAC, Electrical, Fire Fighting, Carpentry",
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