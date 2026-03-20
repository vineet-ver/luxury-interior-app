import Link from 'next/link';
import Image from 'next/image';
import { siteData } from '@/content/siteData';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-br from-[#0b1f3a] via-[#1e3a5f] to-[#0b1f3a] text-white/70 pt-24 pb-12 border-t border-white/10 overflow-hidden">

            {/* Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c8a951]/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c8a951]/10 blur-[120px] rounded-full" />

            {/* Pattern */}
            <div className="absolute inset-0 opacity-[0.03] 
            bg-[radial-gradient(#fff_1px,transparent_1px)] 
            [background-size:20px_20px]" />

            {/* MAIN */}
            <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

                {/* BRAND */}
                <div className="space-y-5 flex flex-col items-start">
                    <div className="relative h-16 w-52">
                        <Image
                            src={siteData.general.logo}
                            alt={siteData.general.siteName}
                            fill
                            className="object-contain object-left"
                        />
                    </div>

                    <p className="text-sm leading-relaxed text-white/70 max-w-[260px] break-words">
                        {siteData.general.tagline}
                    </p>

                    {/* SOCIAL */}
                    <div className="flex gap-4 flex-wrap">
                        {[{
                            icon: Instagram,
                            link: "https://www.instagram.com/itss_interiors?igsh=MTdjYTV0cjJ2YXR1bg=="
                        },
                        {
                            icon: Facebook,
                            link: "https://www.facebook.com/share/1BqKz1vJ4w/"
                        },
                        {
                            icon: Linkedin,
                            link: "https://www.linkedin.com/company/112454950/admin/dashboard/"
                        }].map((item, i) => (
                            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full 
                                border border-white/20 
                                hover:bg-[#c8a951] 
                                hover:shadow-[0_0_15px_rgba(200,169,81,0.6)] 
                                transition">
                                <item.icon className="w-4 h-4 text-white" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* NAVIGATION */}
                <div>
                    <h4 className="text-[#c8a951] font-semibold text-lg tracking-wide mb-5">
                        Navigation
                    </h4>

                    <ul className="space-y-2.5 text-sm">
                        {['Home', 'About Us', 'Clients', 'Portfolio', 'Gallery', 'Services', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link
                                    href={item === 'Home' ? '/' : item === 'About Us' ? '/about' : `/${item.toLowerCase()}`}
                                    className="hover:text-[#c8a951] transition hover:pl-3 duration-300 block"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* SERVICES */}
                <div>
                    <h4 className="text-[#c8a951] font-semibold text-lg tracking-wide mb-5">
                        Expertise
                    </h4>

                    <ul className="space-y-2.5 text-sm">
                        {['Turnkey Interiors', 'Office Automation', 'CCTV Surveillance', 'Networking', 'Access Control', 'Civil Work'].map((service) => (
                            <li key={service}>
                                <Link
                                    href="/services"
                                    className="hover:text-[#c8a951] transition hover:pl-3 duration-300 block"
                                >
                                    {service}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h4 className="text-[#c8a951] font-semibold text-lg tracking-wide mb-5">
                        Contact
                    </h4>

                    <ul className="space-y-4 text-sm">
                        <li>
                            <p className="text-white/50 text-xs uppercase tracking-widest mb-1">
                                Address
                            </p>
                            <p className="text-white/90 break-words leading-relaxed">
                                {siteData.general.address}
                            </p>
                        </li>

                        <li>
                            <p className="text-white/50 text-xs uppercase tracking-widest mb-1">
                                Phone
                            </p>
                            <a href={`tel:${siteData.general.contactPhone}`} className="text-white hover:text-[#c8a951] transition">
                                {siteData.general.contactPhone}
                            </a>
                        </li>

                        <li>
                            <p className="text-white/50 text-xs uppercase tracking-widest mb-1">
                                Email
                            </p>
                            <a href={`mailto:${siteData.general.contactEmail}`} className="hover:text-[#c8a951] transition break-words">
                                {siteData.general.contactEmail}
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* BOTTOM */}
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-5 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50 text-center md:text-left">

                <p>
                    © {currentYear} {siteData.general.siteName}. All rights reserved.
                </p>

                <div className="flex gap-6 flex-wrap justify-center md:justify-end">
                    <span className="hover:text-[#c8a951] cursor-pointer transition">Privacy Policy</span>
                    <span className="hover:text-[#c8a951] cursor-pointer transition">Terms of Service</span>
                </div>

            </div>

        </footer>
    );
}
