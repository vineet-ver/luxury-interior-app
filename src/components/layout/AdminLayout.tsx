"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutDashboard, Layers, Briefcase, MessageSquare, LogOut, Settings } from 'lucide-react';
import { siteData } from '@/content/siteData';
// ThemeToggle import removed

export function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    // Mock Auth State
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check for admin session
        const session = localStorage.getItem('admin_session');
        if (!session) {
            // router.push('/admin/login'); // In real app
        }
        setIsAuthenticated(true);
    }, [router]);

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
        { icon: Layers, label: 'Services', href: '/admin/services' },
        { icon: Briefcase, label: 'Careers', href: '/admin/careers' },
        { icon: MessageSquare, label: 'Inquiries', href: '/admin/contacts' },
    ];

    return (
        <div className="flex min-h-screen bg-luxury-white text-luxury-onyx font-sans selection:bg-luxury-gold selection:text-white transition-colors duration-500">
            {/* Glass Sidebar */}
            <aside className="w-72 fixed h-full z-20 border-r border-luxury-platinum bg-white/80 backdrop-blur-xl transition-all duration-500 shadow-luxury">
                <div className="p-8 border-b border-luxury-platinum flex items-center justify-between">
                    <div className="relative h-12 w-40">
                        <Image
                            src={siteData.general.logo}
                            alt="Admin Panel"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                    {/* ThemeToggle Removed */}
                </div>

                <nav className="p-6 space-y-2">
                    <p className="text-xs font-medium text-luxury-onyx/40 mb-4 px-4 uppercase tracking-wider">Main Menu</p>
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-luxury-gold/5 transition-all duration-300 border border-transparent hover:border-luxury-gold/10"
                        >
                            <item.icon className="w-5 h-5 text-luxury-onyx/40 group-hover:text-luxury-gold transition-colors" />
                            <span className="text-luxury-onyx/70 group-hover:text-luxury-onyx font-medium transition-colors">{item.label}</span>
                        </Link>
                    ))}

                    <div className="mt-8 pt-8 border-t border-luxury-platinum">
                        <p className="text-xs font-medium text-luxury-onyx/40 mb-4 px-4 uppercase tracking-wider">System</p>
                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-luxury-gold/5 transition-all text-left group">
                            <Settings className="w-5 h-5 text-luxury-onyx/40 group-hover:text-luxury-gold" />
                            <span className="text-luxury-onyx/70 group-hover:text-luxury-onyx font-medium">Settings</span>
                        </button>
                        <button
                            onClick={() => { localStorage.removeItem('admin_session'); router.push('/'); }}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 transition-all text-left group mt-2"
                        >
                            <LogOut className="w-5 h-5 text-gray-400 group-hover:text-red-500" />
                            <span className="text-gray-600 group-hover:text-red-500 font-medium">Logout</span>
                        </button>
                    </div>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="ml-72 flex-1 p-8 lg:p-12 relative overflow-hidden">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10 text-luxury-onyx">
                    {children}
                </div>
            </main>
        </div>
    );
}
