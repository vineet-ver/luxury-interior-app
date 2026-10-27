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
          <p className="text-[#c8a951] text-sm font-semibold uppercase tracking-widest mb-4">Delhi NCR · Pan India</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            HVAC Services in Delhi NCR
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg">
            Commercial air conditioning, ventilation and HVAC system installation for offices, warehouses and industrial spaces. Energy-efficient solutions designed and installed by in-house engineers.
          </p>
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

      {/* STATS */}
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

      {/* MAIN CONTENT */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/service_image/hvac1.jpg"
                alt="HVAC services Delhi NCR — commercial air conditioning installation by ITSS"
                width={580}
                height={420}
                className="rounded-2xl shadow-xl w-full"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0b1f3a] mb-6">
                Complete HVAC Design, Supply & Installation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                HVAC is one of the most critical components of a commercial office interior — it directly impacts employee comfort, energy bills and air quality. A poorly designed HVAC system creates hot spots, noise problems and excessive electricity costs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                ITSS designs and installs HVAC systems that are right-sized for your space — neither over-specified (wasting budget) nor under-sized (failing to cool). Our in-house MEP engineers calculate heat loads, design duct layouts and supervise installation.
              </p>
              <div className="space-y-3">
                {[
                  "In-house HVAC design engineers",
                  "Heat load calculation for accurate system sizing",
                  "BEE-rated, energy-efficient equipment",
                  "Integration with building MEP and fire systems",
                  "AMC (Annual Maintenance Contract) available",
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
          <h2 className="text-3xl font-bold text-center text-[#0b1f3a] mb-4">Our HVAC Services</h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            End-to-end HVAC solutions for commercial and industrial spaces
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "HVAC System Design", desc: "Heat load calculations, equipment selection, duct layout and system design for optimum performance and energy efficiency." },
              { name: "Split & VRF/VRV Systems", desc: "Installation of split AC units, multi-split and VRF/VRV systems for offices, server rooms and large commercial spaces." },
              { name: "Ducted Air Conditioning", desc: "Centralised ducted AC systems for large offices, conference rooms and open-plan work areas with concealed air distribution." },
              { name: "Ventilation Systems", desc: "Fresh air handling units (AHU/FCU), exhaust fans, positive pressure systems and mechanical ventilation for commercial buildings." },
              { name: "Chiller Plant Systems", desc: "Chilled water plant design and installation for large commercial buildings, IT parks and industrial facilities." },
              { name: "Ductwork & Air Distribution", desc: "GI ducting fabrication and installation, diffusers, grilles, VAV boxes and balanced air distribution for uniform comfort." },
              { name: "Industrial HVAC", desc: "Process cooling, large-scale ventilation, dust extraction and industrial climate control for warehouses and manufacturing." },
              { name: "HVAC Maintenance (AMC)", desc: "Annual maintenance contracts for routine servicing, filter changes, coil cleaning and system performance checks." },
            ].map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#c8a951] hover:shadow-lg transition duration-300">
                <h3 className="font-semibold text-[#0b1f3a] mb-2">{s.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* COST GUIDE */}
      <section className="py-20 bg-[#0b1f3a]">
        <Container>
          <h2 className="text-3xl font-bold text-center text-white mb-4">HVAC Cost Guide — Delhi NCR 2026</h2>
          <p className="text-center text-white/60 mb-12">Approximate pricing for commercial HVAC installations</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { type: "Small Office (up to 1,000 sq ft)", range: "₹2.5L – ₹6L", items: ["4–6 split AC units", "Basic ventilation", "Standard installation", "1 year warranty"] },
              { type: "Mid-size Office (1,000–5,000 sq ft)", range: "₹6L – ₹25L", items: ["VRF/VRV system", "Ducted distribution", "Fresh air handling", "BMS integration option"], highlight: true },
              { type: "Large Office / Industrial (5,000+ sq ft)", range: "₹25L – ₹1Cr+", items: ["Chilled water plant", "Full ductwork", "AHU/FCU systems", "BMS & energy monitoring"] },
            ].map((t, i) => (
              <div key={i} className={`rounded-2xl p-6 text-white ${t.highlight ? "bg-[#c8a951]/15 border border-[#c8a951]/40" : "bg-white/5"}`}>
                {t.highlight && <span className="text-xs bg-[#c8a951] text-white px-3 py-1 rounded-full font-medium mb-3 inline-block">Most Common</span>}
                <h3 className="font-semibold mb-1 text-sm">{t.type}</h3>
                <p className="text-[#c8a951] font-bold text-xl mb-5">{t.range}</p>
                <ul className="space-y-2">
                  {t.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/80">
                      <span className="text-[#c8a951]">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-white/40 text-xs mt-8">* Prices depend on equipment brand, site conditions and installation complexity. Free estimate available.</p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-center text-[#0b1f3a] mb-10">FAQs — HVAC Services</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {[
              { q: "How do I know what size HVAC system I need for my office?", a: "HVAC sizing is based on a heat load calculation — considering floor area, occupancy, glass area, roof exposure, equipment heat and fresh air requirements. Our engineers perform this calculation before recommending any system. Never let a vendor size a system based on thumb rules alone." },
              { q: "VRF/VRV vs centralised duct system — which is better for offices?", a: "VRF/VRV systems offer individual zone control (ideal for mixed-use offices), lower maintenance and energy savings. Centralised ducted systems are better for open-plan spaces and large uniform areas. For most corporate offices in Delhi NCR between 2,000–10,000 sq ft, VRF is the recommended choice." },
              { q: "How long does HVAC installation take?", a: "For a 2,000–5,000 sq ft office, HVAC installation typically takes 2–4 weeks as part of the overall interior fit-out. Large systems (10,000+ sq ft) can take 4–8 weeks. HVAC work runs parallel to civil and MEP work in a well-coordinated project." },
              { q: "Does ITSS provide HVAC AMC (Annual Maintenance Contract)?", a: "Yes. We provide AMC for all HVAC systems we install. This covers routine maintenance visits, filter cleaning, coil servicing, refrigerant checks and emergency call-outs. AMC pricing is based on system capacity." },
              { q: "Is energy-efficient HVAC available within budget?", a: "Yes. BEE 5-star rated inverter systems are only marginally more expensive than standard units but save 30–40% on electricity bills. For commercial offices running 8–10 hours daily, the payback period on a premium inverter system is typically 18–24 months." },
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

      {/* RELATED */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold text-center text-[#0b1f3a] mb-8">Related Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { name: "MEP Services", link: "/services/mep-services-india" },
              { name: "Electrical Services", link: "/services/electrical-contractor-delhi" },
              { name: "Fire Fighting Systems", link: "/services/fire-fighting-services-delhi" },
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0b1f3a] to-[#1e3a5f] text-center">
        <Container>
          <h2 className="text-3xl font-bold text-white">Need HVAC for Your Office?</h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">Free site survey and HVAC design proposal from our commercial engineers.</p>
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
