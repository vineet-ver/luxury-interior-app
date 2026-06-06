"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MainLayout } from "@/components/layout/MainLayout";
import { CheckCircle, ArrowRight, MapPin, Phone } from "lucide-react";

export default function PageClient() {
  return (
    <MainLayout>
      <section className="bg-white">

        {/* HERO */}
        <section className="py-28 bg-gradient-to-br from-[#0b1f3a] to-[#1e3a5f] text-center">
          <Container>
            <p className="text-[#c8a951] text-sm font-semibold uppercase tracking-widest mb-4">Delhi NCR&apos;s Trusted Interior Partner</p>
            <h1 className="text-5xl font-bold text-white">
              Office Interior Designers in Delhi
            </h1>
            <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg">
              Commercial interior design, turnkey fitouts, MEP, HVAC and EPC solutions for corporate offices across Delhi NCR. 10+ years. 250+ projects delivered.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-[#c8a951] text-white rounded-full flex items-center gap-2 hover:bg-[#b8992f] transition font-medium">
                  Get Free Consultation <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="px-8 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition">
                  View Projects
                </button>
              </Link>
            </div>
          </Container>
        </section>

        {/* STATS */}
        <section className="py-14 bg-white border-b border-gray-100">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { num: "250+", label: "Projects Completed" },
                { num: "10+", label: "Years Experience" },
                { num: "120+", label: "Corporate Clients" },
                { num: "15+", label: "Cities Covered" },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-2xl">
                  <p className="text-3xl font-bold text-[#0b1f3a]">{item.num}</p>
                  <p className="text-gray-500 text-sm mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ABOUT DELHI */}
        <section className="py-20">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#0b1f3a] mb-6">
                  Why Delhi Businesses Choose ITSS
                </h2>
                <p className="text-gray-600 mb-4">
                  With our base in Dilshad Colony, Delhi, ITSS has delivered 150+ office interior projects across Connaught Place, Janakpuri, Okhla, Rohini, Dwarka and the entire Delhi NCR region.
                </p>
                <p className="text-gray-600 mb-6">
                  From a 500 sq ft startup cabin to a 25,000 sq ft corporate campus — we handle everything: design, civil, MEP, HVAC, electrical, networking and fire-safety under one contract.
                </p>
                <div className="space-y-3">
                  {[
                    "Single-point accountability — one team, one contract",
                    "In-house MEP, HVAC and electrical teams",
                    "MCD and fire NOC compliance assistance",
                    "Fixed-price contracts — no hidden costs",
                    "On-time delivery guarantee",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-[#c8a951] mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#0b1f3a] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-6 text-[#c8a951]">Areas We Cover in Delhi</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Connaught Place", "Okhla Industrial Area", "Nehru Place", "Janakpuri",
                    "Rohini", "Dwarka", "Saket", "Jasola", "Naraina", "Laxmi Nagar",
                    "Dilshad Colony", "Patparganj",
                  ].map((area, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/80">
                      <MapPin size={12} className="text-[#c8a951] flex-shrink-0" />
                      {area}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/60 mb-1">Call us directly</p>
                  <a href="tel:+919718371994" className="flex items-center gap-2 text-[#c8a951] font-medium">
                    <Phone size={16} /> +91 97183 71994
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-gray-50">
          <Container>
            <h2 className="text-3xl text-center font-bold text-[#0b1f3a] mb-4">
              Our Services in Delhi NCR
            </h2>
            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
              Complete office interior solutions — from concept to handover
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Office Interior Design", link: "/services/office-interior-services", desc: "Workspace planning, cabin design, reception, conference rooms" },
                { name: "Turnkey Fitout", link: "/services/Turnkey-interior-projects-delhi", desc: "Design to handover — civil, MEP, HVAC, furniture" },
                { name: "EPC Services", link: "/services/epc-services-delhi", desc: "Engineering, procurement and construction contracts" },
                { name: "MEP Solutions", link: "/services/mep-services-india", desc: "Mechanical, electrical and plumbing systems" },
                { name: "HVAC Systems", link: "/services/hvac-services-delhi", desc: "Air conditioning, ventilation and ducting" },
                { name: "Electrical Work", link: "/services/electrical-contractor-delhi", desc: "DB panels, wiring, UPS, lighting systems" },
                { name: "Fire Safety", link: "/services/fire-fighting-services-delhi", desc: "Fire alarms, sprinklers, fire NOC assistance" },
                { name: "Networking", link: "/services/networking-services-india", desc: "Structured cabling, server setup, Wi-Fi" },
                { name: "Workstations", link: "/services/workstation-installation-delhi", desc: "Modular workstation installation, cubicles" },
              ].map((s, i) => (
                <Link key={i} href={s.link}>
                  <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#c8a951] hover:shadow-lg transition duration-300 group">
                    <h3 className="font-semibold text-[#0b1f3a] group-hover:text-[#c8a951] transition mb-1">{s.name}</h3>
                    <p className="text-sm text-gray-500">{s.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-white">
          <Container>
            <h2 className="text-3xl text-center font-bold text-[#0b1f3a] mb-4">Client Reviews — Delhi Projects</h2>
            <p className="text-center text-gray-500 mb-12">Real clients, real projects, real results</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Rahul Mehta", role: "Facilities Head", company: "Blinkit", city: "Delhi",
                  review: "ITSS handled our 18,000 sq ft Delhi warehouse office from scratch — civil, MEP, HVAC all coordinated seamlessly. Delivered 5 days ahead of schedule.",
                  project: "Warehouse Office Fitout, Delhi",
                },
                {
                  name: "Sunita Arora", role: "Admin Director", company: "Paytm", city: "Delhi",
                  review: "Professional team with deep expertise in commercial interiors. The conference room and open workspace they designed has completely transformed how our teams collaborate.",
                  project: "Corporate Office Interior, Connaught Place",
                },
                {
                  name: "Vikram Singh", role: "Operations Manager", company: "Zomato", city: "Delhi",
                  review: "On-time, on-budget. ITSS is our go-to interior contractor for Delhi operations. They understand corporate requirements and execute flawlessly.",
                  project: "Office Renovation, Okhla",
                },
              ].map((t, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                  <div className="flex gap-0.5 mb-3">
                    {Array(5).fill(0).map((_, s) => <span key={s} className="text-[#c8a951]">★</span>)}
                  </div>
                  <p className="text-gray-600 text-sm italic leading-relaxed mb-4">&ldquo;{t.review}&rdquo;</p>
                  <span className="text-xs bg-[#0b1f3a]/5 text-[#0b1f3a] px-3 py-1 rounded-full">{t.project}</span>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-50">
                    <div className="w-9 h-9 rounded-full bg-[#0b1f3a] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {t.name.split(" ").map((n: string) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-medium text-sm text-[#0b1f3a]">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}, {t.company} — {t.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <Container>
            <h2 className="text-3xl text-center font-bold text-[#0b1f3a] mb-10">FAQs — Office Interiors in Delhi</h2>
            <div className="max-w-3xl mx-auto space-y-3">
              {[
                { q: "How long does an office interior project take in Delhi?", a: "Typically 30–90 days depending on size. A 1,000–3,000 sq ft office takes 30–45 days. Larger projects (5,000+ sq ft) take 60–90 days. We provide a fixed timeline before project start." },
                { q: "What is the cost of office interior design in Delhi?", a: "Delhi NCR office interiors range from ₹800–1,200/sq ft (basic) to ₹1,500–2,500/sq ft (premium). Final cost depends on finishes, MEP scope and furniture requirements. Contact us for a free estimate." },
                { q: "Do you handle MCD approvals and fire NOC in Delhi?", a: "Yes, our team guides you through all required approvals — MCD, fire NOC, electrical board approvals. We handle the documentation and follow-up process." },
                { q: "Can you execute both design and construction under one contract?", a: "Yes, ITSS offers complete turnkey execution — design, civil, MEP, HVAC, electrical, networking, furniture and handover — under a single contract with one point of contact." },
                { q: "Do you work in South Delhi, West Delhi and other zones?", a: "Yes, we have active projects across all Delhi zones — Connaught Place, Okhla, Nehru Place, Janakpuri, Rohini, Dwarka, Saket, Jasola and more." },
              ].map((f, i) => (
                <details key={i} className="group bg-white border border-gray-100 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-medium text-[#0b1f3a] gap-4">
                    <span className="text-sm">{f.q}</span>
                    <span className="text-[#c8a951] text-xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">{f.a}</div>
                </details>
              ))}
            </div>
          </Container>
        </section>

        {/* NEARBY */}
        <section className="py-16 bg-white">
          <Container>
            <h2 className="text-xl text-center font-semibold text-[#0b1f3a] mb-8">Also Serving Nearby Locations</h2>
            <div className="flex justify-center flex-wrap gap-4">
              {[
                { name: "Gurgaon", link: "/office-interior-contractor-gurgaon" },
                { name: "Noida", link: "/office-interior-contractor-noida" },
                { name: "Mumbai", link: "/office-interior-contractor-mumbai" },
              ].map((loc, i) => (
                <Link key={i} href={loc.link}>
                  <div className="px-6 py-3 bg-gray-50 rounded-full border border-gray-200 hover:bg-[#0b1f3a] hover:text-white hover:border-[#0b1f3a] transition text-sm font-medium text-gray-700">
                    {loc.name}
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-[#0b1f3a] to-[#1e3a5f] text-center">
          <Container>
            <h2 className="text-3xl font-bold text-white">Ready to Transform Your Delhi Office?</h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Get a free consultation and project estimate from our Delhi NCR interior experts.
            </p>
            <Link href="/contact">
              <button className="mt-8 px-10 py-4 bg-[#c8a951] text-white rounded-full hover:bg-[#b8992f] transition font-medium">
                Get Free Quote Today
              </button>
            </Link>
          </Container>
        </section>

      </section>
    </MainLayout>
  );
}
