"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MainLayout } from "@/components/layout/MainLayout";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";

export default function PageClient() {
  return (
    <MainLayout>

      {/* HERO */}
      <section className="py-28 bg-gradient-to-br from-[#0b1f3a] to-[#1e3a5f] text-center">
        <Container>
          <p className="text-[#c8a951] text-sm font-semibold uppercase tracking-widest mb-4">10+ Years · 250+ Projects · Pan India</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Office Interior Design Services in Delhi NCR
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg">
            Complete corporate office interior solutions — workspace planning, cabin design, reception, conference rooms, MEP and turnkey execution. Trusted by Blinkit, Godrej, Tech Mahindra and 120+ companies.
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
      <section className="py-12 bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "250+", label: "Projects Delivered" },
              { num: "10+", label: "Years Experience" },
              { num: "120+", label: "Corporate Clients" },
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

      {/* MAIN CONTENT */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/service_image/office-interior.jpg"
                alt="Office interior design services Delhi NCR — corporate workspace by ITSS"
                width={580}
                height={420}
                className="rounded-2xl shadow-xl w-full"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0b1f3a] mb-6">
                Modern Office Interiors Designed for Productivity
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A well-designed office does more than look good — it directly impacts employee productivity, client perception and your brand identity. ITSS designs commercial interiors that balance aesthetics with function, creating workspaces where teams perform at their best.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From a 500 sq ft startup cabin to a 25,000 sq ft corporate campus, our in-house design and execution team handles everything — space planning, material selection, civil work, MEP coordination and final handover.
              </p>
              <div className="space-y-3">
                {[
                  "Concept design to turnkey handover",
                  "In-house MEP, HVAC and electrical coordination",
                  "Fixed-price contracts — no surprise costs",
                  "Dedicated project manager from day one",
                  "On-time delivery — guaranteed in writing",
                ].map((item, i) => (
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

      {/* SERVICES GRID */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-center text-[#0b1f3a] mb-4">
            Our Office Interior Design Services
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            End-to-end commercial interior solutions under one roof
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Workspace Planning & Layout", desc: "Space utilisation analysis, zoning, traffic flow and ergonomic layout design for optimal productivity." },
              { name: "Corporate Office Design", desc: "Brand-aligned interiors with executive cabins, open workspaces, collaboration zones and breakout areas." },
              { name: "Reception & Lobby Design", desc: "Impactful first impressions — feature walls, branded reception desks, waiting areas and signage." },
              { name: "Conference Room Design", desc: "AV-ready meeting rooms with proper acoustics, lighting and furniture for professional client interactions." },
              { name: "Cabin & Workstation Design", desc: "Modular cabins, L-shaped workstations, ergonomic seating and acoustic panels for focused work." },
              { name: "Branding & Theme Interiors", desc: "Brand colour integration, wall graphics, custom millwork and feature elements that reflect your company culture." },
              { name: "False Ceiling & Lighting", desc: "Integrated lighting design — ambient, task and accent — with false ceiling systems for clean aesthetics." },
              { name: "Flooring Solutions", desc: "Vitrified tiles, wooden flooring, carpet tiles and vinyl flooring based on space requirements and budget." },
              { name: "Pantry & Breakout Areas", desc: "Designed pantry spaces, informal seating zones, lounge areas and café-style collaboration spaces." },
            ].map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#c8a951] hover:shadow-lg transition duration-300">
                <h3 className="font-semibold text-[#0b1f3a] mb-2">{s.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-center text-[#0b1f3a] mb-12">
            How We Work — From Brief to Handover
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Site Survey", desc: "Free site visit, measurements and requirement discussion." },
              { step: "02", title: "Design Proposal", desc: "2D layout, 3D renders and material board within 5 days." },
              { step: "03", title: "BOQ & Contract", desc: "Detailed bill of quantities, fixed price and timeline agreed." },
              { step: "04", title: "Execution", desc: "Civil, MEP, HVAC, furniture — coordinated by one project manager." },
              { step: "05", title: "Handover", desc: "Snagging, walkthrough and keys handed over on schedule." },
            ].map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#0b1f3a] text-white flex items-center justify-center font-bold text-sm mx-auto mb-3">
                  {p.step}
                </div>
                <h3 className="font-semibold text-[#0b1f3a] text-sm mb-1">{p.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* COST GUIDE */}
      <section className="py-20 bg-[#0b1f3a]">
        <Container>
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Office Interior Cost Guide — Delhi NCR 2026
          </h2>
          <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
            Transparent pricing — no hidden surprises
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: "Basic",
                range: "₹800 – ₹1,200 / sq ft",
                items: ["Standard workstations", "Basic false ceiling", "LED lighting", "Vinyl or tile flooring", "Painted walls", "Functional MEP"],
                color: "bg-white/5",
              },
              {
                tier: "Mid-Range",
                range: "₹1,200 – ₹1,800 / sq ft",
                items: ["Modular furniture", "Gypsum false ceiling", "Integrated lighting design", "Wooden or carpet flooring", "Feature walls", "Full MEP + HVAC"],
                color: "bg-[#c8a951]/10 border border-[#c8a951]/30",
                highlight: true,
              },
              {
                tier: "Premium",
                range: "₹1,800 – ₹3,000+ / sq ft",
                items: ["Custom furniture & millwork", "Designer ceiling systems", "Cove & accent lighting", "High-end flooring", "Brand-specific design", "Smart building systems"],
                color: "bg-white/5",
              },
            ].map((t, i) => (
              <div key={i} className={`${t.color} rounded-2xl p-6 text-white`}>
                {t.highlight && <span className="text-xs bg-[#c8a951] text-white px-3 py-1 rounded-full font-medium mb-3 inline-block">Most Popular</span>}
                <h3 className="text-xl font-bold mb-1">{t.tier}</h3>
                <p className="text-[#c8a951] font-semibold mb-5">{t.range}</p>
                <ul className="space-y-2">
                  {t.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/80">
                      <span className="text-[#c8a951]">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-white/50 text-xs mt-8">
            * Prices vary based on site condition, finishes selected and project scope. Contact us for a free detailed estimate.
          </p>
        </Container>
      </section>

      {/* WHY ITSS */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0b1f3a] mb-6">
                Why Choose ITSS for Your Office Interior?
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Single contract, zero coordination headache", desc: "One team handles design, civil, MEP, HVAC, electrical and furniture. No juggling 5 vendors." },
                  { title: "10+ years of commercial interior experience", desc: "We've delivered 250+ projects for startups, MNCs, warehouses and hospitals across India." },
                  { title: "Trusted by India's leading brands", desc: "Blinkit, Godrej, Adani, Tech Mahindra, Tata 1mg, Zomato, Hilton and 120+ more." },
                  { title: "Fixed price guaranteed in contract", desc: "No variation charges for agreed scope. What we quote is what you pay." },
                  { title: "On-time delivery — written commitment", desc: "Penalty clauses for delays. We've maintained 95%+ on-time delivery across all projects." },
                ].map((w, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#c8a951]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-[#c8a951]" size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0b1f3a] text-sm">{w.title}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0b1f3a] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-6 text-[#c8a951]">Cities We Serve</h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Delhi", "Gurgaon", "Noida", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad"].map((c, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/80">
                    <span className="text-[#c8a951] text-xs">●</span>{c}
                  </div>
                ))}
              </div>
              <div className="border-t border-white/20 pt-6">
                <p className="text-sm text-white/60 mb-2">Call for a free site visit</p>
                <a href="tel:+919718371994" className="flex items-center gap-2 text-[#c8a951] font-medium">
                  <Phone size={16} /> +91 97183 71994
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-center text-[#0b1f3a] mb-10">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {[
              { q: "How long does an office interior project take?", a: "1,000–3,000 sq ft: 30–45 days. 3,000–8,000 sq ft: 45–60 days. 8,000+ sq ft: 60–90 days. We provide a fixed timeline before project start with milestone-wise tracking." },
              { q: "What is the cost of office interior design in Delhi NCR?", a: "Basic: ₹800–1,200/sq ft. Mid-range: ₹1,200–1,800/sq ft. Premium: ₹1,800–3,000+/sq ft. Cost depends on finishes, MEP scope and furniture specifications. Contact us for a free detailed estimate." },
              { q: "Does ITSS handle both design and construction?", a: "Yes. ITSS offers complete turnkey execution — concept design, 3D visualisation, civil work, MEP, HVAC, electrical, networking, furniture and final handover — under a single contract." },
              { q: "Can I see a 3D design before work begins?", a: "Yes. We provide 3D rendered visualisations of your office after the design proposal stage. This allows you to approve the look before any work starts on site." },
              { q: "Do you handle MCD and fire NOC approvals?", a: "Yes. Our team guides you through all required permissions — MCD fit-out approvals, fire NOC, electrical board approvals and other compliance documentation." },
              { q: "Can you work within a tight deadline?", a: "Yes. For urgent requirements we can deploy additional resources for a crash programme. Timeline is discussed and agreed at project start." },
              { q: "What is a turnkey interior project?", a: "A turnkey project means ITSS takes single-point responsibility for everything — design, civil, MEP, HVAC, electrical, furniture and handover. You receive a fully ready-to-use office without managing multiple contractors." },
              { q: "Do you provide a warranty on the work?", a: "Yes. We provide a 1-year workmanship warranty on all executed work. Structural issues and material defects are covered under this warranty." },
            ].map((f, i) => (
              <details key={i} className="group bg-white border border-gray-100 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-medium text-[#0b1f3a] gap-4">
                  <span className="text-sm">{f.q}</span>
                  <span className="text-[#c8a951] text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">{f.a}</div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-2xl font-bold text-center text-[#0b1f3a] mb-8">Related Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { name: "Turnkey Interior Projects", link: "/services/Turnkey-interior-projects-delhi" },
              { name: "MEP Services", link: "/services/mep-services-india" },
              { name: "HVAC Services", link: "/services/hvac-services-delhi" },
              { name: "EPC Services", link: "/services/epc-services-delhi" },
            ].map((s, i) => (
              <Link key={i} href={s.link}>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#c8a951] hover:bg-white transition text-center text-sm font-medium text-[#0b1f3a]">
                  {s.name}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0b1f3a] to-[#1e3a5f] text-center">
        <Container>
          <h2 className="text-3xl font-bold text-white">Ready to Design Your Office?</h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Free site visit and design consultation from our commercial interior experts in Delhi NCR.
          </p>
          <Link href="/contact">
            <button className="mt-8 px-10 py-4 bg-[#c8a951] text-white rounded-full hover:bg-[#b8992f] transition font-medium text-lg">
              Get Free Quote Today
            </button>
          </Link>
        </Container>
      </section>

    </MainLayout>
  );
}
