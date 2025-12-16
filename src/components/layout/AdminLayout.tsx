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
        <div className="flex min-h-screen bg-gray-50 dark:bg-obsidian-950 text-gray-900 dark:text-white font-sans selection:bg-metallic-gold selection:text-obsidian-950 transition-colors duration-500">
            {/* Glass Sidebar */}
            <aside className="w-72 fixed h-full z-20 border-r border-gray-200 dark:border-white/5 bg-white/80 dark:bg-obsidian-950/50 backdrop-blur-xl transition-all duration-500">
                <div className="p-8 border-b border-gray-200 dark:border-white/5 flex items-center justify-between">
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
                    <p className="text-xs font-medium text-gray-500 mb-4 px-4 uppercase tracking-wider">Main Menu</p>
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-white/5"
                        >
                            <item.icon className="w-5 h-5 text-gray-400 group-hover:text-amber-600 dark:group-hover:text-metallic-gold transition-colors" />
                            <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white font-medium transition-colors">{item.label}</span>
                        </Link>
                    ))}

                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/5">
                        <p className="text-xs font-medium text-gray-500 mb-4 px-4 uppercase tracking-wider">System</p>
                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-left group">
                            <Settings className="w-5 h-5 text-gray-400 group-hover:text-amber-600 dark:group-hover:text-metallic-gold" />
                            <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white font-medium">Settings</span>
                        </button>
                        <button
                            onClick={() => { localStorage.removeItem('admin_session'); router.push('/'); }}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 transition-all text-left group mt-2"
                        >
                            <LogOut className="w-5 h-5 text-gray-400 group-hover:text-red-500 dark:group-hover:text-red-400" />
                            <span className="text-gray-600 dark:text-gray-300 group-hover:text-red-500 dark:group-hover:text-red-400 font-medium">Logout</span>
                        </button>
                    </div>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="ml-72 flex-1 p-8 lg:p-12 relative overflow-hidden">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 dark:bg-primary-900/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10 text-gray-900 dark:text-white">
                    {children}
                </div>
            </main>
        </div>
    );
}
