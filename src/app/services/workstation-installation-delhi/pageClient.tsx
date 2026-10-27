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
          <h1 className="text-4xl md:text-5xl font-bold text-white">Workstation Installation Services in Delhi NCR</h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg">Professional modular workstation installation, cubicle setup and office furniture installation for corporate spaces across Delhi, Noida, Gurgaon and pan India. 250+ projects delivered.</p>
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
                src="/service_image/workstation.jpg"
                alt="Workstation installation services Delhi NCR — modular office setup by ITSS"
                width={580}
                height={420}
                className="rounded-2xl shadow-xl w-full"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0b1f3a] mb-6">Efficient Modular Workstation Setup & Office Configuration</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Workstation installation sounds straightforward — but in reality, a 100-seat office installation involves precise measurements, cable management planning, power distribution coordination and alignment across hundreds of individual components. Poor installation leads to wobbly panels, exposed cables, misaligned screens and safety hazards.</p>
              <p className="text-gray-600 leading-relaxed mb-6">ITSS has installed 50,000+ workstations across Delhi NCR for clients including Blinkit, Zomato, DTDC and 120+ other companies. Our installation teams work to a defined process — unboxing, assembly, alignment, cable management and final inspection.</p>
              <div className="space-y-3">
                {["50,000+ workstations installed across India", "Installation teams trained by Godrej, Featherlite, Herman Miller", "Integrated cable management in all setups", "Power and data coordination with electrical team", "Final ergonomic adjustment for each workstation"].map((item, i) => (
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
          <h2 className="text-3xl font-bold text-center text-[#0b1f3a] mb-12">Our Workstation Installation Services Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{ name: "Modular Workstation Setup", desc: "Linear, L-shaped and cluster workstations — disassembly of old, assembly and alignment of new with privacy screens." }, { name: "Cubicle & Partition Systems", desc: "Height-adjustable partition cubicle systems from 4ft to full-height for privacy and noise reduction." }, { name: "Executive Desk Installation", desc: "Director tables, manager desks and credenzas with proper alignment and cable routing." }, { name: "Ergonomic Chairs Setup", desc: "Office chair setup and adjustment — seat height, lumbar support, armrest positioning for each user." }, { name: "Cable Management", desc: "Under-desk cable trays, desk grommets, power units and cable spines for clean, safe workstation setups." }, { name: "Relocation Services", desc: "Disassembly, transport and reinstallation of existing office furniture at new premises." }].map((s, i) => (
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
            {[{ q: "How long does workstation installation take for 100 seats?", a: "A 100-seat installation with standard L-shaped workstations typically takes 3–5 days with a team of 8–10 installers. Timeline depends on workstation complexity, access to the site and whether old furniture needs to be removed." }, { q: "Which workstation brands do you install?", a: "We install all major brands — Godrej, Featherlite, Herman Miller, Steelcase, Durian, Nilkamal and custom-made modular systems. Our installation teams are brand-trained for leading manufacturers." }, { q: "What is the cost of workstation installation per seat?", a: "Installation labour for standard modular workstations is approximately ₹800–1,500 per workstation. If you're also procuring the workstations through ITSS, we provide supply-and-install packages starting from ₹8,000 per seat." }, { q: "Do you provide workstation installation outside Delhi NCR?", a: "Yes. We provide workstation installation services pan India. For large-volume requirements in cities like Mumbai, Bangalore or Hyderabad, we mobilise teams to site." }].map((f, i) => (
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
            {[{ name: "Office Interior Design", link: "/services/office-interior-services" }, { name: "Carpentry Services", link: "/services/carpentry-services-delhi" }, { name: "Electrical Services", link: "/services/electrical-contractor-delhi" }, { name: "Turnkey Interior", link: "/services/Turnkey-interior-projects-delhi" }].map((s, i) => (
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
