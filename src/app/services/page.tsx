"use client";

import { useEffect, useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Palette, Key, Layout, HardHat, Armchair, Globe, ArrowRight, Landmark, ShoppingBag, GraduationCap, Truck, Factory, Stethoscope } from 'lucide-react';
import { siteData } from '@/content/siteData';
import { motion } from 'framer-motion';

// Define the type for a service
type Service = {
    id: string;
    title: string;
    description: string;
    icon_url?: string;
};

const iconMap: Record<string, any> = {
    "interior-decorators": Palette,
    "turnkey-project": Key,
    "space-planner": Layout,
    "civil-contractor": HardHat,
    "chair-sofa-repair": Armchair,
    default: Globe
};

const industryIcons: Record<string, any> = {
    "financial": Landmark,
    "retail": ShoppingBag,
    "education": GraduationCap,
    "logistics": Truck,
    "manufacturing": Factory,
    "healthcare": Stethoscope
};

export default function ServicesPage() {
    const [services, setServices] = useState<Service[]>([]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        // Use Mock Data directly for instant load
        setServices(siteData.services as any);
    }, []);

    return (
        <MainLayout>
            <section className="relative pt-40 pb-32 overflow-hidden bg-luxury-white min-h-screen">
                {/* Ambient Background */}
                <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-luxury-pearl to-transparent opacity-80 pointer-events-none" />
                <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-luxury-gold/5 rounded-full blur-[150px] animate-pulse pointer-events-none" />

                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center mb-24"
                    >
                        <span className="text-sm font-medium tracking-[0.4em] text-luxury-gold uppercase mb-6 block">Our Expertise</span>
                        <h1 className="font-display text-6xl md:text-8xl font-bold text-luxury-onyx mb-8">
                            The Concierge <br />
                            <span className="font-light italic text-luxury-gold-shine">Collection.</span>
                        </h1>
                        <p className="text-xl text-luxury-onyx/60 max-w-2xl mx-auto leading-relaxed font-light">
                            A curated suite of architectural and interior services designed for the world's most demanding enterprises.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6">
                        {services.map((service, index) => {
                            const Icon = iconMap[service.id] || iconMap.default;
                            const isHovered = hoveredIndex === index;

                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: index * 0.1, duration: 0.8 }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="group relative"
                                >
                                    <div className={`
                                        relative overflow-hidden rounded-[3rem] p-10 md:p-14 transition-all duration-700
                                        ${isHovered ? 'bg-luxury-onyx shadow-2xl scale-[1.02]' : 'bg-white border border-luxury-platinum/50 hover:border-luxury-gold/30'}
                                    `}>
                                        <div className="flex flex-col md:flex-row gap-10 md:items-center justify-between relative z-10">
                                            {/* Number & Icon */}
                                            <div className="flex items-center gap-8">
                                                <span className={`text-4xl font-display font-bold transition-colors duration-500 ${isHovered ? 'text-luxury-gold' : 'text-luxury-platinum'}`}>
                                                    {(index + 1).toString().padStart(2, '0')}
                                                </span>
                                                <div className={`p-4 rounded-2xl transition-all duration-500 ${isHovered ? 'bg-white/10 text-white' : 'bg-luxury-pearl text-luxury-onyx'}`}>
                                                    <Icon className="w-8 h-8" />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 max-w-2xl">
                                                <h3 className={`font-display text-3xl font-bold mb-4 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-luxury-onyx'}`}>
                                                    {service.title}
                                                </h3>
                                                <p className={`text-lg leading-relaxed transition-colors duration-500 ${isHovered ? 'text-white/70' : 'text-luxury-onyx/60'}`}>
                                                    {service.description}
                                                </p>
                                            </div>

                                            {/* CTA */}
                                            <div className="md:pl-10">
                                                <div className={`
                                                    w-16 h-16 rounded-full border flex items-center justify-center transition-all duration-500
                                                    ${isHovered ? 'border-luxury-gold bg-luxury-gold text-luxury-onyx rotate-[-45deg]' : 'border-luxury-platinum/50 text-luxury-onyx/30'}
                                                 `}>
                                                    <ArrowRight className="w-6 h-6" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Background Gradient for Active State */}
                                        <div className={`absolute inset-0 bg-gradient-to-r from-luxury-onyx via-[#1a1a1a] to-luxury-onyx transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* Industries Section */}
            <section className="py-32 bg-luxury-onyx relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <span className="text-sm font-medium tracking-[0.4em] text-luxury-gold uppercase mb-6 block">Sectors & Domains</span>
                        <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-8">
                            Industries We <span className="text-luxury-gold-shine italic font-light">Serve.</span>
                        </h2>
                        <p className="text-xl text-white/60 max-w-2xl leading-relaxed font-light">
                            Specialized infrastructure solutions tailored for the unique operational demands of key global sectors.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {(siteData.industries || []).map((industry: any, i: number) => {
                            const Icon = industryIcons[industry.id] || Globe;
                            return (
                                <motion.div
                                    key={industry.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-luxury-gold/50 hover:bg-white/10 transition-all duration-500 flex flex-col items-center justify-center text-center gap-6 aspect-square"
                                >
                                    <div className="w-14 h-14 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-onyx transition-all duration-500">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-lg font-medium text-white group-hover:text-luxury-gold transition-colors">
                                        {industry.title}
                                    </h3>
                                </motion.div>
                            )
                        })}
                    </div>
                </Container>
            </section>
        </MainLayout>
    );
}
