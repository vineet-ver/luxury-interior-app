"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { siteData } from '@/content/siteData';
// ThemeToggle import removed

export function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: -100 },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-4 transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-6'}`}
            >
                <div
                    className={`
            relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300
            ${scrolled || mobileMenuOpen
                            ? "bg-white/80 dark:bg-obsidian-950/70 border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-2xl w-[90%] md:w-[60%]"
                            : "bg-transparent w-full container"
                        }
        `}
                >
                    {/* Logo */}
                    <Link href="/" className="relative z-10 group" onClick={() => setMobileMenuOpen(false)}>
                        <div className="relative h-16 w-48 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src={siteData.general.logo}
                                alt={siteData.general.siteName}
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {['Services', 'Clients', 'Gallery', 'About', 'Contact'].map((item) => (
                            <Link key={item} href={`/${item.toLowerCase()}`} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-600 dark:bg-metallic-gold transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* ThemeToggle Removed */}
                        <Link href="/contact">
                            <MagneticButton>
                                <button className="px-5 py-2 text-sm font-medium text-white dark:text-black bg-gray-900 dark:bg-white rounded-full hover:bg-amber-600 dark:hover:bg-metallic-gold transition-colors duration-300 shadow-lg">
                                    Get Quote
                                </button>
                            </MagneticButton>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        {/* ThemeToggle Removed */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-900 dark:text-white"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-white dark:bg-obsidian-950 pt-32 px-6 pb-10 flex flex-col md:hidden"
                    >
                        <nav className="flex flex-col gap-6 text-2xl font-display font-bold">
                            {['Services', 'Clients', 'Gallery', 'About', 'Contact'].map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        className="text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-metallic-gold transition-colors block py-2 border-b border-gray-100 dark:border-white/10"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-auto"
                        >
                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                <button className="w-full py-4 text-lg font-medium text-white dark:text-black bg-gray-900 dark:bg-white rounded-xl hover:bg-amber-600 dark:hover:bg-metallic-gold transition-colors duration-300 shadow-lg">
                                    Get Quote
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
