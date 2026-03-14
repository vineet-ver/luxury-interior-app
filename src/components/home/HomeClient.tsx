"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HomeClient() {

const targetRef = useRef(null);

const { scrollYProgress } = useScroll({
target: targetRef,
offset: ["start start", "end start"],
});

const heroY = useTransform(scrollYProgress, [0,1], ["0%","20%"]);

return (
<MainLayout>

{/* ================= HERO ================= */}

<section
ref={targetRef}
className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#f5f3ef]"
>

<div className="absolute inset-0 z-0 overflow-hidden">

<motion.div style={{y:heroY}} className="relative w-full h-full">

<Image
src="/luxury-office-hero.png"
alt="Office interior contractor project in Delhi NCR by ITSS"
fill
priority
sizes="100vw"
className="object-cover scale-110"
/>

<div className="absolute inset-0 bg-gradient-to-r from-[#f5f3ef] via-[#f5f3ef]/85 to-transparent" />

</motion.div>

</div>

<Container className="relative z-10 pt-24">

<div className="grid lg:grid-cols-12 gap-12 items-center">

{/* LEFT */}

<div className="lg:col-span-7">

<h1 className="font-display font-bold leading-[0.95] text-black
text-[2.8rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.2rem]">
Commercial Interior Decorator
<span className="block mt-4 font-light italic text-[#c8a951] text-[2rem] md:text-[3rem]">
for Modern Workspaces
</span>

</h1>

<p className="mt-8 max-w-xl text-lg text-black/70 leading-[1.9] border-l-2 border-[#c8a951]/40 pl-6">

<strong>Commercial Interior Decorator</strong> creating modern, functional workspaces with smart design and <strong>turnkey solutions</strong> for offices, retail spaces, and commercial projects.

</p>

<div className="mt-10 flex items-center gap-10 flex-wrap">

<Link href="/contact">

<button className="px-8 py-4 bg-black text-white rounded-full hover:bg-[#c8a951] transition duration-500">
Start Your Project →
</button>

</Link>

{/* CLIENT AVATARS */}

<div className="flex items-center gap-4">

<div className="flex -space-x-4">

{[1,2,3].map((_,i)=>(

<div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">

<Image
src={`https://i.pravatar.cc/100?img=${i+10}`}
alt="Premium corporate client"
width={48}
height={48}
/>

</div>

))}

</div>

<div>

<p className="font-bold text-black">500+ Premium</p>

<p className="text-sm text-black/50">Clients Served</p>

</div>

</div>

</div>

</div>

{/* RIGHT IMAGE */}

<div className="lg:col-span-5 hidden lg:block">

<div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl">

<Image
src="/luxury-office-hero.png"
alt="Corporate office interior design project by ITSS Delhi NCR"
fill
className="object-cover"
/>

</div>

</div>

</div>

</Container>

</section>

{/* ================= SERVICES ================= */}

<section className="pt-20 pb-20 bg-white">

<Container>

<h2 className="text-4xl font-bold text-center mb-12">
Commercial Interior Contractor Services in India
</h2>

<div className="grid md:grid-cols-3 gap-8">

{/* CARD 1 */}

<div className="p-8 rounded-3xl bg-[#f9f9f9] shadow-sm">

<Link href="/services/office-interior-contractor">

<h3 className="text-2xl font-semibold mb-4 hover:underline">
Office Interior Contractor in Delhi NCR
</h3>

</Link>

<p className="text-black/60">
Premium office interior contractor services for corporate workplaces
in Delhi, Gurgaon and Noida.
</p>

</div>

{/* CARD 2 */}

<div className="p-8 rounded-3xl bg-[#f9f9f9] shadow-sm">

<Link href="/services/turnkey-interior-contractor">

<h3 className="text-2xl font-semibold mb-4 hover:underline">
Turnkey Interior Contractor Services
</h3>

</Link>

<p className="text-black/60">
End-to-end turnkey office interior solutions from planning to execution.
</p>

</div>

{/* CARD 3 */}

<div className="p-8 rounded-3xl bg-[#f9f9f9] shadow-sm">

<Link href="/services/commercial-interior-contractor">

<h3 className="text-2xl font-semibold mb-4 hover:underline">
Corporate Interior Fit-Out Company
</h3>

</Link>

<p className="text-black/60">
Commercial interior design and workspace solutions for businesses
across India.
</p>

</div>

</div>

</Container>

</section>
{/* ================= EXPERTISE SECTION ================= */}
      <section className="relative pt-24 pb-28 overflow-hidden bg-[#f5f3ef]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-office-hero.png"
            alt="Turnkey commercial interior background"
            fill
            className="object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f3ef] via-[#f5f3ef]/90 to-[#f5f3ef]" />
          <div className="absolute inset-0 bg-[#e9e4dc]/50 mix-blend-multiply" />
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-16 bg-[#c8a951]" />
                <span className="text-xs tracking-[0.3em] uppercase text-[#c8a951]">
                  Our Expertise
                </span>
              </div>

              <h2 className="font-display font-bold text-black text-4xl md:text-5xl leading-tight">
                Expertise in Turnkey Projects for Commercial Interiors
              </h2>

              <div className="mt-8 space-y-6 text-black/75 leading-relaxed">
                <p>
                  Expert turnkey projects for commercial interiors by a trusted Commercial Interior Decorator delivering smart design, planning, and seamless execution..
                </p>

                <p>
                  As a premier turnkey interior contractor in India, ITSS provides complete commercial interior solutions for corporate offices, commercial spaces, warehouses, and workspace environments..
                </p>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Why Choose ITSS for Commercial Interior Design?
                  </h3>
                  <p>
                    We combine premium design, engineering precision and flawless execution to deliver high-performance corporate interiors.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-12">
                <Link href="/about">
                  <button className="px-8 py-4 border border-black/20 rounded-full hover:bg-black hover:text-white transition duration-500">
                    READ THE LEGACY →
                  </button>
                </Link>

                <div>
                  <p className="text-5xl font-bold text-[#c8a951]">98%</p>
                  <p className="text-sm tracking-[0.3em] uppercase text-black/50">
                    Retention Rate
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-6">
              <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden shadow-2xl group">
                <Image
                  src="/office_architecture.jpg"
                  alt="Corporate office interior execution project"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden shadow-2xl mt-10 group">
                <Image
                  src="/luxury-office-hero.png"
                  alt="Luxury commercial office fit-out project India"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* ================= SEO SECTION ================= */}

<section className="py-20 bg-white">

<Container>

<h2 className="text-4xl font-bold mb-6">

Leading Commercial Interior Decorator in Delhi NCR

</h2>

<p className="text-black/70 leading-relaxed max-w-3xl">

ITSS is a trusted Commercial Interior Decorator in Delhi NCR delivering
commercial interior design and turnkey office interior services across
India including Delhi, Gurgaon, Noida, Mumbai and other major cities.

</p>

</Container>

</section>
{/* ================= LOCATIONS ================= */}

<section className="py-20 bg-[#f5f3ef]">

<Container>

<h2 className="text-4xl font-bold text-center mb-12">

Commercial Interior Decorator in Major Cities

</h2>

<div className="grid md:grid-cols-4 gap-8 text-center">

<Link href="/office-interior-contractor-delhi">
<p className="font-semibold hover:text-[#c8a951]">
Commercial Interior Decorator in Delhi
</p>
</Link>

<Link href="/office-interior-contractor-gurgaon">
<p className="font-semibold hover:text-[#c8a951]">
Commercial Interior Decorator in Gurgaon
</p>
</Link>

<Link href="/office-interior-contractor-noida">
<p className="font-semibold hover:text-[#c8a951]">
Commercial Interior Decorator in Noida
</p>
</Link>

<Link href="/office-interior-contractor-mumbai">
<p className="font-semibold hover:text-[#c8a951]">
Commercial Interior Decorator in Mumbai
</p>
</Link>

</div>

</Container>

</section>

</MainLayout>
);
}
