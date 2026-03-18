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
<p className="text-sm text-black/50 mb-3">
Premium Interior Solutions
</p>

<h1 className="text-2xl md:text-5xl font-bold leading-tight text-black">
Commercial Interior Design
<span className="block italic text-black/70">
for Modern Workspaces
</span>
</h1>

<Link href="/contact">
<button className="mt-6 px-6 py-3 bg-[#c8a951] text-white rounded-full text-sm hover:scale-105 transition">
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
<section className="py-24 px-6 bg-gradient-to-br from-[#f5f3ef] via-[#f2efe9] to-[#ebe7df]">
<Container>

<div className="grid md:grid-cols-2 gap-12 items-center">

<div>
<h2 className="text-[3rem] md:text-[3.5rem] font-bold leading-[1.1] text-black">
ABOUT <br /> US
</h2>

<p className="mt-6 text-black/70 max-w-md">
We deliver modern commercial interiors with engineering precision 
and premium design across India.
</p>

<Link href="/about">
<button className="mt-6 px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
Read More →
</button>
</Link>

</div>

<div className="grid grid-cols-2 gap-4">

<div className="relative h-[180px] rounded-2xl overflow-hidden">
<Image src="/images/about1.png" alt="Interior" fill className="object-cover"/>
</div>

<div className="relative h-[180px] rounded-2xl overflow-hidden">
<Image src="/images/about2.png" alt="Interior" fill className="object-cover"/>
</div>

</div>

</div>

<div className="mt-16 grid md:grid-cols-2 gap-10 items-center">

<div className="relative h-[220px] rounded-2xl overflow-hidden">
<Image src="/images/about3.png" alt="Philosophy" fill className="object-cover"/>
</div>

<div>
<h3 className="text-xl font-semibold mb-3">
Our Philosophy
</h3>

<p className="text-black/70">
We create functional, aesthetic and high-performance workspaces 
that elevate business environments.
</p>
</div>

</div>

</Container>
</section>

{/* ================= SERVICES ================= */}
<section className="py-28 bg-[#f8f6f2]">
<Container>

<h2 className="text-4xl text-center mb-16 font-bold tracking-tight">
Our Services
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

{services.map((s,i)=>(

<Link key={i} href={s.link} className="group relative block">

<div className="relative h-[200px] rounded-2xl overflow-hidden">

<Image 
src={s.img} 
alt={s.title} 
fill
className="object-cover group-hover:scale-110 transition duration-700"
/>

<div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500" />

</div>

<div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-[85%] bg-white/90 backdrop-blur-lg shadow-xl rounded-xl px-4 py-3 text-center group-hover:-translate-y-2 transition duration-500">

<h3 className="text-sm font-semibold tracking-wide">
{s.title}
</h3>

</div>

</Link>

))}

{/* CTA */}
<Link href="/services">
<div className="group relative h-[200px] rounded-2xl bg-gradient-to-br from-[#c8a951] to-[#a8893d] flex items-center justify-center cursor-pointer overflow-hidden">

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

{/* ================= PROJECTS ================= */}
<section className="relative pt-16 pb-16 md:pt-20 md:pb-28 overflow-hidden">

{/* 🎨 ULTRA PREMIUM BACKGROUND */}
<div className="absolute inset-0 -z-10 overflow-hidden">

  {/* Animated gradient */}
  <div className="absolute inset-0 bg-[linear-gradient(120deg,#f8f6f2,#efe9dc,#f8f6f2)] bg-[length:200%_200%] animate-[gradientMove_12s_ease_infinite]" />

  {/* Moving glow */}
  <div className="absolute w-[500px] h-[500px] bg-[#c8a951]/20 blur-[140px] rounded-full animate-[floatGlow_12s_ease-in-out_infinite]" />

  {/* Top wave */}
  <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 320">
    <path fill="#ffffff" d="M0,160L80,170C160,180,320,200,480,192C640,184,800,148,960,138.7C1120,128,1280,144,1360,152L1440,160L1440,0L0,0Z"/>
  </svg>

  {/* Bottom wave */}
  <svg className="absolute bottom-0 left-0 w-full rotate-180" viewBox="0 0 1440 320">
    <path fill="#f3efe7" d="M0,160L80,170C160,180,320,200,480,192C640,184,800,148,960,138.7C1120,128,1280,144,1360,152L1440,160L1440,0L0,0Z"/>
  </svg>

</div>

<Container>

<h2 className="text-3xl md:text-4xl text-center mb-10 font-bold">
Our Projects
</h2>

{/* 🔥 PREMIUM COMPACT GRID */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

{[
  { img: "project1.png", title: "Corporate Office" },
  { img: "project2.png", title: "Modern Workspace" },
  { img: "project3.png", title: "Luxury Interior" },
  { img: "project1.png", title: "Commercial Space" },
].map((p, i) => (

<div key={i} className="group relative">

<div className="relative h-[180px] rounded-2xl overflow-hidden shadow-lg bg-white">

<Image 
  src={`/images/${p.img}`} 
  alt={p.title}
  fill
  sizes="(max-width:768px) 100vw, 25vw"
  loading="lazy"
  className="object-cover group-hover:scale-110 transition duration-700"
/>

{/* Overlay */}
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition duration-500" />

{/* Content */}
<div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-500">

<p className="text-white text-sm font-semibold">
{p.title}
</p>

<button className="mt-2 w-fit text-xs bg-white/80 backdrop-blur px-3 py-1 rounded-full hover:bg-[#c8a951] hover:text-white transition">
View Project →
</button>

</div>

</div>

</div>

))}

</div>

</Container>
</section>

{/* ================= LOCATIONS ================= */}
<section className="relative py-20 → pt-10 pb-20  bg-gradient-to-br from-[#f8f6f2] via-[#f3efe7] to-[#ebe6dc] overflow-hidden">

{/* Glow */}
<div className="absolute right-0 top-0 w-[300px] h-[300px] bg-[#c8a951]/20 blur-[120px] rounded-full -z-10" />

<Container>

<h2 className="text-3xl md:text-4xl text-center mb-12 font-bold">
Our Presence Across India
</h2>

{/* 🔥 Grid */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

{[
  { name: "Delhi", link: "/office-interior-contractor-delhi" },
  { name: "Gurgaon", link: "/office-interior-contractor-gurgaon" },
  { name: "Noida", link: "/office-interior-contractor-noida" },
  { name: "Mumbai", link: "/office-interior-contractor-mumbai" },
].map((city, i) => (

<Link key={i} href={city.link}>

<div className="group bg-white/80 backdrop-blur-lg border border-white/40 
rounded-2xl p-6 text-center shadow-md 
hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">

{/* Icon circle */}
<div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#c8a951]/20 text-[#c8a951] font-bold">
📍
</div>

{/* City */}
<p className="font-semibold text-black group-hover:text-[#c8a951] transition">
{city.name}
</p>

{/* Small text */}
<p className="text-xs text-black/50 mt-1">
Interior Solutions
</p>

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
