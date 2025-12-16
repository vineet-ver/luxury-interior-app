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
    <div className="w-full h-40 flex items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
        {logo ? (
            <div className="relative w-full h-full">
                <Image
                    src={logo}
                    alt={`${name} Logo`}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
            </div>
        ) : (
            <h3 className="text-xl font-display font-bold text-gray-400 group-hover:text-amber-600 transition-colors text-center">
                {name}
            </h3>
        )}
    </div>
);

export default function ClientsPage() {
    return (
        <MainLayout>
            <div className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gray-50">
                <AuroraBackground />

                <Container className="relative z-10">
                    {/* Hero Section */}
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-3 py-1 mb-6 text-sm font-medium text-amber-600 bg-amber-50 rounded-full border border-amber-100"
                        >
                            Trusted Partnerships
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6"
                        >
                            Powering the Titans of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">Industry & Innovation.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
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
                            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-2xl mb-6 text-amber-600">
                                    <stat.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                                <p className="text-gray-500 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Clients Grid */}
                    <div className="mb-24">
                        <div className="flex items-center justify-between mb-10">
                            <h2 className="text-3xl font-display font-bold text-gray-900">Our Esteemed Clients</h2>
                            <div className="h-px bg-gray-200 flex-1 ml-8"></div>
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
                        className="rounded-[40px] p-12 md:p-20 text-center overflow-hidden relative bg-gray-900 text-white shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[100px] pointer-events-none"></div>

                        <h2 className="relative z-10 text-4xl md:text-5xl font-display font-bold mb-6">
                            Ready to Join the Elite?
                        </h2>
                        <p className="relative z-10 text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                            Experience the difference of working with a partner who values your infrastructure as much as you do.
                        </p>
                        <Link href="/contact" className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-amber-500 hover:text-white transition-all duration-300">
                            Partner With Us
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                </Container>
            </div>
        </MainLayout>
    );
}
