"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Palette, Key, Layout, HardHat, Armchair, Globe } from 'lucide-react';
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

export default function ServicesPage() {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchServices() {
            // Mock data usage for stable functionality, as DB is empty
            setServices(siteData.services as any);
            setLoading(false);
        }
        fetchServices();
    }, []);

    return (
        <MainLayout>
            <section className="relative pt-32 pb-20 overflow-hidden bg-gray-50 dark:bg-obsidian-950 transition-colors duration-500">
                <div className="absolute top-0 right-[-20%] w-[600px] h-[600px] bg-amber-500/10 dark:bg-metallic-gold/10 rounded-full blur-[120px] pointer-events-none opacity-20"></div>
                <Container>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
                    >
                        What We Do
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
                    >
                        We specialize in the repair and maintenance of chairs, sofas, interiors, civil work, painting, and polishing, offering a comprehensive range of services.
                    </motion.p>
                </Container>
            </section>

            <section className="pb-32 bg-gray-50 dark:bg-obsidian-950 transition-colors duration-500">
                <Container>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => {
                            const Icon = iconMap[service.id] || iconMap.default;

                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative p-1 bg-gradient-to-br from-gray-200/50 to-transparent dark:from-white/10 dark:to-transparent hover:from-amber-400/40 hover:to-primary-500/40 rounded-3xl transition-all duration-500 shadow-xl shadow-gray-200/50 dark:shadow-none"
                                >
                                    <div className="h-full bg-white dark:bg-obsidian-900/90 backdrop-blur-xl rounded-[22px] p-8 transition-colors group-hover:bg-gray-50 dark:group-hover:bg-obsidian-900/80">
                                        <div className="w-14 h-14 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-metallic-gold text-gray-900 dark:text-white group-hover:text-obsidian-950 transition-all duration-500">
                                            <Icon className="w-7 h-7" />
                                        </div>

                                        <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:translate-x-1 transition-transform">{service.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                                            {service.description}
                                        </p>

                                        <div className="w-full h-[1px] bg-gray-200 dark:bg-white/10 mb-6 group-hover:bg-gray-300 dark:group-hover:bg-white/30 transition-colors"></div>

                                        <button className="text-sm font-medium text-amber-600 dark:text-metallic-gold tracking-widest uppercase hover:text-gray-900 dark:hover:text-white transition-colors">
                                            Explore Solution
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </Container>
            </section>
        </MainLayout>
    );
}
