"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { Container } from "@/components/ui/Container";
import { siteData } from "@/content/siteData";
import { motion } from "framer-motion";
import { Building2, Award, Handshake, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* ================= CLIENT LOGO COMPONENT ================= */

const ClientLogo = ({ name, logo }: { name: string; logo?: string }) => (
  <div className="w-full h-40 flex items-center justify-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">

    {logo ? (
      <div className="relative w-full h-full">
        <Image
          src={logo}
          alt={`${name} Logo`}
          fill
          sizes="(max-width:768px) 50vw, 25vw"
          className="object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    ) : (
      <h3 className="text-lg font-semibold text-gray-600 text-center">
        {name}
      </h3>
    )}

  </div>
);

/* ================= MAIN PAGE ================= */

export default function ClientsPage() {
  return (
    <MainLayout>
      <div className="relative min-h-screen pt-28 pb-24 bg-[#f9f7f3] overflow-hidden">

        {/* TOP SOFT GLOW */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-yellow-200/30 rounded-full blur-[120px] pointer-events-none"></div>

        {/* BOTTOM SOFT GLOW */}
        <div className="absolute bottom-[-250px] right-[-200px] w-[800px] h-[800px] bg-yellow-100/40 rounded-full blur-[150px] pointer-events-none"></div>

        <Container>

          {/* ================= HERO ================= */}

          <div className="text-center max-w-5xl mx-auto mb-24 relative z-10">

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-5 py-2 mb-6 text-sm font-semibold tracking-wide text-yellow-700 bg-yellow-100 rounded-full shadow-sm"
            >
              Trusted by 50+ Enterprise Brands Across India
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight"
            >
              Enterprise Clients Who Trust ITSS for
              <span className="block bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 bg-clip-text text-transparent mt-3">
                Commercial Interior & Infrastructure Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mt-6"
            >
              From Fortune 500 enterprises to government infrastructure projects,
              ITSS delivers turnkey commercial interiors, corporate fit-outs
              and enterprise execution solutions across India.
            </motion.p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">

              <Link
                href="/portfolio"
                className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                View Case Studies
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 border border-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300"
              >
                Get Enterprise Consultation
              </Link>

            </div>

          </div>


          {/* ================= STATS ================= */}

          <div className="grid md:grid-cols-3 gap-10 mb-28 relative z-10">

            {[
              { icon: Building2, value: "50+", label: "Enterprise Clients" },
              { icon: Handshake, value: "12+", label: "Years of Trust" },
              { icon: Award, value: "100%", label: "Project Success Rate" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white p-12 rounded-3xl border border-gray-200 shadow-sm text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-2xl mb-6 text-yellow-600">
                  <stat.icon className="w-8 h-8" />
                </div>

                <h3 className="text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>

                <p className="text-gray-500 text-lg">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>


          {/* ================= CLIENTS GRID ================= */}

          <div className="mb-28 relative z-10">

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
              Our Esteemed Clients
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {siteData.clients.map((client) => (
                <ClientLogo
                  key={client.id}
                  name={client.name}
                  logo={client.logo}
                />
              ))}
            </div>

          </div>


          {/* ================= INDUSTRIES ================= */}

          <div className="mb-28 relative z-10">

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
              Industries We Serve
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

              {[
                "Corporate Offices",
                "Retail & E-Commerce",
                "Manufacturing Units",
                "Logistics & Warehousing",
                "Healthcare Facilities",
                "Technology Companies",
                "Financial Institutions",
                "Government Projects",
              ].map((industry, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <p className="font-medium text-gray-800">
                    {industry}
                  </p>
                </div>
              ))}

            </div>

          </div>

{/* ================= SEO CONTENT ================= */}

<section className="max-w-5xl mx-auto mb-28 text-gray-700 leading-relaxed text-lg relative z-10">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
    Trusted Commercial Interior Contractor in India
  </h2>

  <p className="mb-6">
    ITSS is a leading commercial interior contractor in India,
    delivering high-performance workspace environments for enterprise
    brands, multinational corporations, and government organizations.
    Our clients trust us for precision-driven execution and premium
    turnkey interior solutions.
  </p>

  <p className="mb-6">
    With extensive experience in corporate office fit-outs, we create
    intelligent workspaces that enhance productivity, reflect brand
    identity, and support long-term business growth across India.
  </p>

  <p>
    Beyond offices, ITSS executes large-scale industrial interior projects,
    manufacturing facilities, logistics hubs, and mission-critical
    infrastructure environments with precision and quality assurance.
  </p>
</section>

          {/* ================= CTA ================= */}

          <div className="relative z-10 rounded-[50px] p-16 text-center bg-white shadow-lg border border-gray-200">

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to Join the Elite?
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              Experience the difference of working with a partner who values
              your infrastructure and commercial spaces as much as you do.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-yellow-600 text-white rounded-full font-bold hover:bg-yellow-700 transition-all duration-300 shadow-md"
            >
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </Link>

          </div>

        </Container>
      </div>
    </MainLayout>
  );
}
