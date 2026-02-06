"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { siteData } from "@/content/siteData";
import { MainLayout } from "@/components/layout/MainLayout";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, Search, ArrowUpRight } from "lucide-react";

export default function GalleryClient() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <MainLayout>
            <div className="relative bg-luxury-white min-h-screen">

                {/* Header Section */}
                <section className="relative pt-40 pb-20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />
                    <Container className="relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-sm font-medium tracking-[0.4em] text-luxury-gold uppercase mb-6 block">The Collection</span>
                            <h1 className="text-6xl md:text-8xl font-display font-bold text-luxury-onyx mb-10 tracking-tight">
                                Curated <span className="font-light italic text-luxury-gold-shine">Spaces.</span>
                            </h1>
                            <p className="text-xl text-luxury-onyx/60 max-w-2xl mx-auto leading-relaxed font-light">
                                An exclusive exhibition of our finest architectural and interior achievements.
                            </p>
                        </motion.div>
                    </Container>
                </section>

                {/* Gallery Grid */}
                <section className="pb-40">
                    <Container>
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                            {siteData.gallery.map((item, index) => (
                                <motion.div
                                    layoutId={`card-${item.id}`}
                                    key={item.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: index * 0.05 }}
                                    onClick={() => setSelectedId(item.id)}
                                    className="relative break-inside-avoid rounded-[2rem] overflow-hidden group cursor-pointer shadow-luxury hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border border-luxury-platinum/50 hover:border-luxury-gold/30"
                                >
                                    <div className="relative aspect-[3/4] md:aspect-auto">
                                        <Image
                                            src={item.src}
                                            alt={`${item.title} commercial interior design by ITSS`}
                                            width={800}
                                            height={1000}
                                            className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-luxury-onyx/0 group-hover:bg-luxury-onyx/10 transition-colors duration-500" />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/40 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <p className="text-luxury-gold text-xs font-bold tracking-widest uppercase mb-2">{item.category}</p>
                                                <div className="flex justify-between items-center">
                                                    <h3 className="text-luxury-onyx text-xl font-display font-bold">{item.title}</h3>
                                                    <div className="w-8 h-8 rounded-full bg-luxury-onyx text-white flex items-center justify-center">
                                                        <Search className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Full Screen Modal */}
                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-luxury-onyx/90 backdrop-blur-xl"
                            />

                            {siteData.gallery.filter(item => item.id === selectedId).map(item => (
                                <motion.div
                                    layoutId={`card-${item.id}`}
                                    key={item.id}
                                    className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl z-10"
                                    onClick={(e) => e.stopPropagation()} // Prevent close on card click
                                >
                                    <button
                                        onClick={() => setSelectedId(null)}
                                        className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-luxury-onyx transition-all duration-300"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>

                                    <div className="grid md:grid-cols-2">
                                        <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/3]">
                                            <Image
                                                src={item.src}
                                                alt={`${item.title} commercial interior design project by ITSS`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-10 md:p-14 flex flex-col justify-center bg-luxury-white">
                                            <span className="text-luxury-gold text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Project Detail</span>
                                            <h2 className="text-4xl md:text-5xl font-display font-bold text-luxury-onyx mb-6">{item.title}</h2>
                                            <p className="text-luxury-onyx/60 text-lg leading-relaxed mb-10 font-light">
                                                A masterpiece of design and execution, reflecting our commitment to creating environments that inspire. The {item.category} space utilizes premium materials and optimizing workflow.
                                            </p>

                                            <div className="grid grid-cols-2 gap-8 py-8 border-t border-luxury-platinum/50 mb-8">
                                                <div>
                                                    <span className="block text-xs uppercase text-luxury-onyx/40 mb-1">Category</span>
                                                    <span className="block text-lg font-medium text-luxury-onyx">{item.category}</span>
                                                </div>
                                                <div>
                                                    <span className="block text-xs uppercase text-luxury-onyx/40 mb-1">Year</span>
                                                    <span className="block text-lg font-medium text-luxury-onyx">2026</span>
                                                </div>
                                                <div>
                                                    <span className="block text-xs uppercase text-luxury-onyx/40 mb-1">Client</span>
                                                    <span className="block text-lg font-medium text-luxury-onyx">Confidential</span>
                                                </div>
                                                <div>
                                                    <span className="block text-xs uppercase text-luxury-onyx/40 mb-1">Location</span>
                                                    <span className="block text-lg font-medium text-luxury-onyx">New Delhi</span>
                                                </div>
                                            </div>

                                            <button className="flex items-center gap-3 text-luxury-onyx font-bold uppercase tracking-wider hover:text-luxury-gold transition-colors group w-fit">
                                                Next Project <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </MainLayout>
    );
}
