"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    // Mock Auth State
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check for admin session
        const session = localStorage.getItem('admin_session');
        if (!session) {
            // router.push('/admin/login'); // In real app
            // For demo, we just allow
        }
        setIsAuthenticated(true);
    }, [router]);

    return (
        <div className="flex min-h-screen bg-secondary-50">
            {/* Sidebar */}
            <aside className="w-64 bg-primary-900 text-white fixed h-full z-10 transition-transform">
                <div className="p-6 border-b border-primary-800">
                    <h1 className="text-xl font-bold">ITSS Admin</h1>
                </div>
                <nav className="p-4 space-y-2">
                    <Link href="/admin" className="block px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors bg-primary-800/50">
                        Dashboard
                    </Link>
                    <Link href="/admin/services" className="block px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors">
                        Manage Services
                    </Link>
                    <Link href="/admin/careers" className="block px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors">
                        Manage Careers
                    </Link>
                    <Link href="/admin/contacts" className="block px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors">
                        Inquiries
                    </Link>

                    <div className="mt-8 pt-8 border-t border-primary-800">
                        <button onClick={() => { localStorage.removeItem('admin_session'); router.push('/'); }} className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-900/50 text-red-200 transition-colors">
                            Logout
                        </button>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="ml-64 flex-1 p-8">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
