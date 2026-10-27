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
          <h1 className="text-4xl md:text-5xl font-bold text-white">Fire Fighting Services in Delhi NCR</h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg">Complete fire safety systems for commercial offices — fire alarms, sprinklers, hydrants, fire NOC compliance and annual maintenance. NBC 2016 and local fire department compliant installations.</p>
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
                src="/service_image/fire-fighting1.jpg"
                alt="Fire fighting services Delhi NCR — fire safety systems for commercial offices by ITSS"
                width={580}
                height={420}
                className="rounded-2xl shadow-xl w-full"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0b1f3a] mb-6">NBC-Compliant Fire Safety Systems for Commercial Buildings</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Fire safety is not optional in commercial buildings — it's a legal requirement. The National Building Code 2016 and Delhi Fire Service regulations mandate specific fire detection, suppression and evacuation systems based on building height, occupancy and floor area.</p>
              <p className="text-gray-600 leading-relaxed mb-6">ITSS designs and installs complete fire safety systems that comply with NBC 2016, Delhi Fire Service requirements and IS standards. Our team handles the fire NOC documentation and inspection process, ensuring your building gets cleared without delays.</p>
              <div className="space-y-3">
                {["NBC 2016 and Delhi Fire Service compliant", "Fire NOC documentation and application support", "In-house MEP team for integrated installation", "NFPA and IS 3844 compliant sprinkler systems", "Post-installation maintenance contracts available"].map((item, i) => (
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
          <h2 className="text-3xl font-bold text-center text-[#0b1f3a] mb-12">Our Fire Fighting Services Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{ name: "Fire Alarm Systems", desc: "Addressable and conventional fire alarm panels, smoke detectors, heat detectors, manual call points and alarm sounders." }, { name: "Sprinkler Systems", desc: "Wet pipe sprinkler systems, dry pipe systems, deluge systems per NFPA 13 and IS 15105 for offices and warehouses." }, { name: "Fire Hydrant Systems", desc: "Internal and external hydrant systems, hose reels, landing valves, fire pump sets and underground water tanks." }, { name: "Fire Suppression (Gas)", desc: "Clean agent (FM-200, Novec) and CO2 suppression systems for server rooms, control rooms and archive areas." }, { name: "Fire NOC Assistance", desc: "Documentation preparation, DFO inspection coordination, NOC application follow-up and compliance certification." }, { name: "Fire Safety AMC", desc: "Annual maintenance contracts — testing, inspection, recharging and compliance certification for all fire systems." }].map((s, i) => (
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
            {[{ q: "Is fire NOC mandatory for commercial offices in Delhi?", a: "Yes. All commercial establishments in Delhi above 15 metres height or 500 sqm floor area require fire NOC from Delhi Fire Service before occupying the premises." }, { q: "What fire systems are required for a typical office?", a: "A standard commercial office requires: smoke detectors, manual call points, fire alarm panel, fire extinguishers, emergency lighting and exit signage at minimum. Buildings above 15m also need sprinklers, hydrants and fire pumps." }, { q: "How long does fire NOC take in Delhi?", a: "Typically 30–60 days after installation is complete and DFO inspection is passed. We help prepare all required documents (layout drawings, calculations, equipment data sheets) to minimise delays." }, { q: "Can ITSS retrofit fire systems in an existing office?", a: "Yes. We regularly add or upgrade fire safety systems in existing offices — additional detectors, new alarm panels, sprinkler extensions and compliance upgrades." }].map((f, i) => (
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
            {[{ name: "MEP Services", link: "/services/mep-services-india" }, { name: "Electrical Services", link: "/services/electrical-contractor-delhi" }, { name: "HVAC Services", link: "/services/hvac-services-delhi" }, { name: "EPC Services", link: "/services/epc-services-delhi" }].map((s, i) => (
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
