"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { MainLayout } from '@/components/layout/MainLayout';
import { ArrowRight, Shield, Server, Users, ArrowUpRight } from 'lucide-react';
import AuroraBackground from '@/components/ui/AuroraBackground';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import { useRef } from 'react';

// Animation Variants
const fadeInUp: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: import('framer-motion').Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
};

export default function HomeClient() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <MainLayout>
            {/* Hero Section */}
            <section ref={targetRef} className="relative min-h-screen flex items-center overflow-hidden bg-luxury-white">
                <div className="absolute inset-0 z-0">
                    <motion.div
                        style={{ y: heroY, scale: 1.1 }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src="/luxury-office-hero.png"
                            alt="Luxury Executive Office"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-luxury-white via-luxury-white/80 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-luxury-white via-transparent to-transparent opacity-80" />
                        <div className="absolute inset-0 bg-luxury-white/20 backdrop-blur-[2px]" />
                    </motion.div>
                </div>

                <AuroraBackground />

                <Container className="relative z-10 pt-20">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="lg:col-span-7"
                        >
                            <motion.div variants={fadeInUp} className="mb-8 flex items-center gap-4">
                                <div className="h-[1px] w-16 bg-luxury-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                                <span className="text-sm font-medium tracking-[0.2em] uppercase text-luxury-gold drop-shadow-sm">
                                    Est. 2017 — Premium Interiors
                                </span>
                            </motion.div>

                            <motion.h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-luxury-onyx leading-[0.95] mb-10 relative">
                                <motion.span variants={fadeInUp} className="block">Commercial Interior</motion.span>
                                <motion.span variants={fadeInUp} className="block text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-yellow-600 italic font-light pr-4">
                                    Design Company in India
                                </motion.span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-luxury-onyx/70 max-w-xl leading-relaxed mb-12 border-l-2 border-luxury-gold/30 pl-8 font-light">
                                Crafting ultra-luxury environments for the world's most discerning enterprises. Where art meets architecture in turnkey commercial interior solutions.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-8 items-center">
                                <Link href="/contact">
                                    <MagneticButton className="group relative px-10 py-5 bg-luxury-onyx text-luxury-white rounded-full overflow-hidden shadow-2xl hover:shadow-luxury-gold/50 transition-shadow">
                                        <span className="relative z-10 text-lg font-medium tracking-wider flex items-center gap-3">
                                            Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </MagneticButton>
                                </Link>

                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3].map((_, i) => (
                                            <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 relative overflow-hidden">
                                                <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" fill className="object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-bold text-luxury-onyx">500+ Premium</p>
                                        <p className="text-luxury-onyx/50">Clients Served</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Floating Glass Card / Image Showcase */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            className="lg:col-span-5 hidden lg:block relative"
                        >
                            <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl shadow-luxury-onyx/20 border border-white/50 backdrop-blur-sm group">
                                <Image
                                    src="/luxury-office-hero.png"
                                    alt="Executive Office Interior"
                                    fill
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />

                                <div className="absolute bottom-8 left-8 right-8 text-white backdrop-blur-md bg-white/10 p-6 rounded-3xl border border-white/20">
                                    <p className="text-xs tracking-widest uppercase text-luxury-gold mb-2">Featured Project</p>
                                    <h3 className="text-2xl font-display font-medium">Executive Workspace</h3>
                                    <div className="flex justify-between items-end mt-4">
                                        <span className="text-white/80 text-sm"></span>
                                        <div className="w-10 h-10 rounded-full bg-white text-luxury-onyx flex items-center justify-center">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 border border-luxury-gold/30 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-luxury-gold/20 rounded-full blur-[80px]" />
                        </motion.div>
                    </div>
                </Container>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-12 flex flex-col items-center gap-4 z-20"
                >
                    <div className="w-[1px] h-24 bg-gradient-to-b from-luxury-onyx/0 via-luxury-onyx/50 to-luxury-onyx/0"></div>
                    <span className="text-xs uppercase tracking-[0.3em] text-luxury-onyx/50 rotate-180" style={{ writingMode: 'vertical-lr' }}>Scroll to Explore</span>
                </motion.div>
            </section>

            <section className="relative z-20 pt-20 pb-40">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-onyx">Turnkey Commercial Interior Solutions</h2>
                        <p className="mt-4 text-luxury-onyx/60 max-w-2xl mx-auto">Providing comprehensive solutions for modern workspaces.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            { title: "Office Interior Design", icon: Shield, desc: "Premium office interior design solutions tailored for modern corporate workplaces." },
                            { title: "Turnkey Commercial Interior", icon: Server, desc: "End-to-end turnkey commercial interior design services from concept to execution." },
                            { title: "Corporate Interior Consultancy", icon: Users, desc: "Strategic corporate interior design consultancy focused on performance-driven spaces." }
                        ].map((item, i) => (
                            <div key={i} className="group relative p-10 rounded-[2.5rem] bg-luxury-white/80 backdrop-blur-xl border border-white/40 hover:border-luxury-gold/50 transition-all duration-700 hover:-translate-y-4 shadow-luxury hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.2)] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-8 p-4 w-fit rounded-2xl bg-white border border-luxury-platinum/50 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                        <item.icon className="w-8 h-8 text-luxury-onyx group-hover:text-luxury-gold transition-colors duration-500" />
                                    </div>

                                    <h3 className="font-display text-3xl font-bold text-luxury-onyx mb-4 group-hover:tracking-wide transition-all duration-500">{item.title}</h3>
                                    <p className="text-luxury-onyx/60 mb-8 leading-relaxed font-light">{item.desc}</p>

                                    <Link href="/services" className="mt-auto flex items-center justify-between border-t border-luxury-platinum/50 pt-6 group-hover:border-luxury-gold/30 transition-colors">
                                        <span className="text-sm font-medium uppercase tracking-widest text-luxury-onyx/40 group-hover:text-luxury-gold transition-colors">Explore</span>
                                        <div className="w-10 h-10 rounded-full border border-luxury-platinum/50 flex items-center justify-center group-hover:bg-luxury-gold group-hover:border-luxury-gold transition-all duration-500">
                                            <ArrowUpRight className="w-4 h-4 text-luxury-onyx/40 group-hover:text-white" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </Container>
            </section>

            {/* About Section (The Legacy) */}
            <section className="py-40 relative overflow-hidden bg-luxury-pearl">
                {/* Background Texture */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-multiply pointer-events-none" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-luxury-gold/5 rounded-full blur-[150px] mix-blend-multiply pointer-events-none" />

                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="flex items-center gap-4 mb-10">
                                <div className="h-[1px] w-24 bg-luxury-onyx/20"></div>
                                <span className="text-xs font-bold tracking-[0.3em] uppercase text-luxury-onyx/40">Since 2012</span>
                            </div>

                            <h2 className="font-display text-6xl md:text-7xl font-bold text-luxury-onyx mb-10 leading-[0.9]">
                                Corporate Office Interior <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-onyx to-gray-500">Expertise.</span>
                            </h2>

                            <div className="space-y-8 text-xl text-luxury-onyx/70 leading-relaxed font-light font-display">
                                <p>
                                    We don't just install systems; we orchestrate environments. At <strong className="text-luxury-gold font-normal">ITSS</strong>, we believe that true luxury lies in the seamless integration of intelligence and aesthetics.
                                </p>
                                <p>
                                    As a leading turnkey commercial interior company, our signature approach combines military-grade precision with the elegance of Italian design.
                                </p>
                            </div>

                            <div className="mt-12 space-y-6">
                                <h3 className="text-2xl font-display font-bold text-luxury-onyx">Why Choose ITSS?</h3>
                                <p className="text-lg text-luxury-onyx/60 font-light">
                                    We are the best commercial interior design firm because we deliver more than just design; we deliver performance, security, and a legacy of excellence for corporate office interiors.
                                </p>
                            </div>

                            <div className="mt-16 flex items-center gap-12">
                                <Link href="/about">
                                    <MagneticButton className="px-10 py-4 border border-luxury-onyx/10 rounded-full hover:bg-luxury-onyx hover:text-white transition-all duration-500 flex items-center gap-4 group">
                                        <span className="uppercase tracking-widest text-sm font-medium">Read The Legacy</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </MagneticButton>
                                </Link>

                                <div className="flex flex-col">
                                    <span className="text-4xl font-display font-bold text-luxury-gold">98%</span>
                                    <span className="text-xs uppercase tracking-widest text-luxury-onyx/50">Retention Rate</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 border border-luxury-gold/20 rounded-[3rem] z-0 rotate-3"></div>
                            <div className="relative z-10 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-luxury-onyx/10 group">
                                <Image
                                    src="/office_architecture.jpg"
                                    alt="Office Architecture"
                                    fill
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-luxury-onyx/10 group-hover:bg-transparent transition-colors duration-700" />

                                {/* Floating Badge */}
                                <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/30 text-white">
                                    <p className="font-display text-2xl mb-2">The Executive Suite</p>
                                    <p className="text-sm text-white/70 tracking-wide"></p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>
        </MainLayout>
    );
}
