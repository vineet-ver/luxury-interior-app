"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/content/siteData";
import { MainLayout } from "@/components/layout/MainLayout";
import { Container } from "@/components/ui/Container";
import { PanIndiaPresence } from "@/components/sections/PanIndiaPresence";
import { Target, Lightbulb, Trophy, ArrowRight, Quote, CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "250+", label: "Projects Completed" },
  { value: "120+", label: "Happy Clients" },
  { value: "15+", label: "Cities Covered" },
  { value: "4.8★", label: "Google Rating" },
];

const VALUES = [
  {
    title: "Precision",
    icon: Target,
    desc: "Zero tolerance for error. Every detail, every deadline, every time.",
    color: "from-amber-50 to-yellow-50",
    border: "border-amber-200",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    desc: "We bring tomorrow's workspace technology to your office today.",
    color: "from-stone-50 to-neutral-100",
    border: "border-stone-200",
  },
  {
    title: "Excellence",
    icon: Trophy,
    desc: "The standard others aspire to — our everyday minimum.",
    color: "from-amber-50 to-orange-50",
    border: "border-amber-200",
  },
];

const VISION_POINTS = [
  "Cost-effective turnkey delivery without compromise",
  "Professional planning with transparent processes",
  "Long-term trust through accountable execution",
  "Exceptional value for every square foot",
];

