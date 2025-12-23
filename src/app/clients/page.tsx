"use client";

import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { siteData } from '@/content/siteData';
import AuroraBackground from '@/components/ui/AuroraBackground';
import { motion } from 'framer-motion';
import { Building2, Award, Handshake, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Client Logo Component
const ClientLogo = ({ name, logo }: { name: string; logo?: string }) => (
    <div className="w-full h-40 flex items-center justify-center p-6 bg-white rounded-2xl border border-luxury-platinum shadow-luxury hover:shadow-2xl hover:border-luxury-gold/30 transition-all duration-300 group relative overflow-hidden backdrop-blur-sm">
        {logo ? (
            <div className="relative w-full h-full">
                <Image
                    src={logo}
                    alt={`${name} Logo`}
                    fill
                    className="object-contain transition-all duration-500 transform group-hover:scale-110"
                />
            </div>
        ) : (
            <h3 className="text-xl font-display font-bold text-luxury-onyx/50 group-hover:text-luxury-gold transition-colors text-center">
                {name}
            </h3>
        )}
    </div>
);

export default function ClientsPage() {
    return (
        <MainLayout>
            <div className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-luxury-white">
                <AuroraBackground />

                <Container className="relative z-10">
                    {/* Hero Section */}
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-3 py-1 mb-6 text-sm font-medium text-luxury-gold bg-luxury-gold/5 rounded-full border border-luxury-platinum"
                        >
                            Trusted Partnerships
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-display text-5xl md:text-6xl font-bold text-luxury-onyx mb-6"
                        >
                            Powering the Titans of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-luxury-onyx">Industry & Innovation.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-luxury-onyx/80 leading-relaxed max-w-2xl mx-auto"
                        >
                            From Fortune 500 enterprises to critical government infrastructure, ITSS is the silent force behind seamless operations.
                        </motion.p>
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8 mb-24"
                    >
                        {[
                            { icon: Building2, value: "50+", label: "Enterprise Clients" },
                            { icon: Handshake, value: "12+", label: "Years of Trust" },
                            { icon: Award, value: "100%", label: "Project Success Rate" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-luxury-platinum shadow-luxury text-center backdrop-blur-sm">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-2xl mb-6 text-luxury-gold">
                                    <stat.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-4xl font-bold text-luxury-onyx mb-2">{stat.value}</h3>
                                <p className="text-luxury-onyx/60 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Clients Grid */}
                    <div className="mb-24">
                        <div className="flex items-center justify-between mb-10">
                            <h2 className="text-3xl font-display font-bold text-luxury-onyx">Our Esteemed Clients</h2>
                            <div className="h-px bg-luxury-platinum flex-1 ml-8"></div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {siteData.clients.map((client, i) => (
                                <motion.div
                                    key={client.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {/* @ts-ignore - logo property exists now */}
                                    <ClientLogo name={client.name} logo={client.logo} />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[40px] p-12 md:p-20 text-center overflow-hidden relative bg-luxury-onyx text-luxury-white shadow-2xl border border-luxury-gold/20"
                    >
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/20 rounded-full blur-[100px] pointer-events-none"></div>

                        <h2 className="relative z-10 text-4xl md:text-5xl font-display font-bold mb-6">
                            Ready to Join the Elite?
                        </h2>
                        <p className="relative z-10 text-xl text-luxury-white/80 max-w-2xl mx-auto mb-10">
                            Experience the difference of working with a partner who values your infrastructure as much as you do.
                        </p>
                        <Link href="/contact" className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-luxury-white text-luxury-onyx rounded-full font-bold hover:bg-luxury-gold hover:text-white transition-all duration-300">
                            Partner With Us
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                </Container>
            </div>
        </MainLayout>
    );
}
