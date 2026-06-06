"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MainLayout } from "@/components/layout/MainLayout";
import { CheckCircle, ArrowRight, MapPin, Phone } from "lucide-react";

export default function PageClient() {
  const areas = ["BKC (Bandra Kurla Complex)", "Lower Parel", "Andheri East", "Powai", "Nariman Point", "Worli", "Malad West", "Navi Mumbai", "Thane", "Goregaon", "Vikhroli", "Kurla"];

  return (
    <MainLayout>
      <section className="bg-white">

        <section className="py-28 bg-gradient-to-br from-[#0b1f3a] to-[#1e3a5f] text-center">
          <Container>
            <p className="text-[#c8a951] text-sm font-semibold uppercase tracking-widest mb-4">Mumbai&apos;s Trusted Interior Partner</p>
            <h1 className="text-5xl font-bold text-white">Office Interior Designers in Mumbai</h1>
            <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg">
              Commercial interior design, turnkey fitouts, MEP, HVAC and EPC for corporate offices in Mumbai — BKC, Lower Parel, Andheri, Powai and Navi Mumbai.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/contact"><button className="px-8 py-4 bg-[#c8a951] text-white rounded-full flex items-center gap-2 hover:bg-[#b8992f] transition font-medium">Get Free Consultation <ArrowRight size={18}/></button></Link>
              <Link href="/portfolio"><button className="px-8 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition">View Projects</button></Link>
            </div>
          </Container>
        </section>

        <section className="py-14 bg-white border-b border-gray-100"><Container><div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">{[{num:"250+",label:"Projects Pan-India"},{num:"10+",label:"Years Experience"},{num:"30+",label:"Mumbai Projects"},{num:"15+",label:"Cities Covered"}].map((item,i)=>(<div key={i} className="p-6 bg-gray-50 rounded-2xl"><p className="text-3xl font-bold text-[#0b1f3a]">{item.num}</p><p className="text-gray-500 text-sm mt-1">{item.label}</p></div>))}</div></Container></section>

        <section className="py-20"><Container><div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0b1f3a] mb-6">Pan-India Capability, Mumbai Delivery</h2>
            <p className="text-gray-600 mb-4">Our Delhi NCR base allows us to mobilise expert teams to Mumbai for commercial interior projects. We&apos;ve executed office fitouts in BKC, Lower Parel and Andheri for pan-India clients.</p>
            <p className="text-gray-600 mb-6">BMC approvals, fire NOC, Maharashtra electrical board compliance — our team navigates all Mumbai-specific requirements as part of our turnkey scope.</p>
            <div className="space-y-3">{["BMC and MCGM compliance assistance","Maharashtra fire NOC and electrical approvals","Dedicated Mumbai project coordination team","Fixed-price, fixed-timeline contracts","Pan-India client references available"].map((item,i)=>(<div key={i} className="flex items-start gap-3"><CheckCircle className="text-[#c8a951] mt-0.5 flex-shrink-0" size={18}/><span className="text-gray-700 text-sm">{item}</span></div>))}</div>
          </div>
          <div className="bg-[#0b1f3a] rounded-2xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-6 text-[#c8a951]">Areas We Serve in Mumbai</h3>
            <div className="grid grid-cols-2 gap-3">{areas.map((area,i)=><div key={i} className="flex items-center gap-2 text-sm text-white/80"><MapPin size={12} className="text-[#c8a951] flex-shrink-0"/>{area}</div>)}</div>
            <div className="mt-6 pt-6 border-t border-white/20"><p className="text-sm text-white/60 mb-1">Call us directly</p><a href="tel:+919718371994" className="flex items-center gap-2 text-[#c8a951] font-medium"><Phone size={16}/> +91 97183 71994</a></div>
          </div>
        </div></Container></section>

        <section className="py-20 bg-gray-50"><Container><h2 className="text-3xl text-center font-bold text-[#0b1f3a] mb-12">Our Services in Mumbai</h2><div className="grid md:grid-cols-3 gap-6">{[{name:"Office Interior Design",link:"/services/office-interior-services",desc:"Workspace planning, cabins, reception, conference rooms"},{name:"Turnkey Fitout",link:"/services/Turnkey-interior-projects-delhi",desc:"Design to handover — single-point responsibility"},{name:"MEP Solutions",link:"/services/mep-services-india",desc:"Mechanical, electrical and plumbing systems"},{name:"HVAC Systems",link:"/services/hvac-services-delhi",desc:"Air conditioning, ventilation and ducting"},{name:"EPC Services",link:"/services/epc-services-delhi",desc:"Engineering, procurement and construction"},{name:"Fire Safety",link:"/services/fire-fighting-services-delhi",desc:"Fire alarms, sprinklers, fire NOC"}].map((s,i)=><Link key={i} href={s.link}><div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#c8a951] hover:shadow-lg transition duration-300 group"><h3 className="font-semibold text-[#0b1f3a] group-hover:text-[#c8a951] transition mb-1">{s.name}</h3><p className="text-sm text-gray-500">{s.desc}</p></div></Link>)}</div></Container></section>

        <section className="py-20"><Container><h2 className="text-3xl text-center font-bold text-[#0b1f3a] mb-10">FAQs — Office Interiors in Mumbai</h2><div className="max-w-3xl mx-auto space-y-3">{[{q:"Can ITSS execute projects in Mumbai from Delhi?",a:"Yes. We regularly execute pan-India projects. Our Mumbai projects are handled by a dedicated coordination team. We mobilise for site survey within 48–72 hours."},{q:"How long does a Mumbai office interior project take?",a:"1,000–3,000 sq ft: 35–50 days. 5,000+ sq ft: 70–100 days. Mumbai logistics can add 5–10 days vs NCR timelines — we account for this in planning."},{q:"Do you handle BMC approvals for fit-outs in Mumbai?",a:"Yes. BMC, fire NOC, Maharashtra electrical board approvals — our team handles the documentation and follow-up as part of turnkey scope."},{q:"What is the cost of office interior in Mumbai?",a:"₹900–1,300/sq ft basic to ₹1,600–2,800+/sq ft premium. Mumbai material logistics add slight premium vs NCR — we give transparent estimates upfront."}].map((f,i)=>(<details key={i} className="group bg-gray-50 border border-gray-100 rounded-xl overflow-hidden"><summary className="flex items-center justify-between p-5 cursor-pointer list-none font-medium text-[#0b1f3a] gap-4"><span className="text-sm">{f.q}</span><span className="text-[#c8a951] text-xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span></summary><div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">{f.a}</div></details>))}</div></Container></section>

        <section className="py-16 bg-white"><Container><h2 className="text-xl text-center font-semibold text-[#0b1f3a] mb-8">Also Serving Nearby Locations</h2><div className="flex justify-center flex-wrap gap-4">{[{name:"Delhi",link:"/office-interior-contractor-delhi"},{name:"Gurgaon",link:"/office-interior-contractor-gurgaon"},{name:"Noida",link:"/office-interior-contractor-noida"}].map((loc,i)=><Link key={i} href={loc.link}><div className="px-6 py-3 bg-gray-50 rounded-full border border-gray-200 hover:bg-[#0b1f3a] hover:text-white hover:border-[#0b1f3a] transition text-sm font-medium text-gray-700">{loc.name}</div></Link>)}</div></Container></section>

        <section className="py-24 bg-gradient-to-br from-[#0b1f3a] to-[#1e3a5f] text-center"><Container><h2 className="text-3xl font-bold text-white">Start Your Mumbai Office Interior Project</h2><p className="mt-4 text-white/70 max-w-xl mx-auto">Pan-India capability, Mumbai delivery. Free consultation from our commercial interior experts.</p><Link href="/contact"><button className="mt-8 px-10 py-4 bg-[#c8a951] text-white rounded-full hover:bg-[#b8992f] transition font-medium">Get Free Quote Today</button></Link></Container></section>

      </section>
    </MainLayout>
  );
}
