"use client";

import { siteData } from '@/content/siteData';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Target, Lightbulb, Trophy, History, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function AboutPage() {
    return (
        <MainLayout>
            <div className="bg-gray-50 dark:bg-obsidian-950 min-h-screen text-gray-900 dark:text-white pt-24 transition-colors duration-500">

                {/* Hero Section */}
                <section className="relative py-20 lg:py-32 overflow-hidden">
                    {/* Background Glows */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-100/50 dark:bg-primary-900/20 rounded-full blur-[120px] pointer-events-none" />

                    <Container>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-amber-600 dark:text-metallic-gold text-sm font-medium mb-6 backdrop-blur-sm">
                                SINCE 2012
                            </span>
                            <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
                                Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">Excellence</span> through Innovation.
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                                {siteData.about.overview}
                            </p>
                        </motion.div>
                    </Container>
                </section>

                {/* Core Values / Mission Grid */}
                <section className="py-20 relative">
                    <Container>
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                            className="grid md:grid-cols-3 gap-8"
                        >
                            {/* Mission */}
                            <motion.div variants={fadeInUp} className="group p-8 rounded-[32px] bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:border-blue-400/30 dark:hover:border-metallic-gold/30 transition-all duration-500 shadow-xl shadow-gray-200/50 dark:shadow-none">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-primary-900/50 dark:to-primary-950/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Target className="w-7 h-7 text-blue-600 dark:text-primary-400" />
                                </div>
                                <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-metallic-gold transition-colors">Our Mission</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {siteData.about.mission}
                                </p>
                            </motion.div>

                            {/* Vision */}
                            <motion.div variants={fadeInUp} className="group p-8 rounded-[32px] bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:border-amber-400/30 dark:hover:border-metallic-gold/30 transition-all duration-500 shadow-xl shadow-gray-200/50 dark:shadow-none">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 dark:from-metallic-gold/20 dark:to-metallic-bronze/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Lightbulb className="w-7 h-7 text-amber-600 dark:text-metallic-gold" />
                                </div>
                                <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-metallic-gold transition-colors">Our Vision</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {siteData.about.vision}
                                </p>
                            </motion.div>

                            {/* Values */}
                            <motion.div variants={fadeInUp} className="group p-8 rounded-[32px] bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-metallic-gold/30 transition-all duration-500 shadow-xl shadow-gray-200/50 dark:shadow-none">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-white/10 dark:to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Trophy className="w-7 h-7 text-gray-700 dark:text-white" />
                                </div>
                                <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-metallic-gold transition-colors">Our Values</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Commitment to unwavering quality, total customer satisfaction, and continuous technological innovation.
                                </p>
                            </motion.div>
                        </motion.div>
                    </Container>
                </section>

                {/* Legacy / Journey Section */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-50/50 dark:bg-primary-900/5 -skew-y-3 transform origin-top-left scale-110 pointer-events-none" />

                    <Container className="relative">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                                    A Legacy of <br />
                                    <span className="text-amber-600 dark:text-metallic-gold">Transformation.</span>
                                </h2>
                                <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                    <p>
                                        Established in 2012, ITSS began with a singular focus: to bridge the gap between complex technology and business efficiency. From a niche automation provider, we have evolved into a full-scale digital transformation partner.
                                    </p>
                                    <p>
                                        Today, we serve the elite across Corporate, Retail, Education, and Government sectors. Our reputation is built not just on code, but on the trust that we deliver systems that work flawlessly, every single time.
                                    </p>
                                </div>
                                <div className="mt-10">
                                    <button className="group flex items-center gap-2 text-gray-900 dark:text-white font-medium hover:text-amber-600 dark:hover:text-metallic-gold transition-colors">
                                        View Our Portfolio <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="aspect-square rounded-[40px] border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-3xl overflow-hidden p-8 flex items-center justify-center relative group shadow-2xl shadow-gray-200 dark:shadow-none">
                                    <div className="absolute inset-0 bg-amber-500/5 dark:bg-metallic-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Abstract Visual Representation of Growth */}
                                    <div className="grid grid-cols-2 gap-4 w-full h-full">
                                        <div className="bg-gray-200 dark:bg-white/5 rounded-3xl w-full h-[80%] self-end"></div>
                                        <div className="bg-blue-200 dark:bg-primary-500/20 rounded-3xl w-full h-full"></div>
                                        <div className="bg-amber-200 dark:bg-metallic-gold/20 rounded-3xl w-full h-full"></div>
                                        <div className="bg-gray-200 dark:bg-white/5 rounded-3xl w-full h-[60%]"></div>
                                    </div>

                                    <div className="absolute bottom-10 left-10 p-4 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none">
                                        <div className="flex items-center gap-3">
                                            <History className="w-6 h-6 text-amber-600 dark:text-metallic-gold" />
                                            <div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">ESTABLISHED</div>
                                                <div className="font-bold text-gray-900 dark:text-white">2012</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </section>

            </div>
        </MainLayout>
    );
}
