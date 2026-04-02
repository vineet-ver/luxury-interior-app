"use client";

import Link from "next/link";
import Script from "next/script";
import { Container } from "@/components/ui/Container";
import { MainLayout } from "@/components/layout/MainLayout";
import { CheckCircle, ArrowRight, Star } from "lucide-react";

export default function PageClient() {
  return (
    <MainLayout>

      <section className="bg-white">

        {/* HERO */}
        <section className="py-28 bg-gradient-to-br from-gray-50 to-white text-center">
          <Container>

            <h1 className="text-5xl font-bold text-gray-900">
              Interior Designers in Mumbai
            </h1>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              We provide premium office interior design, turnkey fitouts, EPC, MEP & HVAC solutions for corporate spaces in Mumbai.
            </p>

            <Link href="/contact">
              <button className="mt-8 px-8 py-4 bg-black text-white rounded-full flex items-center gap-2 mx-auto hover:scale-105 transition">
                Get Free Consultation <ArrowRight size={18} />
              </button>
            </Link>

            <div className="mt-12 bg-white border rounded-2xl p-6 shadow max-w-2xl mx-auto">
              <p className="text-gray-700">
                10+ Years Experience • 500+ Projects • Corporate Experts
              </p>
            </div>

          </Container>
        </section>

        {/* STATS */}
        <section className="py-16">
          <Container>
            <div className="grid md:grid-cols-4 gap-6 text-center">

              {[
                { num: "500+", label: "Projects Completed" },
                { num: "10+", label: "Years Experience" },
                { num: "50+", label: "Corporate Clients" },
                { num: "100%", label: "Client Satisfaction" },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-2xl">
                  <h3 className="text-2xl font-bold">{item.num}</h3>
                  <p className="text-gray-600">{item.label}</p>
                </div>
              ))}

            </div>
          </Container>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-gray-50">
          <Container>
            <h2 className="text-3xl text-center font-bold mb-12">
              Our Services in Mumbai
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {[
                "Interior Fitout",
                "EPC Services",
                "MEP Solutions",
                "HVAC Systems",
                "Electrical Work",
                "Fire Safety"
              ].map((s, i) => (
                <div
                  key={i}
                  className="p-8 bg-white rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition text-center"
                >
                  {s}
                </div>
              ))}

            </div>
          </Container>
        </section>

        {/* FEATURES */}
        <section className="py-20">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">

              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Complete Office Interior Solutions in Mumbai
                </h2>

                <p className="text-gray-600 mb-6">
                  From concept to execution, we deliver end-to-end commercial interior solutions for offices, startups and enterprises across Mumbai.
                </p>

                <div className="space-y-4">
                  {[
                    "Space Planning & Design",
                    "Turnkey Execution",
                    "MEP & HVAC Integration",
                    "Electrical & Fire Systems"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-green-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl p-10 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Premium Office Design
                </h3>
                <p className="text-gray-500">
                  Modern • Functional • Efficient
                </p>
              </div>

            </div>
          </Container>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-gray-50">
          <Container>

            <h2 className="text-3xl text-center font-bold mb-12">
              Client Reviews
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {[
                "Outstanding office interior execution in Mumbai.",
                "Great team and professional delivery.",
                "Highly recommended for commercial interiors."
              ].map((text, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl shadow">

                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500" />
                    ))}
                  </div>

                  <p className="text-gray-600">{text}</p>

                </div>
              ))}

            </div>

          </Container>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-20">
          <Container>
            <div className="flex flex-wrap justify-center gap-4">

              {[
                { name: "Services", link: "/services" },
                { name: "Portfolio", link: "/portfolio" },
                { name: "Interior Cost Guide", link: "/blog/interior-cost-in-india" },
              ].map((item, i) => (
                <Link key={i} href={item.link}>
                  <div className="px-6 py-3 border rounded-full hover:bg-black hover:text-white transition">
                    {item.name}
                  </div>
                </Link>
              ))}

            </div>
          </Container>
        </section>

        {/* LOCATION CLUSTER */}
        <section className="py-20 bg-gray-50">
          <Container>
            <h2 className="text-2xl text-center font-bold mb-6">
              Our Presence
            </h2>

            <div className="flex justify-center flex-wrap gap-4">

              {[
                { name: "Delhi", link: "/office-interior-contractor-delhi" },
                { name: "Noida", link: "/office-interior-contractor-noida" },
                { name: "Gurgaon", link: "/office-interior-contractor-gurgaon" },
              ].map((loc, i) => (
                <Link key={i} href={loc.link}>
                  <div className="px-6 py-3 bg-white rounded-full border hover:bg-black hover:text-white transition">
                    {loc.name}
                  </div>
                </Link>
              ))}

            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gray-100 text-center">
          <Container>

            <h2 className="text-3xl font-bold text-gray-900">
              Start Your Office Interior Project in Mumbai
            </h2>

            <p className="mt-4 text-gray-600">
              Get expert consultation for your workspace today.
            </p>

            <Link href="/contact">
              <button className="mt-6 px-8 py-4 bg-black text-white rounded-full hover:scale-105 transition">
                Get Free Quote
              </button>
            </Link>

          </Container>
        </section>

        {/* SCHEMA */}
        <Script
          id="mumbai-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ITSS Interior",
              areaServed: "Mumbai",
              service: [
                "Interior Design Mumbai",
                "Office Interior Mumbai",
                "MEP Services",
                "HVAC Services"
              ]
            })
          }}
        />

      </section>

    </MainLayout>
  );
}