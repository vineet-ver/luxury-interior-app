import Link from 'next/link';
import { siteData } from '@/content/siteData';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary-950 text-secondary-300 py-12">
            <div className="container grid gap-8 md:grid-cols-4">
                <div>
                    <h3 className="text-white text-lg font-bold mb-4">{siteData.general.siteName}</h3>
                    <p className="text-secondary-400 text-sm">{siteData.general.tagline}</p>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-3">Services</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/services/cctv" className="hover:text-white transition-colors">CCTV Surveillance</Link></li>
                        <li><Link href="/services/networking" className="hover:text-white transition-colors">Networking</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-3">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li>{siteData.general.address}</li>
                        <li>{siteData.general.contactPhone}</li>
                        <li>{siteData.general.contactEmail}</li>
                    </ul>
                </div>
            </div>
            <div className="container mt-12 pt-8 border-t border-secondary-800 text-center text-sm text-secondary-500">
                &copy; {currentYear} {siteData.general.siteName}. All rights reserved.
            </div>
        </footer>
    );
}
