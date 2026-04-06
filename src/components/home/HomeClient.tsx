"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";

export default function HomeClient() {

const services = [
  { title: "Office Interior Design Services", img: "/images/interior.png", link: "/services/office-interior-services" },
  { title: "Turnkey Interior Solutions", img: "/images/turnkey.png", link: "/services/Turnkey-interior-projects-delhi" },
  { title: "Workstation Installation Services", img: "/images/workstation.png", link: "/services/workstation-installation-delhi" },
  { title: "EPC Project Services", img: "/images/epc.png", link: "/services/epc-services-delhi" },
  { title: "MEP Services for Commercial Interiors", img: "/images/mep.png", link: "/services/mep-services-india" },
  { title: "Electrical Services for Office Interiors", img: "/images/electrical.png", link: "/services/electrical-contractor-delhi" },
  { title: "HVAC Services for Commercial Spaces", img: "/images/hvac.png", link: "/services/hvac-services-delhi" },
  { title: "Networking Services for Offices", img: "/images/networking.png", link: "/services/networking-services-india" },
  { title: "Fire Fighting System Installation", img: "/images/fire.png", link: "/services/fire-fighting-services-delhi" },
  { title: "Office Carpentry Services", img: "/images/carpentry.png", link: "/services/carpentry-services-delhi" },
];

return (
<MainLayout>

{/* HERO */}
<section className="relative min-h-screen flex items-center justify-center pt-24">
<div className="absolute inset-0 -z-20">
<Image src="/hero_images/interior-bg.png" alt="Commercial interior design Delhi NCR — office interior contractor ITSS" fill priority sizes="100vw" className="object-cover opacity-40"/>
</div>
<div className="absolute inset-0 bg-white/60 -z-10"></div>

<div className="w-[90%] max-w-6xl bg-white/90 rounded-[40px] p-10 shadow-xl">

<div className="grid lg:grid-cols-2 gap-10 items-center">

<div>
<h1 className="text-4xl md:text-5xl font-bold text-[#0b1f3a]">
Interior Designers
<span className="block text-[#c8a951]">in Delhi NCR</span>
</h1>

<p className="mt-4 text-gray-700">
We are leading office interior designers in Delhi NCR offering commercial interior design, 
corporate office interiors, turnkey interior solutions, EPC, MEP, HVAC and electrical services across India.
</p>

<div className="mt-6 flex gap-4">
<Link href="/contact"><button className="px-6 py-3 bg-[#0b1f3a] text-white rounded">Get Free Consultation</button></Link>
<Link href="/services"><button className="px-6 py-3 border rounded">View Commercial Interior Design Services</button></Link>
</div>

</div>

<div className="relative h-[300px]">
<Image src="/hero_images/hero-card.png" alt="modern office interior design in Delhi NCR" fill className="object-cover rounded-xl"/>
</div>

</div>

</div>
</section>

{/* ================= ABOUT ================= */}
<section className="relative py-28 overflow-hidden bg-white">

{/* Background */}
<div className="absolute inset-0 bg-gradient-to-br from-[#f9fafb] via-[#f3f4f6] to-[#ffffff] -z-10" />
<div className="absolute inset-0 opacity-[0.04] -z-10 
bg-[radial-gradient(#000_1px,transparent_1px)] 
[background-size:20px_20px]" />

{/* Glow */}
<div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#c8a951]/10 blur-[120px] rounded-full -z-10" />

<Container>

{/* MAIN GRID */}
<div className="grid md:grid-cols-2 gap-16 items-center">

  {/* IMAGE */}
  <div className="relative h-[400px]">
    <img 
      src="/images/about1.png" 
      className="w-full h-full object-cover rounded-xl shadow-lg" 
      alt="ITSS commercial interior design team Delhi NCR — office fitout experts"
    />

    {/* Floating card */}
    <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-xl p-4 w-[180px]">
      <p className="text-2xl font-bold text-[#0b1f3a]">10+</p>
      <p className="text-xs text-gray-500">Years Experience</p>
    </div>
  </div>

  {/* CONTENT */}
  <div>
    <h2 className="text-4xl font-bold text-[#0b1f3a] leading-tight">
      ABOUT US <br />
      <span className="text-[#c8a951]">Leading Office Interior Design Company in India</span>
    </h2>

    <p className="mt-6 text-gray-600">
      We deliver high-performance EPC, MEP and interior solutions 
      designed for modern businesses. Our focus is on quality, 
      precision, and long-term value.
    </p>

    {/* FEATURES */}
    <div className="mt-8 grid grid-cols-2 gap-4">

      {[
        "End-to-End Solutions",
        "Expert Team",
        "On-Time Delivery",
        "Quality Assurance"
      ].map((item, i) => (

        <div key={i} className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 bg-[#c8a951] rounded-full"></span>
          {item}
        </div>

      ))}

    </div>

    <a href="/about">
      <button className="mt-8 px-6 py-3 bg-[#0b1f3a] text-white rounded-md hover:bg-[#c8a951] transition">
        Learn More →
      </button>
    </a>
  </div>

</div>

{/* ===== PRO STATS SECTION ===== */}
<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">

  {[
    { number: "250+", label: "Projects Completed" },
    { number: "120+", label: "Happy Clients" },
    { number: "15+", label: "Cities Covered" },
    { number: "10+", label: "Years Experience" },
  ].map((stat, i) => (

    <div
      key={i}
      className="relative group p-6 rounded-xl text-center 
      bg-gradient-to-br from-[#0b1f3a] to-[#1e3a5f] 
      text-white shadow-lg overflow-hidden"
    >

      {/* Glow hover effect */}
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Number */}
      <p className="text-3xl font-bold tracking-wide relative z-10">
        {stat.number}
      </p>

      {/* Label */}
      <p className="text-sm mt-2 text-white/80 relative z-10">
        {stat.label}
      </p>

      {/* Bottom gold line */}
      <div className="mt-4 h-[2px] w-10 mx-auto bg-[#c8a951] relative z-10" />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full" />

    </div>

  ))}

</div>

</Container>
</section>

{/* CLIENT LOGOS */}
<section className="py-16 bg-white text-center">
<p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-10">Trusted by India&apos;s leading companies</p>

<div className="max-w-5xl mx-auto px-4">
  <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 items-center justify-items-center">
    {[
      { src: "/clients/blinkit.png",       name: "Blinkit" },
      { src: "/clients/zepto.png",          name: "Zepto" },
      { src: "/clients/zomato.png",         name: "Zomato" },
      { src: "/clients/tech_mahindra.png",  name: "Tech Mahindra" },
      { src: "/clients/tata_1mg.png",       name: "Tata 1mg" },
      { src: "/clients/godrej.png",         name: "Godrej" },
      { src: "/clients/adani.png",          name: "Adani" },
      { src: "/clients/hitachi.png",        name: "Hitachi" },
      { src: "/clients/paytm.png",          name: "Paytm" },
      { src: "/clients/hilton.png",         name: "Hilton" },
      { src: "/clients/samsung_sds.png",    name: "Samsung SDS" },
      { src: "/clients/nagarro.png",        name: "Nagarro" },
      { src: "/clients/allianz.png",        name: "Allianz" },
      { src: "/clients/dtdc.png",           name: "DTDC" },
      { src: "/clients/shoppers_stop.png",  name: "Shoppers Stop" },
      { src: "/clients/indian_express.png", name: "The Indian Express" },
    ].map((client) => (
      <div key={client.name} className="w-full flex items-center justify-center">
        <Image
          src={client.src}
          alt={`${client.name} — ITSS office interior client Delhi NCR`}
          width={90}
          height={45}
          className="object-contain grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition duration-300"
        />
      </div>
    ))}
  </div>
</div>

<p className="mt-8 text-sm text-gray-400">
  250+ projects completed across 15+ cities in India
</p>
</section>

{/* ================= SERVICES ================= */}
<section className="py-28 relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#ffffff]">

{/* Subtle background glow */}
<div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#0b1f3a]/10 blur-[120px] rounded-full -z-10" />
<div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#c8a951]/10 blur-[120px] rounded-full -z-10" />

<Container>

<h2 className="text-4xl text-center mb-16 font-bold tracking-tight text-[#0b1f3a]">
Our Commercial Interior Design & Turnkey Services
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

{services.map((s,i)=>(

<Link 
  key={i} 
  href={s.link} 
  className="group relative block 
  transition duration-500 
  hover:-translate-y-3"
>

{/* Card */}
<div className="relative h-[200px] rounded-2xl overflow-hidden 
border border-white/30 
group-hover:border-[#c8a951]/50 
transition duration-500">

<Image 
src={s.img} 
alt={s.title} 
fill
className="object-cover group-hover:scale-110 transition duration-700"
/>

{/* Glow border */}
  <div className="absolute inset-0 rounded-2xl 
  border border-transparent 
  group-hover:border-[#c8a951]/60 
  group-hover:shadow-[0_0_25px_rgba(200,169,81,0.4)] 
  transition duration-500" />

{/* Overlay gradient */}
<div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />

{/* Top accent line */}
<div className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#c8a951] to-orange-400 group-hover:w-full transition-all duration-500" />

</div>

{/* Content Card */}
<div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-[85%] 
bg-white/95 backdrop-blur-xl 
shadow-xl rounded-xl px-4 py-3 text-center 
group-hover:-translate-y-2 transition duration-500 border border-gray-100">

<h3 className="text-sm font-semibold tracking-wide text-[#0b1f3a] group-hover:text-[#c8a951] transition">
{s.title}
</h3>

</div>

</Link>

))}

{/* CTA */}
<Link href="/services">
<div className="group relative h-[200px] rounded-2xl 
bg-gradient-to-br from-[#0b1f3a] via-[#1e3a5f] to-[#c8a951] 
flex items-center justify-center cursor-pointer overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)] transition">

{/* Shine effect */}
<div className="absolute w-[200%] h-[200%] bg-white/10 rotate-45 group-hover:translate-x-full transition duration-700"></div>

<div className="relative text-center text-white">
<p className="text-lg font-semibold tracking-wide">
Explore Commercial Interior Services
</p>
<p className="text-sm mt-1 opacity-80">
View All Interior Design Services →
</p>
</div>

</div>
</Link>

</div>

</Container>
</section>

{/* WHY US */}
<section className="py-20 bg-white">
<Container>
<h2 className="text-3xl text-center font-bold mb-10">Why Choose ITSS (Interior Decor)</h2>

<div className="grid md:grid-cols-4 gap-6 text-center">
{["End-to-End Solutions","Expert Team","On-Time Delivery","Quality Assurance"].map((t,i)=>(
<div key={i} className="p-6 bg-gray-100 rounded">{t}</div>
))}
</div>

</Container>
</section>

{/* ================= PROJECTS / SERVICES ================= */}
<section className="py-28 bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ffffff]">

<Container>

<h2 className="text-4xl text-center mb-16 font-bold text-[#0b1f3a]">
Our Office Interior Design Projects
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{[
  {
    title: "Corporate Office Fit-Out",
    desc: "Complete corporate office interiors — workstations, cabins, conference rooms, reception and MEP — delivered on time and within budget across Delhi NCR.",
    icon: "🏢",
    link: "/services/office-interior-services"
  },
  {
    title: "Modern Workspace Design",
    desc: "Open-plan and hybrid workspaces designed for collaboration, productivity and brand identity. Trusted by Blinkit, Zepto, Zomato and 120+ companies.",
    icon: "💼",
    link: "/services/office-interior-services"
  },
  {
    title: "Turnkey Interior Projects",
    desc: "Single-point responsibility from design to handover — civil, MEP, HVAC, electrical, furniture and finishing. Zero client hassle, 100% delivery.",
    icon: "🔑",
    link: "/services/Turnkey-interior-projects-delhi"
  },
].map((item, i) => (

<div key={i} className="group">

  <div className="relative bg-white rounded-2xl p-8 h-full 
  shadow-md hover:shadow-2xl transition duration-500 overflow-hidden">

    {/* TOP CORNER DESIGN */}
    <div className="absolute top-0 right-0 w-28 h-28 
    bg-gradient-to-br from-[#0b1f3a] to-[#1e3a5f] 
    rounded-bl-[100px] flex items-center justify-center">

      <span className="text-white text-2xl">
        {item.icon}
      </span>

    </div>

    {/* CONTENT */}
    <h3 className="text-xl font-semibold text-[#0b1f3a] mt-6 group-hover:text-[#c8a951] transition">
      {item.title}
    </h3>

    <p className="text-gray-600 mt-4 leading-relaxed">
      {item.desc}
    </p>

    {/* BUTTON */}
    <Link href={item.link}>
      <button className="mt-6 px-5 py-2 text-sm font-medium 
      bg-gray-100 rounded-lg 
      hover:bg-[#c8a951] hover:text-white transition">
        Learn More
      </button>
    </Link>

    {/* BORDER GLOW */}
    <div className="absolute inset-0 rounded-2xl 
    border border-transparent 
    group-hover:border-[#c8a951]/50 
    group-hover:shadow-[0_0_30px_rgba(200,169,81,0.2)] 
    transition duration-500" />

  </div>

</div>

))}

</div>

</Container>
</section>

{/* TESTIMONIAL */}
<section className="py-20 bg-white">
<Container>
<h2 className="text-3xl text-center font-bold mb-4">What Our Clients Say</h2>
<p className="text-center text-gray-500 mb-12">Trusted by 120+ companies across Delhi NCR and India</p>

<div className="grid md:grid-cols-3 gap-6">

{[
  {
    name: "Priya Sharma",
    role: "Facilities Manager",
    company: "Blinkit",
    city: "Gurgaon",
    review: "ITSS delivered our 15,000 sq ft warehouse office in just 42 days. Civil, MEP, workstations — everything was handled seamlessly. Their project management was exceptional.",
    project: "Warehouse Office Fit-Out, Gurgaon",
    rating: 5,
  },
  {
    name: "Rajesh Verma",
    role: "Operations Head",
    company: "Tech Mahindra",
    city: "Noida",
    review: "The turnkey execution was flawless. From design to handover, ITSS maintained quality at every stage. Our new office has completely transformed our team's productivity.",
    project: "Corporate Office Interior, Noida",
    rating: 5,
  },
  {
    name: "Anita Kapoor",
    role: "Admin Director",
    company: "Tata 1mg",
    city: "Delhi",
    review: "Very professional team. HVAC, electrical and interior — all completed within the agreed timeline. We've already recommended ITSS to three of our sister companies.",
    project: "Office Renovation, Delhi",
    rating: 5,
  },
].map((t, i) => (

  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">

    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {Array(t.rating).fill(0).map((_, s) => (
        <span key={s} className="text-[#c8a951] text-lg">★</span>
      ))}
    </div>

    {/* Review */}
    <p className="text-gray-600 leading-relaxed text-sm italic">
      &ldquo;{t.review}&rdquo;
    </p>

    {/* Project tag */}
    <div className="mt-4 mb-4">
      <span className="text-xs bg-[#0b1f3a]/5 text-[#0b1f3a] px-3 py-1 rounded-full">
        {t.project}
      </span>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-100 pt-4 flex items-center gap-3">

      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0b1f3a] to-[#1e3a5f] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
        {t.name.split(' ').map(n => n[0]).join('')}
      </div>

      <div>
        <p className="font-semibold text-[#0b1f3a] text-sm">{t.name}</p>
        <p className="text-xs text-gray-500">{t.role}, {t.company} — {t.city}</p>
      </div>

    </div>

  </div>

))}

</div>
</Container>
</section>

{/* ================= LOCATIONS ================= */}
<section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#a9f9ff] via-[#f1f5f9] to-[#ffffff]">

{/* Background Glow */}
<div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#0b1f3a]/10 blur-[120px] rounded-full -z-10" />
<div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#c8a951]/15 blur-[120px] rounded-full -z-10" />

<Container>

<h2 className="text-4xl text-center mb-14 font-bold text-[#0b1f3a]">
Office Interior Designers Across Delhi, Gurgaon, Noida, Mumbai and Pan India
</h2>

{/* GRID */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

{[
  { name: "Delhi", link: "/office-interior-contractor-delhi" },
  { name: "Gurgaon", link: "/office-interior-contractor-gurgaon" },
  { name: "Noida", link: "/office-interior-contractor-noida" },
  { name: "Mumbai", link: "/office-interior-contractor-mumbai" },
].map((city, i) => (

<Link key={i} href={city.link}>

<div className="group relative bg-white/90 backdrop-blur-xl 
border border-white/40 rounded-2xl p-6 text-center 
shadow-md hover:shadow-2xl hover:-translate-y-3 
transition duration-500 cursor-pointer overflow-hidden">

{/* ICON */}
<div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center 
rounded-full bg-gradient-to-br from-[#0b1f3a] to-[#1e3a5f] 
text-white text-lg shadow-md group-hover:scale-110 transition">
📍
</div>

{/* CITY */}
<p className="font-semibold text-[#0b1f3a] group-hover:text-[#c8a951] transition">
{city.name}
</p>

{/* SUBTEXT */}
<p className="text-xs text-gray-500 mt-1">
Interior Solutions
</p>

{/* TOP BORDER ANIMATION */}
<div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#c8a951] to-orange-400 group-hover:w-full transition-all duration-500" />

{/* BORDER GLOW */}
<div className="absolute inset-0 rounded-2xl 
border border-transparent 
group-hover:border-[#c8a951]/40 
group-hover:shadow-[0_0_25px_rgba(200,169,81,0.2)] 
transition duration-500" />

</div>

</Link>

))}

</div>

</Container>
</section>


{/* CTA */}
<section className="py-20 text-center bg-white">
<h2 className="text-3xl font-bold">Start Your Project</h2>
<Link href="/contact"><button className="mt-4 px-6 py-3 bg-[#c8a951] text-white rounded">Contact Us</button></Link>
</section>

{/* FAQ */}
<section className="py-20 bg-gray-50">
<Container>
<h2 className="text-3xl text-center font-bold mb-4">Frequently Asked Questions</h2>
<p className="text-center text-gray-500 mb-12">Sabse common questions about our office interior services</p>

<div className="max-w-3xl mx-auto space-y-4">
{[
  {
    q: "Office interior fit-out mein kitna time lagta hai Delhi NCR mein?",
    a: "Project size pe depend karta hai. 1,000–3,000 sq ft office: 30–45 days. 5,000–10,000 sq ft: 60–75 days. 10,000 sq ft se bada: 90+ days. Hum har project ke liye clear timeline pehle se dete hain."
  },
  {
    q: "1,000 sq ft commercial office interior ka approximate cost kya hoga?",
    a: "Delhi NCR mein basic office interior ₹800–1,200 per sq ft se shuru hota hai. Premium / brand-specific interiors ₹1,500–2,500+ per sq ft tak ja sakte hain. Final cost depend karta hai finishes, MEP scope aur furniture requirements pe. Free consultation ke liye contact karo."
  },
  {
    q: "Kya aap turnkey projects complete karte ho — design se lekar handover tak?",
    a: "Haan, ITSS complete turnkey interior execution karta hai — concept design, civil work, MEP (Mechanical, Electrical, Plumbing), HVAC, networking, fire-fighting, furniture aur final handover. Client ko kisi aur contractor se deal nahi karna padta."
  },
  {
    q: "MEP services kya hoti hain aur kya yeh interior project mein include hoti hain?",
    a: "MEP matlab Mechanical, Electrical aur Plumbing systems. Commercial offices ke liye yeh mandatory hai — HVAC ducting, electrical wiring, plumbing, data networking aur fire alarm sab MEP ke under aate hain. Hamare turnkey projects mein MEP fully included hoti hai."
  },
  {
    q: "Kya aap Delhi NCR ke bahar bhi services dete ho?",
    a: "Haan, ITSS pan-India services deta hai — Delhi, Gurgaon, Noida, Mumbai, Bangalore, Hyderabad, Chennai, Pune aur 15+ cities mein projects complete kiye hain. Site survey ke liye team travel karti hai."
  },
  {
    q: "Commercial interior ke liye MCD ya local authority se permission chahiye?",
    a: "Haan, certain changes ke liye local body approvals zaruri hote hain — fire NOC, electrical approval, structural changes ke liye. ITSS ka team in approvals ki process mein guide karta hai aur required documentation mein help karta hai."
  },
  {
    q: "Kya aap sirf design dete ho ya execution bhi karte ho?",
    a: "Dono. ITSS design-only projects bhi karta hai aur full execution projects bhi. Sabse popular option turnkey hai — design + execution ek hi team se. Is se coordination simple rehta hai aur delays kam hote hain."
  },
  {
    q: "Kya portfolio ya past projects dekh sakte hain?",
    a: "Bilkul. Hamare portfolio page pe Godrej, Battery Smart, aur multiple corporate projects ke visuals hain. Site visit ke liye already completed projects bhi arrange ki ja sakti hain. Contact karo aur hum relevant project examples share karenge."
  },
].map((faq, i) => (

  <details key={i} className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
    <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-medium text-[#0b1f3a] gap-4">
      <span>{faq.q}</span>
      <span className="text-[#c8a951] text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
    </summary>
    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
      {faq.a}
    </div>
  </details>

))}
</div>

</Container>
</section>

</MainLayout>
);
}
