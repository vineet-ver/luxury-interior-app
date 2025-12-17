"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { siteData } from "@/content/siteData";
import { MainLayout } from "@/components/layout/MainLayout";
import { Container } from "@/components/ui/Container";

export default function GalleryPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <MainLayout>
            <div ref={containerRef} className="relative bg-white dark:bg-obsidian-950 min-h-screen">
                {/* Header Section */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                    <Container className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white mb-6">
                                Project <span className="text-amber-600 dark:text-metallic-gold">Gallery</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                                Explore our portfolio of transformed spaces, showcasing our expertise in creating functional and aesthetic work environments.
                            </p>
                        </motion.div>
                    </Container>
                </section>

                {/* Gallery Grid */}
                <section className="pb-32">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {siteData.gallery.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                        <p className="text-amber-500 font-medium text-sm mb-2 tracking-widest uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                            {item.category}
                                        </p>
                                        <h3 className="text-white text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                            {item.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </section>
            </div>
        </MainLayout>
    );
}
