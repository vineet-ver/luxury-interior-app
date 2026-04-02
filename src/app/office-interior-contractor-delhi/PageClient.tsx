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
              Interior Designers in Delhi NCR
            </h1>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Premium office interiors, turnkey fitouts, MEP & HVAC solutions for modern businesses.
            </p>

            <Link href="/contact">
              <button className="mt-8 px-8 py-4 bg-black text-white rounded-full flex items-center gap-2 mx-auto hover:scale-105 transition">
                Get Free Consultation <ArrowRight size={18} />
              </button>
            </Link>

            {/* PREMIUM BADGE */}
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
              Our Services
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

              {/* LEFT CONTENT */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  End-to-End Office Interior Solutions
                </h2>

                <p className="text-gray-600 mb-6">
                  We provide complete office interior solutions including planning, design, execution and engineering services across Delhi NCR.
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

              {/* RIGHT BOX */}
              <div className="bg-gray-100 rounded-2xl p-10 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Premium Workspace Design
                </h3>
                <p className="text-gray-500">
                  Modern • Functional • Scalable
                </p>
              </div>

            </div>
          </Container>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-gray-50">
          <Container>

            <h2 className="text-3xl text-center font-bold mb-12">
              What Our Clients Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {[
                "Amazing office transformation. Highly professional team.",
                "Delivered our project on time with great quality.",
                "Best interior designers in Delhi NCR."
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

        {/* LOCATION LINKS */}
        <section className="py-20 bg-gray-50">
          <Container>
            <h2 className="text-2xl text-center font-bold mb-6">
              Nearby Locations
            </h2>

            <div className="flex justify-center flex-wrap gap-4">

              {[
                { name: "Gurgaon", link: "/office-interior-contractor-gurgaon" },
                { name: "Noida", link: "/office-interior-contractor-noida" },
                { name: "Mumbai", link: "/office-interior-contractor-mumbai" },
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
              Let’s Build Your Dream Office
            </h2>

            <p className="mt-4 text-gray-600">
              Book a free consultation with our experts today.
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
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ITSS Interior",
              areaServed: "Delhi NCR",
            })
          }}
        />

      </section>

    </MainLayout>
  );
}