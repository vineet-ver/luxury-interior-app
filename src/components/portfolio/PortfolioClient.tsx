"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/content/siteData";
import { MainLayout } from "@/components/layout/MainLayout";
import { ArrowUpRight, ZoomIn } from "lucide-react";
import { useState } from "react";

export default function PortfolioClient() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <MainLayout>
            <div className="bg-luxury-white min-h-screen pt-32 pb-20">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="text-6xl md:text-8xl font-display font-bold text-luxury-onyx mb-6"
                        >
                            Architectural <br />
                            <span className="text-luxury-gold italic font-light">Masterpieces.</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="flex items-center gap-4"
                        >
                            <div className="h-[1px] w-20 bg-luxury-gold"></div>
                            <p className="text-luxury-onyx/60 text-lg font-light tracking-wide uppercase">
                                Technical Precision & Design Excellence
                            </p>
                        </motion.div>
                    </div>

                    {/* Portfolio Grid */}
                    <div className="space-y-32">
                        {siteData.portfolio?.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Image Container */}
                                <div
                                    className="w-full md:w-3/5 relative group cursor-pointer"
                                    onClick={() => setSelectedImage(item.image)}
                                >
                                    <div className="relative overflow-hidden rounded-sm shadow-2xl shadow-luxury-onyx/20">
                                        <div className="absolute inset-0 bg-luxury-onyx/0 group-hover:bg-luxury-onyx/10 transition-colors duration-500 z-10 flex items-center justify-center">
                                            <div className="bg-white/90 backdrop-blur-md p-4 rounded-full opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                                                <ZoomIn className="w-6 h-6 text-luxury-onyx" />
                                            </div>
                                        </div>
                                        <Image
                                            src={item.image}
                                            alt={`${item.title} interior design project in India by ITSS`}
                                            width={1920}
                                            height={1080}
                                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    </div>

                                    {/* Tech Lines Decoration */}
                                    <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-luxury-gold/20 hidden md:block"></div>
                                    <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full border border-luxury-onyx/5 hidden md:block"></div>
                                </div>

                                {/* Content */}
                                <div className="w-full md:w-2/5 md:py-10">
                                    <h3 className="text-luxury-gold text-sm tracking-[0.2em] uppercase mb-4 font-medium">
                                        {item.category}
                                    </h3>
                                    <h2 className="text-4xl md:text-5xl font-display font-medium text-luxury-onyx mb-6 leading-tight">
                                        {item.title}
                                    </h2>
                                    <p className="text-luxury-onyx/70 text-lg leading-relaxed font-light mb-8 border-l-2 border-luxury-platinumpl-6">
                                        {item.description}
                                    </p>

                                    <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setSelectedImage(item.image)}>
                                        <span className="text-luxury-onyx font-medium border-b border-luxury-gold pb-1 group-hover:text-luxury-gold transition-colors">
                                            View Blueprint Details
                                        </span>
                                        <ArrowUpRight className="w-5 h-5 text-luxury-gold transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-luxury-onyx/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            <Image
                                src={selectedImage}
                                alt="Commercial interior design project blueprint by ITSS"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </MainLayout>
    );
}
