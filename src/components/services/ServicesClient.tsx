"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Container } from "@/components/ui/Container";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Paintbrush, KeyRound, LayoutGrid, HardHat, Sofa } from "lucide-react";

export default function ServicesPage() {
  return (
    <MainLayout>

      {/* ================= HERO ================= */}

      <section className="relative py-36 overflow-hidden">

        <div className="absolute inset-0 z-0">

          <Image
            src="/luxury-office-hero.png"
            alt="Commercial interior contractor project by ITSS in India"
            fill
            priority
            className="object-cover scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f3ef]/95 via-[#f5f3ef]/90 to-[#f5f3ef]/95" />

        </div>

        <Container className="relative z-10 text-center">

          {/* Breadcrumb */}

          <div className="text-sm text-black/60 mb-6">

            <Link href="/">Home</Link> / Services

          </div>

          <div className="flex items-center justify-center gap-4 mb-6">

            <div className="h-[1px] w-16 bg-[#c8a951]" />

            <span className="text-xs tracking-[0.3em] uppercase text-[#c8a951]">
              Our Commercial Interior Services
            </span>

            <div className="h-[1px] w-16 bg-[#c8a951]" />

          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-black leading-tight max-w-4xl mx-auto">

            Commercial Interior Contractor & Turnkey Office Interior Solutions

            <span className="block text-[#c8a951] mt-3">
              Across India
            </span>

          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-black/70 text-lg leading-relaxed">

            ITSS is a leading <strong>commercial interior contractor in India</strong>
            delivering premium <strong>turnkey office interior projects</strong>,
            corporate workspace planning and commercial interior execution
            services across India including Delhi NCR, Mumbai and major
            business cities.

          </p>

          <div className="mt-10">

            <Link
              href="/contact"
              className="px-8 py-4 bg-black text-white rounded-full hover:bg-[#c8a951] transition duration-300 inline-block"
            >
              Get Free Consultation →
            </Link>

          </div>

        </Container>

      </section>


      {/* ================= SERVICES ================= */}

      <section className="py-24 bg-white">

        <Container>

          <div className="text-center mb-16">

            <h2 className="font-display text-4xl md:text-5xl font-bold text-black mt-4">

              Complete Commercial Interior Services in India

            </h2>

            <p className="mt-6 text-black/60 max-w-3xl mx-auto leading-relaxed">

              End-to-end solutions for corporate workspaces including
              interior design, turnkey project execution, civil works,
              space planning, and office furniture maintenance.

            </p>

          </div>


          <div className="space-y-12">

            {[
              {
                number: "01",
                title: "Commercial Interior Design & Decoration Services",
                desc: "Professional commercial interior design balancing aesthetics, productivity, and modern workspace functionality.",
                icon: Paintbrush,
                link: "/services/commercial-interior-contractor"
              },
              {
                number: "02",
                title: "Turnkey Office Interior Project Execution",
                desc: "Complete turnkey project execution including design, civil works, MEP services, and final project handover.",
                icon: KeyRound,
                link: "/services/turnkey-interior-contractor"
              },
              {
                number: "03",
                title: "Office Space Planning & Layout Design",
                desc: "Strategic office layout planning focused on optimized space utilization and improved workflow efficiency.",
                icon: LayoutGrid,
                link: "/services/office-interior-contractor"
              },
              {
                number: "04",
                title: "Commercial Civil & Interior Contracting",
                desc: "Full-scale commercial civil works including partitions, ceilings, flooring, electrical, HVAC, and MEP execution.",
                icon: HardHat,
                link: "/services/commercial-interior-contractor"
              },
              {
                number: "05",
                title: "Office Furniture Repair & Maintenance",
                desc: "Professional furniture refurbishment including chair repair, sofa restoration, and maintenance solutions.",
                icon: Sofa,
                link: "/services/office-interior-contractor"
              }
            ].map((service, index) => (

              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group rounded-[40px] p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 bg-[#f9f9f9] hover:bg-black hover:text-white transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              >

                <div className="flex items-center gap-6 min-w-[160px]">

                  <span className="text-4xl font-bold text-black/20 group-hover:text-[#c8a951]">
                    {service.number}
                  </span>

                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#f1eee8] group-hover:bg-white/10 transition">
                    <service.icon className="w-8 h-8 text-black group-hover:text-[#c8a951]" />
                  </div>

                </div>

                <div className="flex-1">

                  <Link href={service.link}>

                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 hover:underline">

                      {service.title}

                    </h3>

                  </Link>

                  <p className="text-black/60 group-hover:text-white/70 leading-relaxed">

                    {service.desc}

                  </p>

                </div>

              </motion.article>

            ))}

          </div>

        </Container>

      </section>


      {/* ================= FAQ ================= */}

      <section className="py-24 bg-[#f5f3ef]">

        <Container className="max-w-4xl text-center">

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">

            Frequently Asked Questions

          </h2>

          <div className="space-y-8 text-left">

            <div className="bg-white p-6 rounded-2xl shadow">

              <h3 className="font-semibold mb-2">
                What is a turnkey office interior project?
              </h3>

              <p className="text-black/60">
                A turnkey office interior project covers complete design,
                civil works, MEP execution, interior finishing, and final handover.
              </p>

            </div>

            <div className="bg-white p-6 rounded-2xl shadow">

              <h3 className="font-semibold mb-2">
                Do you provide commercial interior services across India?
              </h3>

              <p className="text-black/60">
                Yes, ITSS provides pan-India commercial interior contracting services.
              </p>

            </div>

            <div className="bg-white p-6 rounded-2xl shadow">

              <h3 className="font-semibold mb-2">
                Why choose ITSS as your commercial interior contractor?
              </h3>

              <p className="text-black/60">
                We combine design expertise, engineering precision and seamless project execution.
              </p>

            </div>

          </div>

        </Container>

      </section>


      {/* ================= SEO CONTENT ================= */}

      <section className="max-w-5xl mx-auto mb-28 text-gray-700 leading-relaxed text-lg relative z-10">

        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Commercial Interior Contractor in India
        </h2>

        <p className="mb-6">
          ITSS is a trusted commercial interior contractor in India delivering
          turnkey interior solutions for corporate offices, enterprise campuses,
          retail environments and industrial facilities.
        </p>

        <p className="mb-6">
          We specialize in corporate office fit-outs, workspace transformation,
          electrical infrastructure, HVAC integration and smart building systems.
        </p>

        <p>
          Our integrated approach ensures seamless execution from design planning
          to final project handover across India.
        </p>

      </section>


      {/* ================= CTA ================= */}

      <section className="py-24 bg-white text-center">

        <Container>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">

            Start Your Commercial Interior Project Today

          </h2>

          <p className="text-black/60 mb-8">

            Contact ITSS — Leading Commercial Interior Designers in India

          </p>

          <Link href="/contact">

            <button className="px-10 py-5 bg-black text-white rounded-full hover:bg-[#c8a951] transition duration-500">

              Get a Free Consultation →

            </button>

          </Link>

        </Container>

      </section>


      {/* FAQ Schema */}

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a turnkey office interior project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A turnkey office interior project includes design, civil work, MEP execution and final handover."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide commercial interior services across India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, ITSS provides commercial interior contracting services across India."
                }
              }
            ]
          })
        }}
      />

    </MainLayout>
  );
}
