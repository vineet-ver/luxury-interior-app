import Link from 'next/link';
import Image from 'next/image';
import { siteData } from '@/content/siteData';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-luxury-onyx text-luxury-white/60 py-20 border-t border-luxury-gold/20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 grid gap-16 md:grid-cols-4 lg:gap-20">
                {/* Brand Column */}
                <div className="space-y-8">
                    <div className="relative h-20 w-64">
                        {/* Using white logo for dark footer */}
                        <Image
                            src={siteData.general.logo}
                            alt={siteData.general.siteName}
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                    <p className="text-lg font-light leading-relaxed max-w-xs text-luxury-white/70">
                        {siteData.general.tagline}
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/itss_interiors?igsh=MTdjYTV0cjJ2YXR1bg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-onyx transition-all cursor-pointer group">
                            <span className="sr-only">Instagram</span>
                            <Instagram className="w-4 h-4 text-luxury-gold group-hover:text-luxury-onyx" />
                        </a>
                        <a href="https://www.facebook.com/share/1BqKz1vJ4w/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-onyx transition-all cursor-pointer group">
                            <span className="sr-only">Facebook</span>
                            <Facebook className="w-4 h-4 text-luxury-gold group-hover:text-luxury-onyx" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-onyx transition-all cursor-pointer group">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="w-4 h-4 text-luxury-gold group-hover:text-luxury-onyx" />
                        </a>
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-luxury-gold font-display font-medium text-xl mb-8">Navigation</h4>
                    <ul className="space-y-4">
                        {['Home', 'About Us', 'Clients', 'Portfolio', 'Gallery', 'Services', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link
                                    href={item === 'Home' ? '/' : item === 'About Us' ? '/about' : `/${item.toLowerCase()}`}
                                    className="hover:text-luxury-gold transition-colors block py-1 border-b border-transparent hover:border-luxury-gold/30 hover:pl-2 duration-300 w-fit"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-luxury-gold font-display font-medium text-xl mb-8">Expertise</h4>
                    <ul className="space-y-4">
                        {['Turnkey Interiors', 'Office Automation', 'CCTV Surveillance', 'Networking', 'Access Control', 'Civil Work'].map((service) => (
                            <li key={service}>
                                <Link href="/services" className="hover:text-luxury-gold transition-colors hover:pl-2 duration-300 block">
                                    {service}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-luxury-gold font-display font-medium text-xl mb-8">Contact</h4>
                    <ul className="space-y-6">
                        <li className="group">
                            <span className="text-xs uppercase tracking-widest text-luxury-gold/50 block mb-2">Headquarters</span>
                            <span className="text-white/90 leading-relaxed font-light group-hover:text-white transition-colors block">
                                {siteData.general.address}
                            </span>
                        </li>
                        <li className="group">
                            <span className="text-xs uppercase tracking-widest text-luxury-gold/50 block mb-2">Get in Touch</span>
                            <a href={`tel:${siteData.general.contactPhone}`} className="block text-xl font-display text-white group-hover:text-luxury-gold transition-colors mb-1">
                                {siteData.general.contactPhone}
                            </a>
                            <a href={`mailto:${siteData.general.contactEmail}`} className="block text-white/70 hover:text-luxury-gold transition-colors">
                                {siteData.general.contactEmail}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="container mt-20 pt-8 border-t border-luxury-gold/10 flex flex-col md:flex-row justify-between items-center text-sm text-luxury-white/40 gap-4">
                <p>&copy; {currentYear} {siteData.general.siteName}. All rights reserved.</p>
                <div className="flex gap-8">
                    <span className="hover:text-luxury-gold cursor-pointer transition-colors">Privacy Policy</span>
                    <span className="hover:text-luxury-gold cursor-pointer transition-colors">Terms of Service</span>
                </div>
            </div>
        </footer>
    );
}