const MISSION_POINTS = [
  "End-to-end interior solutions, single point of contact",
  "Highest standards of quality & timely execution",
  "Transparent communication at every project stage",
  "Complete client satisfaction, always",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function AboutClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <MainLayout>
      <main
        id="main-content"
        ref={containerRef}
        className="bg-luxury-white min-h-screen text-luxury-onyx relative overflow-hidden"
        aria-label="About ITSS — Office Interior Contractors India"
      >

        {/* ══════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="relative min-h-[80vh] sm:min-h-[88vh] flex items-center justify-center pt-20 px-4"
          aria-labelledby="hero-heading"
        >
          <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/6 rounded-full blur-[130px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-luxury-gold/4 rounded-full blur-[100px]" />
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage: `linear-gradient(#B8972E 1px, transparent 1px), linear-gradient(90deg, #B8972E 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <Container className="relative z-10 text-center max-w-5xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.p
                variants={fadeUp}
                className="text-xs sm:text-sm font-semibold tracking-[0.4em] text-luxury-gold uppercase mb-5"
              >
                Trusted Office Interior Contractors Since 2017
              </motion.p>

              <motion.h1
                id="hero-heading"
                variants={fadeUp}
                className="font-display text-5xl sm:text-7xl md:text-8xl font-bold mb-6 sm:mb-8 leading-[0.88] tracking-tight"
              >
                About{" "}
                <span className="font-light italic text-luxury-gold-shine">ITSS.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-base sm:text-xl md:text-2xl text-luxury-onyx/55 font-light max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-14"
              >
                India's most trusted commercial interior design &amp; turnkey
                project company — delivering world-class office interiors, EPC,
                MEP and HVAC solutions across Delhi NCR and pan India.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto"
              >
                {STATS.map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-white/70 border border-luxury-platinum/50 rounded-2xl px-4 py-5 backdrop-blur-sm shadow-sm"
                  >
                    <p className="font-display text-2xl sm:text-3xl font-bold text-luxury-gold leading-none mb-1">
                      {value}
                    </p>
                    <p className="text-[10px] sm:text-xs text-luxury-onyx/50 uppercase tracking-widest leading-tight">
                      {label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            VISION + MISSION — Two full cards, no empty half
        ══════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="vision-mission-heading"
          className="py-20 sm:py-28 px-4 bg-[#FAFAF8]"
        >
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12 sm:mb-16"
            >
              <span className="text-xs font-semibold tracking-[0.4em] text-luxury-gold uppercase">
                Who We Are
              </span>
              <h2
                id="vision-mission-heading"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3"
              >
                Purpose &amp; Direction
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Vision Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeLeft}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-luxury-platinum/40 shadow-sm hover:shadow-lg transition-shadow duration-500 group relative overflow-hidden"
              >
                <div aria-hidden className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-bl-[80px]" />
                <div aria-hidden className="absolute top-6 right-6 w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-luxury-gold" />
                </div>

                <span className="text-[10px] font-bold tracking-[0.35em] text-luxury-gold uppercase mb-4 block">
                  Our Vision
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-luxury-onyx leading-tight">
                  Delivering Quality <br className="hidden sm:block" />That Lasts
                </h3>
                <p className="text-luxury-onyx/60 font-light leading-relaxed mb-8 text-sm sm:text-base">
                  {siteData.about.vision}
                </p>

                <ul className="space-y-3" aria-label="Vision highlights">
                  {VISION_POINTS.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-luxury-onyx/70">
                      <CheckCircle2 className="w-4 h-4 text-luxury-gold mt-0.5 shrink-0" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeRight}
                className="bg-luxury-onyx rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-shadow duration-500 group relative overflow-hidden"
              >
                <div aria-hidden className="absolute top-0 left-0 w-48 h-48 bg-luxury-gold/15 rounded-full blur-[80px]" />
                <div aria-hidden className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-luxury-gold" />
                </div>

                <span className="text-[10px] font-bold tracking-[0.35em] text-luxury-gold uppercase mb-4 block relative z-10">
                  Our Mission
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-white leading-tight relative z-10">
                  End-to-End Solutions, <br className="hidden sm:block" />Zero Compromise
                </h3>
                <p className="text-white/55 font-light leading-relaxed mb-8 text-sm sm:text-base relative z-10">
                  {siteData.about.mission}
                </p>

                <ul className="space-y-3 relative z-10" aria-label="Mission highlights">
                  {MISSION_POINTS.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-luxury-gold mt-0.5 shrink-0" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            LEADERSHIP — Image with overlay name + timeline bio
        ══════════════════════════════════════════════════════════════ */}
        <article
          aria-labelledby="founder-heading"
          className="py-20 sm:py-28 px-4 relative overflow-hidden"
        >
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/4 rounded-full blur-[120px]" />
          </div>

          <Container>
            <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">

              {/* Image */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeLeft}
                className="relative"
              >
                <div
                  aria-hidden
                  className="absolute -top-4 -left-4 w-full h-full rounded-[2rem] border-2 border-luxury-gold/20 z-0"
                />
                <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-luxury-onyx/15 aspect-[4/5] max-w-sm mx-auto md:max-w-none">
                  <Image
                    src={siteData.leadership?.image || "/shaan_khan.jpg"}
                    alt="Mr. Zaki Khan, Founder and Managing Director of ITSS — Office Interior Contractor India"
                    fill
                    sizes="(max-width: 768px) 90vw, 45vw"
                    className="object-cover object-top"
                    priority={false}
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-luxury-onyx/65 via-luxury-onyx/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <p className="font-display text-xl sm:text-2xl font-bold text-white">
                      {siteData.leadership?.name}
                    </p>
                    <p className="text-white/60 text-xs sm:text-sm uppercase tracking-widest mt-1">
                      {siteData.leadership?.role} — ITSS India
                    </p>
                    <div className="flex items-center gap-1 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-luxury-gold text-luxury-gold" aria-hidden />
                      ))}
                      <span className="text-white/60 text-xs ml-2">12+ Years Experience</span>
                    </div>
                  </div>
                </div>

                <div
                  aria-hidden
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 bg-luxury-gold text-luxury-onyx text-center rounded-2xl px-4 py-3 shadow-xl"
                >
                  <p className="font-display font-bold text-xl sm:text-2xl leading-none">250+</p>
                  <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider mt-0.5">Projects</p>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeRight}
              >
                <span className="text-[10px] font-bold tracking-[0.4em] text-luxury-gold uppercase mb-4 block">
                  Leadership
                </span>
                <h2
                  id="founder-heading"
                  className="font-display text-4xl sm:text-5xl font-bold mb-2 text-luxury-onyx leading-tight"
                >
                  Setting{" "}
                  <span className="italic font-light text-luxury-gold-shine">
                    Benchmarks.
                  </span>
                </h2>

                {/* Timeline bio */}
                <div className="mt-8 space-y-0 relative">
                  <div aria-hidden className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-luxury-gold via-luxury-gold/30 to-transparent" />

                  {[
                    { year: "Pre-2012", text: siteData.leadership?.bio1 },
                    { year: "2012", text: siteData.leadership?.bio2 },
                    { year: "2017", text: siteData.leadership?.bio3 },
                    // @ts-ignore
                    { year: "2022+", text: siteData.leadership?.bio4 },
                  ].filter(item => item.text).map((item, i) => (
                    <div key={i} className="pl-7 pb-7 relative">
                      <div
                        aria-hidden
                        className="absolute left-0 top-1.5 w-[14px] h-[14px] rounded-full border-2 border-luxury-gold bg-white z-10"
                      />
                      <span className="text-[10px] font-bold tracking-widest text-luxury-gold uppercase block mb-1">
                        {item.year}
                      </span>
                      <p className="text-sm sm:text-base text-luxury-onyx/65 font-light leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <blockquote
                  cite="https://www.itss.co.in/about"
                  className="mt-2 border-l-4 border-luxury-gold pl-5 sm:pl-6 py-4 bg-luxury-gold/5 rounded-r-2xl"
                >
                  <p className="font-display text-lg sm:text-xl italic text-luxury-onyx">
                    &ldquo;{siteData.leadership?.quote}&rdquo;
                  </p>
                  <footer className="mt-2 flex items-center gap-3">
                    <div aria-hidden className="h-[1px] w-8 bg-luxury-gold" />
                    <cite className="not-italic text-[10px] sm:text-xs font-bold uppercase tracking-widest text-luxury-gold">
                      Founder's Motto
                    </cite>
                  </footer>
                </blockquote>
              </motion.div>
            </div>
          </Container>
        </article>

        {/* Pan India */}
        <PanIndiaPresence />

        {/* ══════════════════════════════════════════════════════════════
            VALUES
        ══════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="values-heading"
          className="py-20 sm:py-28 px-4"
        >
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="bg-luxury-onyx rounded-3xl p-8 sm:p-12 md:p-16 mb-8 relative overflow-hidden text-center">
                <div aria-hidden className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                <div aria-hidden className="absolute -top-20 -left-20 w-72 h-72 bg-luxury-gold/20 rounded-full blur-[100px]" />
                <div aria-hidden className="absolute -bottom-20 -right-20 w-72 h-72 bg-luxury-gold/10 rounded-full blur-[100px]" />

                <Quote aria-hidden className="w-8 h-8 sm:w-10 sm:h-10 text-luxury-gold mx-auto mb-5 opacity-60" />
                <h2
                  id="values-heading"
                  className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight relative z-10"
                >
                  &ldquo;We believe that true luxury is the absence of friction.&rdquo;
                </h2>
              </div>

              <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
                {VALUES.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className={`bg-gradient-to-br ${item.color} border ${item.border} rounded-3xl p-7 sm:p-8 group hover:shadow-lg transition-all duration-500`}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-luxury-platinum/30 flex items-center justify-center mb-5 group-hover:bg-luxury-gold group-hover:border-luxury-gold transition-all duration-400">
                      <item.icon className="w-5 h-5 text-luxury-gold group-hover:text-white transition-colors duration-400" aria-hidden />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-luxury-onyx">
                      {item.title}
                    </h3>
                    <p className="text-luxury-onyx/60 font-light text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            CTA
        ══════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="cta-heading"
          className="py-20 sm:py-28 px-4"
        >
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-luxury-gold via-yellow-400 to-amber-500 p-10 sm:p-16 text-center shadow-2xl shadow-luxury-gold/30"
            >
              <div aria-hidden className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full" />
              <div aria-hidden className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full" />

              <h2
                id="cta-heading"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-onyx mb-4 sm:mb-6 relative z-10"
              >
                Ready to transform your workspace?
              </h2>
              <p className="text-luxury-onyx/70 text-base sm:text-lg font-light max-w-xl mx-auto mb-8 sm:mb-10 relative z-10">
                Get a free consultation from India's most trusted office interior
                contractors. Pan-India delivery. Turnkey solutions.
              </p>
              <Link
                href="/contact"
                aria-label="Begin a free interior design consultation with ITSS"
                className="relative z-10 inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-luxury-onyx text-white rounded-full text-base sm:text-lg font-bold tracking-wide hover:scale-105 active:scale-95 transition-transform shadow-xl cursor-pointer"
              >
                Begin Free Consultation{" "}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden />
              </Link>
            </motion.div>
          </Container>
        </section>

      </main>
    </MainLayout>
  );
}
