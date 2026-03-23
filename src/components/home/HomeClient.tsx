"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";

export default function HomeClient() {

const services = [
  { title: "Office Interior Design", img: "/images/epc.png", link: "/services/commercial-interior-fitout-delhi" },
  { title: "Turnkey Interior Projects", img: "/images/epc.png", link: "/services/services-delhi" },
  { title: "Workstation Installation", img: "/images/epc.png", link: "/services/carpentry-services-delhi" },
  { title: "EPC Projects", img: "/images/epc.png", link: "/services/epc-services-delhi" },
  { title: "MEP Projects", img: "/images/mep.png", link: "/services/mep-services-india" },
  { title: "Electrical Services", img: "/images/electrical.png", link: "/services/electrical-contractor-delhi" },
  { title: "HVAC Services", img: "/images/hvac.png", link: "/services/hvac-services-delhi" },
  { title: "Networking service", img: "/images/networking.png", link: "/services/networking-services-india" },
  { title: "Fire Fighting", img: "/images/fire.png", link: "/services/fire-fighting-services-delhi" },
  { title: "Carpentry Services", img: "/images/carpentry.png", link: "/services/carpentry-services-delhi" },
];

return (
<MainLayout>

{/* HERO */}
<section className="relative min-h-screen flex items-center justify-center pt-24">
<div className="absolute inset-0 -z-20">
<Image src="/hero_images/interior-bg.png" alt="Commercial interior design Delhi NCR" fill className="object-cover opacity-40"/>
</div>
<div className="absolute inset-0 bg-white/60 -z-10"></div>

<div className="w-[90%] max-w-6xl bg-white/90 rounded-[40px] p-10 shadow-xl">

<div className="grid lg:grid-cols-2 gap-10 items-center">

<div>
<h1 className="text-4xl md:text-5xl font-bold text-[#0b1f3a]">
Office Interior Design & Fitout Solutions
<span className="block text-[#c8a951]">Delhi NCR & Pan India</span>
</h1>

<p className="mt-4 text-gray-700">
Commercial interior design, turnkey fitout, EPC, MEP, HVAC and electrical solutions.
</p>

<div className="mt-6 flex gap-4">
<Link href="/contact"><button className="px-6 py-3 bg-[#0b1f3a] text-white rounded">Get Free Consultation</button></Link>
<Link href="/services"><button className="px-6 py-3 border rounded">View Services</button></Link>
</div>

</div>

<div className="relative h-[300px]">
<Image src="/hero_images/hero-card.png" alt="office interior" fill className="object-cover rounded-xl"/>
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
      alt="About"
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
      <span className="text-[#c8a951]">India Technical Solution Services</span>
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
<p className="text-gray-500 mb-6">Trusted by companies</p>
<div className="flex justify-center gap-10">
<Image src="/logos/logo1.png" alt="logo" width={100} height={50}/>
<Image src="/logos/logo2.png" alt="logo" width={100} height={50}/>
</div>
</section>

{/* ================= SERVICES ================= */}
<section className="py-28 relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#ffffff]">

{/* Subtle background glow */}
<div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#0b1f3a]/10 blur-[120px] rounded-full -z-10" />
<div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#c8a951]/10 blur-[120px] rounded-full -z-10" />

<Container>

<h2 className="text-4xl text-center mb-16 font-bold tracking-tight text-[#0b1f3a]">
Our Services
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
Explore More
</p>
<p className="text-sm mt-1 opacity-80">
All Services →
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
<h2 className="text-3xl text-center font-bold mb-10">Why Choose ITSS</h2>

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
Our Projects
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{[
  {
    title: "Corporate Office",
    desc: "Our attendance management system tracks real-time attendance with accuracy, flexibility, and seamless payroll sync.",
    icon: "🛡️"
  },
  {
    title: "Morden Workspace",
    desc: "We provide end-to-end hiring solutions with smart sourcing, onboarding and quality talent acquisition.",
    icon: "💰"
  },
  {
    title: "Turnkey",
    desc: "Quick claim processing with automated tracking, transparency and timely disbursements.",
    icon: "🏠"
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
    <button className="mt-6 px-5 py-2 text-sm font-medium 
    bg-gray-100 rounded-lg 
    hover:bg-[#c8a951] hover:text-white transition">
      Learn More
    </button>

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
<h2 className="text-3xl text-center font-bold mb-10">Testimonials</h2>

<div className="grid md:grid-cols-3 gap-6">
<div className="p-6 bg-gray-100">Great service ⭐⭐⭐⭐⭐</div>
<div className="p-6 bg-gray-100">Highly professional ⭐⭐⭐⭐⭐</div>
<div className="p-6 bg-gray-100">Excellent work ⭐⭐⭐⭐⭐</div>
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
Our Presence Across India
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
<h2 className="text-3xl text-center font-bold mb-10">FAQ</h2>

<div className="space-y-4 max-w-2xl mx-auto">
<p><strong>What services?</strong> Interior + EPC + MEP</p>
<p><strong>Location?</strong> Delhi NCR & India</p>
</div>

</Container>
</section>

</MainLayout>
);
}
