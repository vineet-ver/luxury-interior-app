"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";

export default function HomeClient() {

const services = [
  { title: "EPC Projects", img: "/images/epc.png", link: "/services/commercial-interior-contractor" },
  { title: "MEP Projects", img: "/images/mep.png", link: "/services/turnkey-interior-contractor" },
  { title: "Electrical Services", img: "/images/electrical.png", link: "/services/office-interior-contractor" },
  { title: "HVAC Services", img: "/images/hvac.png", link: "/services/office-interior-contractor" },
  { title: "IT & Networking", img: "/images/networking.png", link: "/services/turnkey-interior-contractor" },
  { title: "Fire Fighting", img: "/images/fire.png", link: "/services/commercial-interior-contractor" },
  { title: "Carpentry Services", img: "/images/carpentry.png", link: "/services/office-interior-contractor" },
];

return (
<MainLayout>

{/* ================= HERO ================= */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-15">

{/* Background Image */}
<div className="absolute inset-0 -z-20">
<Image
  src="/hero_images/interior-bg.png"
  alt="Modern office interior design"
  fill
  priority
  sizes="100vw"
  className="object-cover opacity-60"
/>
</div>

{/* Glow Effect */}
<div className="absolute -z-10 w-[500px] h-[500px] bg-[#c8a951]/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />

<motion.div
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="relative z-10 w-[90%] max-w-5xl 
bg-gradient-to-br from-[#dff4f6] via-[#eafafa] to-[#ffffff] 
rounded-[50px] p-6 md:p-12 pb-20 
shadow-[0_20px_80px_rgba(0,0,0,0.12)] 
border border-white/40 backdrop-blur-xl"
>

{/* Glass Overlay */}
<div className="absolute inset-0 rounded-[50px] bg-white/30 backdrop-blur-xl pointer-events-none" />

<div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">

{/* LEFT */}
<div>
<p className="text-sm text-gray-500 mb-3">
Premium Interior Solutions
</p>

<h1 className="text-5xl font-bold text-[#0b1f3a] leading-tight">
Commercial Interior Design
<span className="block text-[#c8a951]">
for Modern Workspaces
</span>
</h1>

<Link href="/contact">
<button className="mt-8 px-6 py-3 bg-[#0b1f3a] text-white rounded-md hover:bg-[#c8a951] transition">
Get Free Consultation →
</button>
</Link>
</div>

{/* RIGHT IMAGE */}
<div className="relative h-[260px] md:h-[300px] flex justify-center">

<div className="w-[85%] h-full p-[6px] rounded-[30px] 
bg-gradient-to-tr from-[#ffffff] via-[#e6f7f9] to-[#d0ecef] 
shadow-[0_10px_40px_rgba(0,0,0,0.15)]">

<div className="relative w-full h-full overflow-hidden rounded-[25px]">
<Image
  src="/hero_images/hero-card.png"
  alt="Office interior workspace"
  fill
  sizes="(max-width:768px) 100vw, 50vw"
  className="object-cover hover:scale-105 transition duration-700"
/>
</div>

</div>

{/* Rating */}
<div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl text-xs shadow-lg border border-white/50">
⭐⭐⭐⭐⭐
<p className="text-black/60 text-[10px]">
Trusted by clients
</p>
</div>

</div>

</div>

{/* FLOATING FEATURES */}
<div className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] 
bg-white/80 backdrop-blur-xl 
rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] 
px-6 py-4 flex flex-wrap gap-6 justify-center border border-white/50">

{["Eco","Pro","Quality","Custom"].map((item, i) => (
<div key={item} className="text-center">
<p className="text-[#c8a951] font-bold text-xs">
0{i + 1}
</p>
<p className="text-[10px] text-black/60">
{item}
</p>
</div>
))}

</div>

</motion.div>
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

{/* ================= CTA ================= */}
<section className="relative py-20 overflow-hidden">

{/* Background Gradient */}
<div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f8f6f2] via-[#f3efe7] to-[#ebe6dc]" />

{/* Glow */}
<div className="absolute left-1/2 -translate-x-1/2 top-0 w-[400px] h-[400px] bg-[#c8a951]/20 blur-[120px] rounded-full -z-10" />

<Container>

<div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-[#eef4ff] via-[#e6efff] to-[#dce7ff] backdrop-blur-xl border bg-gradient-to-br from-[#eef4ff] via-[#e6efff] to-[#dce7ff] shadow-[0_20px_60px_rgba(0,0,0,0.1)] rounded-[30px] p-10">

<h2 className="text-2xl md:text-3xl font-bold text-black">
Let’s Build Your Next Project
</h2>

<p className="mt-3 text-black/60">
Get in touch with our team today
</p>

<Link href="/contact">
<button className="mt-6 px-6 py-3 bg-[#c8a951] text-white rounded-full hover:scale-105 transition">
Get Free Consultation →
</button>
</Link>

</div>

</Container>
</section>


</MainLayout>
);
}
