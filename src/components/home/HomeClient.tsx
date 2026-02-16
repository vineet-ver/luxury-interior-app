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

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <MainLayout>
      {/* ================= HERO SECTION ================= */}
      <section
        ref={targetRef}
        className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#f5f3ef]"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div style={{ y: heroY }} className="relative w-full h-full">
            <Image
              src="/luxury-office-hero.png"
              alt="Commercial interior designers in India – ITSS luxury office project"
              fill
              priority
              className="object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f5f3ef] via-[#f5f3ef]/85 to-transparent" />
            <div className="absolute inset-0 bg-[#e9e4dc]/40 mix-blend-multiply" />
          </motion.div>
        </div>

        <Container className="relative z-10 pt-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* LEFT */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-16 bg-[#c8a951]" />
                <span className="text-xs tracking-[0.3em] uppercase text-[#c8a951]">
                  Est. 2017 — Premium Interiors
                </span>
              </div>

              <h1 className="font-display font-bold leading-[0.95] text-black
              text-[2.8rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.2rem]">
                Commercial Interior Designers
                <span className="block mt-4 font-light italic text-[#c8a951]
                text-[2rem] md:text-[3rem]">
                  In Pan India
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg text-black/70 leading-[1.9] border-l-2 border-[#c8a951]/40 pl-6">
                ITSS is one of the leading <strong>commercial interior designers in India</strong> 
                delivering end-to-end turnkey interior projects for offices, corporate spaces, 
                and commercial environments. As a trusted <strong>turnkey interior contractor in India</strong>, 
                we manage everything from design and planning to execution and final handover across India.
              </p>

              <div className="mt-10 flex items-center gap-10 flex-wrap">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-[#c8a951] transition duration-500">
                    Start Your Project →
                  </button>
                </Link>

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
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl group">
                <Image
                  src="/luxury-office-hero.png"
                  alt="Executive luxury office interior by ITSS India"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="pt-20 pb-20 bg-white">
        <Container>
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black">
              Commercial Interior Design Company in India
            </h2>
            <p className="mt-4 text-black/60 max-w-2xl mx-auto">
              Providing comprehensive turnkey commercial interior solutions across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Office Interior Contractor Services",
                desc: "Premium office interior contractor services tailored for corporate workplaces."
              },
              {
                title: "Turnkey Interior Contractor Solutions",
                desc: "End-to-end turnkey commercial interior design services from concept to execution."
              },
              {
                title: "Corporate Interior Fit-Out Consultancy",
                desc: "Strategic corporate interior consultancy for performance-driven office environments."
              }
            ].map((item,i)=>(
              <div key={i} className="p-8 rounded-3xl bg-[#f9f9f9] shadow-sm hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-black/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
                Turnkey Commercial Interior Projects Across India
                <span className="block text-black/60 mt-2">Expertise.</span>
              </h2>

              <div className="mt-8 space-y-6 text-black/75 leading-relaxed">
                <p>
                  We don't just install systems; we orchestrate environments. At ITSS, we believe that true luxury lies in the seamless integration of intelligence and aesthetics.
                </p>

                <p>
                  As a leading turnkey commercial interior contractor in India, our signature approach combines precision engineering, premium materials, and flawless execution for corporate office interiors across India.
                </p>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Why Choose ITSS for Commercial Interior Design?
                  </h3>
                  <p>
                    We deliver more than just design; we deliver performance, security, and a legacy of excellence.
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

    </MainLayout>
  );
}
