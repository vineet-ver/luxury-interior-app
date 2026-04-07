"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MainLayout } from "@/components/layout/MainLayout";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";

export default function PageClient() {
  return (
    <MainLayout>

      <section className="py-28 bg-gradient-to-br from-[#0b1f3a] to-[#1e3a5f] text-center">
        <Container>
          <p className="text-[#c8a951] text-sm font-semibold uppercase tracking-widest mb-4">Delhi NCR · Pan India · 250+ Projects</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">EPC Services in Delhi NCR</h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg">Engineering, procurement and construction for commercial interior projects, industrial fit-outs and large-scale turnkey contracts across India. Single-point accountability from concept to handover.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-[#c8a951] text-white rounded-full flex items-center gap-2 hover:bg-[#b8992f] transition font-medium">
                Get Free Consultation <ArrowRight size={18} />
              </button>
            </Link>
            <a href="tel:+919718371994">
              <button className="px-8 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition flex items-center gap-2">
                <Phone size={16} /> Call Now
              </button>
            </a>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "250+", label: "Projects Delivered" },
              { num: "10+", label: "Years Experience" },
              { num: "120+", label: "Clients Served" },
              { num: "15+", label: "Cities Pan India" },
            ].map((s, i) => (
              <div key={i} className="p-5 bg-gray-50 rounded-xl">
                <p className="text-3xl font-bold text-[#0b1f3a]">{s.num}</p>
                <p className="text-gray-500 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/service_image/epc1.jpg"
                alt="EPC services Delhi NCR — engineering procurement construction for commercial projects by ITSS"
                width={580}
                height={420}
                className="rounded-2xl shadow-xl w-full"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0b1f3a] mb-6">Complete EPC Execution — Design to Handover</h2>
              <p className="text-gray-600 leading-relaxed mb-4">EPC (Engineering, Procurement, Construction) contracting means ITSS takes full responsibility for your project — from initial design and specification through material procurement, construction and final commissioning. You sign one contract, deal with one team and receive one completed project.</p>
              <p className="text-gray-600 leading-relaxed mb-6">This model is ideal for large commercial fit-outs, industrial projects, warehouse interiors and any project where the client wants to focus on their business while we handle every aspect of the build.</p>
              <div className="space-y-3">
                {["One contract, one point of contact", "Design + procurement + construction under one team", "In-house MEP, civil and interior execution", "Transparent procurement with client-approved vendor list", "Fixed price and timeline with penalty clauses"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-[#c8a951] mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-center text-[#0b1f3a] mb-12">Our EPC Services Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{ name: "Engineering Design", desc: "Architectural drawings, MEP design, structural details, BOQ preparation and specification writing." }, { name: "Procurement Management", desc: "Vendor shortlisting, rate negotiation, purchase orders, delivery scheduling and quality inspection." }, { name: "Civil Construction", desc: "Demolition, flooring, partitions, false ceiling, painting and all civil works per approved drawings." }, { name: "MEP Execution", desc: "Electrical, HVAC, plumbing, fire-fighting, networking — coordinated and executed in-house." }, { name: "Quality Control", desc: "Material inspection, installation quality audits and snag list management before handover." }, { name: "Project Commissioning", desc: "System testing, punch list clearing, client walkthrough and as-built documentation." }].map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#c8a951] hover:shadow-lg transition duration-300">
                <h3 className="font-semibold text-[#0b1f3a] mb-2">{s.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-center text-[#0b1f3a] mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {[{ q: "What is an EPC contract?", a: "An EPC contract makes the contractor responsible for Engineering (design and specifications), Procurement (materials and equipment) and Construction (execution and commissioning). The client gets a finished, functional project without managing multiple agencies." }, { q: "What size projects does ITSS handle under EPC?", a: "We handle EPC projects from ₹25 lakhs to ₹10+ crores. Typical projects include large office fit-outs (10,000–50,000 sq ft), warehouse interiors, retail fit-outs and industrial facilities." }, { q: "How is EPC different from a regular interior contract?", a: "A regular interior contract typically covers only design and finishing. EPC includes everything — civil, MEP, procurement and commissioning — with the contractor taking full responsibility for the outcome." }, { q: "Do you provide fixed-price EPC contracts?", a: "Yes. ITSS provides lump-sum fixed-price EPC contracts for defined scope. Any variation outside the agreed scope is priced separately with client approval before execution." }].map((f, i) => (
              <details key={i} className="group bg-gray-50 border border-gray-100 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-medium text-[#0b1f3a] gap-4">
                  <span className="text-sm">{f.q}</span>
                  <span className="text-[#c8a951] text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">{f.a}</div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold text-center text-[#0b1f3a] mb-8">Related Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[{ name: "Turnkey Interior", link: "/services/Turnkey-interior-projects-delhi" }, { name: "MEP Services", link: "/services/mep-services-india" }, { name: "HVAC Services", link: "/services/hvac-services-delhi" }, { name: "Office Interior Design", link: "/services/office-interior-services" }].map((s, i) => (
              <Link key={i} href={s.link}>
                <div className="p-4 bg-white rounded-xl border border-gray-100 hover:border-[#c8a951] hover:shadow-md transition text-center text-sm font-medium text-[#0b1f3a]">
                  {s.name}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#0b1f3a] to-[#1e3a5f] text-center">
        <Container>
          <h2 className="text-3xl font-bold text-white">Ready to Start Your Project?</h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">Free consultation and site assessment from our commercial experts across Delhi NCR.</p>
          <Link href="/contact">
            <button className="mt-8 px-10 py-4 bg-[#c8a951] text-white rounded-full hover:bg-[#b8992f] transition font-medium text-lg">
              Get Free Quote
            </button>
          </Link>
        </Container>
      </section>

    </MainLayout>
  );
}
