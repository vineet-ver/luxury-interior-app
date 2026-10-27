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
          <h1 className="text-4xl md:text-5xl font-bold text-white">MEP Services in India</h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg">Mechanical, electrical and plumbing systems for commercial offices, warehouses and industrial spaces. In-house MEP engineers for accurate design and reliable execution.</p>
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
                src="/service_image/mep1.jpg"
                alt="MEP services India — mechanical electrical plumbing for commercial offices by ITSS"
                width={580}
                height={420}
                className="rounded-2xl shadow-xl w-full"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0b1f3a] mb-6">Integrated MEP Solutions — Designed & Executed In-House</h2>
              <p className="text-gray-600 leading-relaxed mb-4">MEP systems are the backbone of any commercial building — they determine air quality, electrical reliability, plumbing efficiency and fire safety. Poor MEP execution leads to expensive reworks, regulatory failures and ongoing maintenance problems.</p>
              <p className="text-gray-600 leading-relaxed mb-6">ITSS provides complete MEP design and execution through our in-house engineering team. We coordinate all MEP disciplines — mechanical, electrical and plumbing — with the civil and interior works to ensure seamless integration and zero conflicts.</p>
              <div className="space-y-3">
                {["In-house MEP design team — no outsourcing", "Clash detection before execution starts", "Compliance with NBC 2016 and local codes", "BIM coordination for complex projects", "MEP commissioning and handover documentation"].map((item, i) => (
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
          <h2 className="text-3xl font-bold text-center text-[#0b1f3a] mb-12">Our MEP Services Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Mechanical Systems", desc: "HVAC, ventilation, fire suppression, building management systems (BMS) and energy monitoring." },
              { name: "Electrical Systems", desc: "HT/LT panels, DB boards, wiring, earthing, lighting, UPS, DG sets and power distribution." },
              { name: "Plumbing Systems", desc: "Water supply, drainage, rainwater harvesting, sewage treatment and plumbing fixtures." },
              { name: "Fire Fighting", desc: "Sprinkler systems, fire hydrants, smoke detectors, alarm panels and fire NOC compliance." },
              { name: "Networking & Data", desc: "Structured cabling, server room setup, fibre backbone and Wi-Fi infrastructure." },
              { name: "BMS Integration", desc: "Building Management System for centralised control of HVAC, lighting, access and energy monitoring." },
            ].map((s, i) => (
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
            {[
              { q: "What does MEP stand for in construction?", a: "MEP stands for Mechanical, Electrical and Plumbing — the three core engineering systems in any building. In commercial interiors, MEP also includes fire-fighting, networking and BMS." },
              { q: "Why is MEP important in office fit-outs?", a: "MEP systems account for 35–50% of a typical office fit-out cost and directly affect occupant comfort, safety and running costs. Poorly designed MEP leads to high electricity bills, maintenance issues and regulatory non-compliance." },
              { q: "Do you provide MEP design drawings?", a: "Yes. Our in-house MEP engineers produce complete design drawings — single-line diagrams, duct layouts, piping schematics and panel schedules — before execution begins." },
              { q: "Is MEP work included in a turnkey interior contract?", a: "Yes. ITSS turnkey contracts include all MEP disciplines — electrical, HVAC, plumbing, fire-fighting and networking — coordinated by one project manager." },
            ].map((f, i) => (
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
            {[
              { name: "HVAC Services", link: "/services/hvac-services-delhi" },
              { name: "Electrical Services", link: "/services/electrical-contractor-delhi" },
              { name: "Fire Fighting", link: "/services/fire-fighting-services-delhi" },
              { name: "Turnkey Interior", link: "/services/Turnkey-interior-projects-delhi" },
            ].map((s, i) => (
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
