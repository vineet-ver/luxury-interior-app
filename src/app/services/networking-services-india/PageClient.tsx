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
          <h1 className="text-4xl md:text-5xl font-bold text-white">IT Networking Services in India</h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg">Structured cabling, Wi-Fi infrastructure, server room setup and complete IT networking for commercial offices across India. TIA-568 compliant installations by certified network engineers.</p>
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
                src="/service_image/networking1.webp"
                alt="IT networking services India — structured cabling and office network setup by ITSS"
                width={580}
                height={420}
                className="rounded-2xl shadow-xl w-full"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0b1f3a] mb-6">Future-Ready Office Networking Infrastructure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A modern office network is as critical as its electrical system. Unreliable Wi-Fi, insufficient data points, poorly planned server rooms and inadequate bandwidth capacity create daily frustration and productivity loss. Getting the network infrastructure right during the fit-out phase is far cheaper than retrofitting later.</p>
              <p className="text-gray-600 leading-relaxed mb-6">ITSS designs and installs structured cabling systems, active networking equipment, Wi-Fi infrastructure and server room setups as part of our integrated office fit-out service. Our network engineers work from day one alongside civil and MEP teams.</p>
              <div className="space-y-3">
                {["TIA-568 and ISO 11801 compliant installations", "Cat6A/Cat6 structured cabling standard", "Cisco, HPE, Ubiquiti certified installations", "Server room design with cooling and power planning", "Network documentation and test reports"].map((item, i) => (
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
          <h2 className="text-3xl font-bold text-center text-[#0b1f3a] mb-12">Our IT Networking Services Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{ name: "Structured Cabling", desc: "Cat6A/Cat6 horizontal cabling, fibre backbone, patch panels, cable management and 24/7 certified test reports." }, { name: "Wi-Fi Infrastructure", desc: "Enterprise Wi-Fi planning, access point placement, controller setup and coverage verification for offices." }, { name: "Server Room Setup", desc: "Server room design, raised flooring, precision cooling, power distribution (PDU/UPS) and rack installation." }, { name: "Fibre Optic Cabling", desc: "Single-mode and multi-mode fibre for building backbone, campus networks and data centre interconnects." }, { name: "IP Telephony (VoIP)", desc: "Structured cabling for VoIP handsets, IP PBX systems and call centre setups." }, { name: "CCTV & Access Control", desc: "Network-based CCTV systems, IP cameras, NVR setup and access control integration with networking." }].map((s, i) => (
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
            {[{ q: "What structured cabling standard is best for an office?", a: "Cat6A is the recommended standard for new office installations — it supports 10 Gbps speeds and is future-proof for at least 10 years. Cat6 is acceptable for budget-constrained projects with lower bandwidth requirements." }, { q: "How many network points does a typical office need?", a: "A standard rule is 2 data points (RJ45) per workstation plus dedicated points for printers, IP phones, Wi-Fi access points and AV equipment. For a 50-person office, expect 120–150 data points." }, { q: "What is included in a server room setup?", a: "A complete server room includes: raised access flooring, precision cooling unit, UPS, power distribution units (PDU), cable management, patch panels, KVM switches and fire suppression. Size and complexity depend on server count and criticality." }, { q: "Do you provide network certification (FLUKE testing)?", a: "Yes. All structured cabling installations are tested with Fluke DSX2-8000 analysers and we provide detailed channel and permanent link test reports as part of project handover documentation." }].map((f, i) => (
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
            {[{ name: "Electrical Services", link: "/services/electrical-contractor-delhi" }, { name: "MEP Services", link: "/services/mep-services-india" }, { name: "EPC Services", link: "/services/epc-services-delhi" }, { name: "Office Interior Design", link: "/services/office-interior-services" }].map((s, i) => (
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
