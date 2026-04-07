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
          <h1 className="text-4xl md:text-5xl font-bold text-white">Turnkey Interior Projects in Delhi NCR</h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg">Complete office fit-out from design to handover — civil, MEP, HVAC, electrical, furniture and finishing under one contract. 250+ turnkey projects delivered across India.</p>
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
                src="/service_image/turnkey1.jpg"
                alt="Turnkey interior projects Delhi NCR — complete office fitout by ITSS"
                width={580}
                height={420}
                className="rounded-2xl shadow-xl w-full"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0b1f3a] mb-6">Single Contract. One Team. Complete Office Delivered.</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Managing 5–6 different vendors for an office fit-out — interior designer, civil contractor, electrical contractor, HVAC vendor, furniture supplier — creates coordination nightmares, blame games when something goes wrong and inevitable delays as each vendor waits for the other.</p>
              <p className="text-gray-600 leading-relaxed mb-6">ITSS eliminates this problem with full turnkey execution. One contract, one project manager, one point of accountability. We handle everything from initial design through civil work, MEP, HVAC, networking, furniture and final handover. You move into a fully functional office on the agreed date.</p>
              <div className="space-y-3">
                {["One contract covers everything", "Single project manager — your single point of contact", "Design, civil, MEP, HVAC, furniture — all in-house", "Fixed price and timeline guaranteed in writing", "Penalty clause for delays — we put skin in the game"].map((item, i) => (
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
          <h2 className="text-3xl font-bold text-center text-[#0b1f3a] mb-12">Our Turnkey Interior Projects Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{ name: "Concept Design & 3D Visualisation", desc: "Space planning, furniture layout, material selection and 3D renders before any work begins." }, { name: "Civil & Interior Works", desc: "Demolition, flooring, partitions, false ceiling, painting, glass works and all finishing." }, { name: "Electrical Fit-Out", desc: "DB panels, wiring, lighting, UPS, power points and electrical inspection compliance." }, { name: "HVAC & Ventilation", desc: "Air conditioning system design, installation and commissioning for all occupied areas." }, { name: "MEP Systems", desc: "Mechanical, electrical and plumbing coordination — fire-fighting, networking and BMS." }, { name: "Furniture & Workstations", desc: "Workstation supply and installation, cabin furniture, conference tables, reception desks." }].map((s, i) => (
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
            {[{ q: "What exactly is a turnkey interior contract?", a: "A turnkey contract means ITSS is responsible for delivering a complete, ready-to-use office. We handle design, civil, MEP, HVAC, electrical, networking, furniture and handover. You don't manage any vendors — just approve milestones and move in on the agreed date." }, { q: "How is turnkey different from hiring separate contractors?", a: "With separate contractors you manage scheduling conflicts, quality inconsistencies, warranty disputes and delays caused by inter-vendor dependencies. With turnkey, all these risks sit with ITSS — you have one number to call and one team accountable for the entire project." }, { q: "What is the cost of a turnkey office interior in Delhi NCR?", a: "Turnkey office fit-outs in Delhi NCR range from ₹800–3,000+/sq ft depending on finish level. A complete mid-range 3,000 sq ft turnkey office typically costs ₹40–55 lakhs including design, civil, MEP, HVAC and furniture." }, { q: "How long does a turnkey office project take?", a: "1,000–3,000 sq ft: 35–45 days. 3,000–8,000 sq ft: 45–65 days. 8,000–20,000 sq ft: 65–90 days. Large campus projects: 90–150 days. Timeline is fixed in the contract with milestone-based tracking." }, { q: "What happens if the project is delayed?", a: "Our contracts include a penalty clause — if we miss the agreed handover date (outside force majeure), we pay a daily penalty. We've maintained 95%+ on-time delivery across all 250+ projects." }].map((f, i) => (
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
            {[{ name: "Office Interior Design", link: "/services/office-interior-services" }, { name: "MEP Services", link: "/services/mep-services-india" }, { name: "HVAC Services", link: "/services/hvac-services-delhi" }, { name: "EPC Services", link: "/services/epc-services-delhi" }].map((s, i) => (
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
