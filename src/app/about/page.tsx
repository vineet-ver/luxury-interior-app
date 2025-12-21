"use client";

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteData } from '@/content/siteData';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { PanIndiaPresence } from "@/components/sections/PanIndiaPresence";
import { Target, Lightbulb, Trophy, ArrowRight, Star, Quote } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <MainLayout>
            <div ref={containerRef} className="bg-luxury-white min-h-screen text-luxury-onyx relative overflow-hidden">

                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

                    <Container className="relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-sm font-medium tracking-[0.5em] text-luxury-gold uppercase mb-8 block">Since 2012</span>
                            <h1 className="font-display text-7xl md:text-9xl font-bold mb-10 leading-[0.8] tracking-tight">
                                The <br />
                                <span className="font-light italic text-luxury-gold-shine">Legacy.</span>
                            </h1>
                            <p className="text-2xl md:text-3xl text-luxury-onyx/60 font-light max-w-4xl mx-auto leading-relaxed">
                                {siteData.about.overview}
                            </p>
                        </motion.div>
                    </Container>

                    {/* Scroll Line Start */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent to-luxury-platinum"></div>
                </section>

                {/* The Gold Thread Timeline Section */}
                <div className="relative">
                    {/* The Thread */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-luxury-platinum/30 -translate-x-1/2 z-0 hidden md:block">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-luxury-gold shadow-[0_0_15px_rgba(212,175,55,0.5)] origin-top"
                        />
                    </div>

                    {/* Section 1: Vision */}
                    <section className="py-32 relative z-10">
                        <Container>
                            <div className="grid md:grid-cols-2 gap-20 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-20%" }}
                                    transition={{ duration: 0.8 }}
                                    className="md:text-right"
                                >
                                    <h2 className="font-display text-5xl font-bold mb-6">The Vision</h2>
                                    <p className="text-xl text-luxury-onyx/60 leading-relaxed font-light mb-8">
                                        {siteData.about.vision}
                                    </p>
                                    <div className="w-16 h-16 rounded-full border border-luxury-platinum flex items-center justify-center ml-auto bg-white">
                                        <Lightbulb className="w-6 h-6 text-luxury-gold" />
                                    </div>
                                </motion.div>
                                <div className="hidden md:block"></div> {/* Spacer for timeline center */}
                            </div>
                        </Container>
                    </section>

                    {/* Section 2: Mission */}
                    <section className="py-32 relative z-10">
                        <Container>
                            <div className="grid md:grid-cols-2 gap-20 items-center">
                                <div className="hidden md:block"></div> {/* Spacer for timeline center */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-20%" }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h2 className="font-display text-5xl font-bold mb-6">Our Mission</h2>
                                    <p className="text-xl text-luxury-onyx/60 leading-relaxed font-light mb-8">
                                        {siteData.about.mission}
                                    </p>
                                    <div className="w-16 h-16 rounded-full border border-luxury-platinum flex items-center justify-center mr-auto bg-white">
                                        <Target className="w-6 h-6 text-luxury-gold" />
                                    </div>
                                </motion.div>
                            </div>
                        </Container>
                    </section>

                    {/* Section 4: Leadership / MD Profile */}
                    <section className="py-40 relative z-10">
                        <Container>
                            <div className="grid md:grid-cols-2 gap-20 items-start">
                                {/* Image / Visual Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className="aspect-[3/4] rounded-[2rem] overflow-hidden relative shadow-2xl shadow-luxury-onyx/20">
                                        {/* Using a placeholder avatar if real image fails, or the actual image */}
                                        <Image
                                            src={siteData.leadership?.image || "https://i.pravatar.cc/400?img=11"}
                                            alt={siteData.leadership?.name || "MD"}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-luxury-onyx/40 to-transparent" />
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-full shadow-xl border border-luxury-platinum/50 hidden md:block">
                                        <div className="text-center">
                                            <p className="font-display font-bold text-3xl text-luxury-gold">12+</p>
                                            <p className="text-xs uppercase tracking-widest text-luxury-onyx/50">Years Exp</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Text Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="pt-10 pl-10"
                                >
                                    <span className="text-luxury-gold font-bold tracking-widest uppercase mb-4 block">Leadership</span>
                                    <h2 className="font-display text-5xl md:text-6xl font-bold mb-10 text-luxury-onyx leading-tight">
                                        Setting <span className="italic font-light text-luxury-gold-shine">Benchmarks.</span>
                                    </h2>

                                    <div className="text-lg text-luxury-onyx/70 font-light mb-12 leading-relaxed space-y-6">
                                        <p>{siteData.leadership?.bio1}</p>
                                        <p>{siteData.leadership?.bio2}</p>
                                        <p>{siteData.leadership?.bio3}</p>
                                        {/* @ts-ignore */}
                                        <p>{siteData.leadership?.bio4}</p>
                                    </div>

                                    <div className="border-l-4 border-luxury-gold pl-8 py-2 mb-10 bg-luxury-gold/5 rounded-r-2xl py-6 pr-6">
                                        <p className="font-display text-2xl italic text-luxury-onyx mb-4">"{siteData.leadership?.quote}"</p>
                                        <div className="flex items-center gap-4">
                                            <div className="h-[1px] w-12 bg-luxury-gold"></div>
                                            <span className="text-sm font-bold uppercase tracking-widest text-luxury-gold">Motto</span>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="font-display text-3xl font-bold text-luxury-onyx">{siteData.leadership?.name}</p>
                                        <p className="text-luxury-onyx/50 tracking-widest text-sm uppercase mt-1">{siteData.leadership?.role}</p>
                                    </div>
                                </motion.div>
                            </div>
                        </Container>
                    </section>



                    {/* Pan India Section */}
                    <PanIndiaPresence />

                    {/* Section 3: Values (Centered) */}
                    <section className="py-40 relative z-10">
                        <Container>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-luxury-onyx text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center"
                            >
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                                <div className="absolute top-[-50%] left-[-20%] w-[500px] h-[500px] bg-luxury-gold/20 rounded-full blur-[100px]" />

                                <Quote className="w-12 h-12 text-luxury-gold mx-auto mb-8 opacity-50" />
                                <h2 className="font-display text-4xl md:text-6xl font-bold mb-12">
                                    "We believe that true luxury is the absence of friction."
                                </h2>

                                <div className="grid md:grid-cols-3 gap-12 mt-20 relative z-10 border-t border-white/10 pt-20">
                                    {[
                                        { title: "Precision", icon: Target, desc: "Zero tolerance for error." },
                                        { title: "Innovation", icon: Lightbulb, desc: "Tomorrow's systems, today." },
                                        { title: "Excellence", icon: Trophy, desc: "The standard others chase." },
                                    ].map((item, i) => (
                                        <div key={i} className="group">
                                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-luxury-gold group-hover:text-luxury-onyx transition-all duration-500">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                            <p className="text-white/60 font-light">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </Container>
                    </section>
                </div>

                {/* Legacy Footer CTA */}
                <section className="py-32 text-center">
                    <Container>
                        <h2 className="font-display text-4xl mb-8">Ready to build your legacy?</h2>
                        <Link href="/contact" className="inline-block">
                            <span className="inline-flex items-center gap-4 px-12 py-5 bg-luxury-gold text-luxury-onyx rounded-full text-lg font-bold tracking-wide hover:scale-105 transition-transform shadow-luxury-gold/20 shadow-xl">
                                Begin Consultation <ArrowRight className="w-5 h-5" />
                            </span>
                        </Link>
                    </Container>
                </section>

            </div>
        </MainLayout >
    );
}
