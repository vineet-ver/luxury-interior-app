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
          <h1 className="text-4xl md:text-5xl font-bold text-white">Carpentry Services in Delhi NCR</h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg">Professional commercial carpentry for offices — modular workstations, wooden partitions, false ceiling carpentry, reception desks and custom furniture. High-quality materials, experienced craftsmen.</p>
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
                src="/service_image/carpentry.jpg"
                alt="Carpentry services Delhi NCR — office furniture and commercial woodwork by ITSS"
                width={580}
                height={420}
                className="rounded-2xl shadow-xl w-full"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0b1f3a] mb-6">Commercial Carpentry Built for Durability & Aesthetics</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Office carpentry is not just about aesthetics — it's about durability, functionality and long-term value. Cheap materials and poor workmanship result in warping, delamination and premature wear, requiring expensive replacements within 2–3 years.</p>
              <p className="text-gray-600 leading-relaxed mb-6">ITSS uses commercial-grade materials — BWR ply, MR-grade boards, PVC edge banding and phenolic cores — for all carpentry work. Our skilled craftsmen work to precise tolerances, ensuring clean joints, flush finishes and long-lasting furniture.</p>
              <div className="space-y-3">
                {["Commercial-grade BWR ply and MR-grade boards", "PVC edge banding for durability", "In-house carpentry workshop", "Fit-for-purpose furniture — not residential grade", "Coordination with electrical for cable management"].map((item, i) => (
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
          <h2 className="text-3xl font-bold text-center text-[#0b1f3a] mb-12">Our Carpentry Services Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Modular Workstations", desc: "L-shaped, linear and cluster workstations with cable management, privacy screens and integrated power points." },
              { name: "Wooden Partitions", desc: "Full-height and partial partitions using MDF, glass panels and aluminium frames for cabin and meeting room creation." },
              { name: "Reception Desk & Counter", desc: "Custom reception desks with feature panels, branded fascias, integrated lighting and storage cabinets." },
              { name: "Cabin Furniture", desc: "Director cabins, manager rooms — credenzas, storage walls, visitor seating and table units." },
              { name: "False Ceiling Carpentry", desc: "Wooden ceilings, bulkhead sections, cove profiles and integrated lighting features in wood and MDF." },
              { name: "Conference Table & Chairs", desc: "Custom conference tables in various sizes with cable management grommets and power/data pop-ups." },
              { name: "Storage & Filing Systems", desc: "Filing cabinets, overhead storage, open shelving, lockers and archive storage for offices." },
              { name: "Custom Furniture", desc: "Bespoke furniture items — display walls, pantry units, feature walls and brand-specific millwork." },
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
              { q: "What material is used for office workstations?", a: "We use commercial-grade BWR (Boiling Water Resistant) plywood with MR-grade shuttering as substrate, laminate finish (1mm thick, ISI marked) and PVC edge banding. We do not use particle board or MDF for structural components as they have poor moisture resistance and load-bearing capacity." },
              { q: "How long does carpentry work take for a 3,000 sq ft office?", a: "Typically 2–3 weeks for a 3,000 sq ft office with standard scope (workstations, partitions, reception). Custom furniture items add 1–2 weeks due to fabrication time. We pre-fabricate in our workshop for faster on-site installation." },
              { q: "What is the cost of office carpentry per sq ft?", a: "Carpentry typically accounts for ₹300–600/sq ft of the overall office fit-out cost, depending on the density of furniture and specification level. A complete 3,000 sq ft office carpentry package is approximately ₹9–18 lakhs." },
              { q: "Do you provide branded laminate finishes?", a: "Yes. We work with Greenlam, Merino, Century and other ISI-marked laminate brands. We can also match specific brand colours and finishes per client requirements." },
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
              { name: "Office Interior Design", link: "/services/office-interior-services" },
              { name: "Workstation Installation", link: "/services/workstation-installation-delhi" },
              { name: "Electrical Services", link: "/services/electrical-contractor-delhi" },
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
