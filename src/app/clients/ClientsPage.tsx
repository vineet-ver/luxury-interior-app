
"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { Container } from "@/components/ui/Container";
import { siteData } from "@/content/siteData";
import { motion } from "framer-motion";
import { Building2, Award, Handshake, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* ================= CLIENT LOGO COMPONENT ================= */

const ClientLogo = ({
  name,
  logo,
}: {
  name: string;
  logo?: string;
}) => (
  <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    {logo ? (
      <div className="relative h-full w-full">
        <Image
          src={logo}
          alt={`${name} Logo`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    ) : (
      <h3 className="text-center text-lg font-semibold text-gray-600">
        {name}
      </h3>
    )}
  </div>
);

/* ================= MAIN PAGE ================= */

export default function ClientsPage() {
  return (
    <MainLayout>
      <div className="relative min-h-screen overflow-hidden bg-[#f9f7f3] pb-24 pt-28">
        {/* TOP SOFT GLOW */}
        <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-yellow-200/30 blur-[120px]" />

        {/* BOTTOM SOFT GLOW */}
        <div className="pointer-events-none absolute bottom-[-250px] right-[-200px] h-[800px] w-[800px] rounded-full bg-yellow-100/40 blur-[150px]" />

        <Container>
          {/* ================= HERO ================= */}

          <div className="relative z-10 mx-auto mb-24 max-w-5xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-block rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold tracking-wide text-yellow-700 shadow-sm"
            >
              Trusted by 50+ Enterprise Brands Across India
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
            >
              Enterprise Clients Who Trust ITSS for
              <span className="mt-3 block bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                Commercial Interior & Infrastructure Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl"
            >
              From Fortune 500 enterprises to government infrastructure
              projects, ITSS delivers turnkey commercial interiors, corporate
              fit-outs and enterprise execution solutions across India.
            </motion.p>

            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                href="/portfolio"
                className="rounded-full bg-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-yellow-500 hover:text-black"
              >
                View Case Studies
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-black px-8 py-4 font-semibold transition-all duration-300 hover:bg-black hover:text-white"
              >
                Get Enterprise Consultation
              </Link>
            </div>
          </div>

          {/* ================= STATS ================= */}

          <div className="relative z-10 mb-28 grid gap-10 md:grid-cols-3">
            {[
              { icon: Building2, value: "50+", label: "Enterprise Clients" },
              { icon: Handshake, value: "10+", label: "Years of Trust" },
              { icon: Award, value: "100%", label: "Project Success Rate" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-gray-200 bg-white p-12 text-center shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600">
                  <stat.icon className="h-8 w-8" />
                </div>

                <h3 className="mb-2 text-5xl font-bold text-gray-900">
                  {stat.value}
                </h3>

                <p className="text-lg text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* ================= CLIENTS GRID ================= */}

          <section className="relative z-10 mb-28">
            <h2 className="mb-14 text-center text-3xl font-bold md:text-4xl">
              Our Esteemed Clients
            </h2>

            <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
              {siteData.clients.map((client) => (
                <ClientLogo
                  key={client.id}
                  name={client.name}
                  logo={client.logo}
                />
              ))}
            </div>
          </section>

          {/* ================= INDUSTRIES ================= */}

          <section className="relative z-10 mb-28">
            <h2 className="mb-14 text-center text-3xl font-bold md:text-4xl">
              Industries We Serve
            </h2>

            <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
              {[
                "Corporate Offices",
                "Retail & E-Commerce",
                "Manufacturing Units",
                "Logistics & Warehousing",
                "Healthcare Facilities",
                "Technology Companies",
                "Financial Institutions",
                "Government Projects",
              ].map((industry) => (
                <div
                  key={industry}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <p className="font-medium text-gray-800">{industry}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ================= SEO CONTENT ================= */}

          <section className="relative z-10 mx-auto mb-28 max-w-5xl text-lg leading-relaxed text-gray-700">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
              Commercial Interior Contractor in India
            </h2>

            <p className="mb-6">
              ITSS is a trusted commercial interior contractor in India
              delivering turnkey interior solutions for corporate offices,
              enterprise spaces, and government organizations. Our expertise
              includes complete office fit-outs, infrastructure execution,
              civil works, and industrial interior projects.
            </p>

            <p className="mb-6">
              With over a decade of experience, we specialize in corporate
              office fit-outs, large-scale commercial developments, and turnkey
              interior execution across India. Our structured approach ensures
              design precision, compliance standards, and on-time project
              delivery.
            </p>

            <p>
              From enterprise headquarters to industrial facilities and retail
              environments, ITSS provides scalable and performance-driven
              interior solutions tailored to business growth and operational
              efficiency.
            </p>
          </section>

          {/* ================= CTA ================= */}

          <section className="relative z-10 rounded-[50px] border border-gray-200 bg-white p-16 text-center shadow-lg">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-5xl">
              Ready to Join the Elite?
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
              Experience the difference of working with a partner who values
              your infrastructure and commercial spaces as much as you do.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-600 px-10 py-4 font-bold text-white shadow-md transition-all duration-300 hover:bg-yellow-700"
            >
              Partner With Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </section>
        </Container>
      </div>
    </MainLayout>
  );
}
