"use client";
import { AdminLayout } from '@/components/layout/AdminLayout';
import { siteData } from '@/content/siteData';
import { Card, CardContent } from '@/components/ui/Card';
import { Users, Server, Briefcase, TrendingUp, ArrowUpRight, Search, Bell, Building, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
    const totalServices = siteData.services.length;
    const totalClients = siteData.clients.length;
    const totalProjects = siteData.gallery ? siteData.gallery.length : 0;
    const yearsExperience = new Date().getFullYear() - 2012;

    const stats = [
        { title: 'Total Services', value: totalServices.toString(), icon: Server, change: 'Active Categories', color: 'from-blue-500/20 to-blue-600/20', text: 'text-blue-500 dark:text-blue-400' },
        { title: 'Total Clients', value: totalClients.toString(), icon: Users, change: 'Enterprise Partners', color: 'from-purple-500/20 to-purple-600/20', text: 'text-purple-500 dark:text-purple-400' },
        { title: 'Portfolio Projects', value: totalProjects.toString(), icon: ImageIcon, change: 'Showcased Works', color: 'from-emerald-500/20 to-emerald-600/20', text: 'text-emerald-500 dark:text-emerald-400' },
        { title: 'Years Experience', value: `+${yearsExperience}`, icon: TrendingUp, change: 'Since 2012', color: 'from-orange-500/20 to-orange-600/20', text: 'text-orange-500 dark:text-orange-400' },
    ];

    return (
        <AdminLayout>
            {/* Header Area */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h1 className="text-3xl font-display font-bold text-luxury-onyx mb-1">Dashboard</h1>
                    <p className="text-luxury-onyx/60">Welcome back, <span className="text-luxury-gold">Administrator</span>.</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-onyx/40" />
                        <input
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 bg-white border border-luxury-platinum rounded-full text-sm text-luxury-onyx focus:outline-none focus:border-luxury-gold/50 focus:ring-1 focus:ring-luxury-gold/50 transition-all w-64 shadow-sm"
                        />
                    </div>
                    <button className="p-2 bg-white border border-luxury-platinum rounded-full text-luxury-onyx/60 hover:text-luxury-onyx hover:border-luxury-onyx/20 transition-all relative shadow-sm">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group p-6 rounded-3xl bg-white border border-luxury-platinum hover:border-luxury-gold/30 hover:shadow-luxury transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} border border-white/20`}>
                                <stat.icon className={`w-6 h-6 ${stat.text}`} />
                            </div>
                            <span className="text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full border border-emerald-200">
                                {stat.change}
                            </span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-luxury-onyx/60 mb-1">{stat.title}</p>
                            <h3 className="text-3xl font-bold text-luxury-onyx">{stat.value}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Recent Inquiries Table */}
                {/* Client List Table */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-luxury-onyx">Our Clients</h2>
                        <button className="text-sm text-luxury-gold hover:text-luxury-onyx transition-colors">View All</button>
                    </div>

                    <div className="bg-white border border-luxury-platinum rounded-3xl overflow-hidden shadow-sm">
                        <table className="w-full text-left">
                            <thead className="bg-luxury-platinum/10 text-luxury-onyx/40 text-xs uppercase tracking-wider font-medium">
                                <tr>
                                    <th className="px-6 py-4">Client Name</th>
                                    <th className="px-6 py-4">Category</th>
                                    <th className="px-6 py-4">ID</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-luxury-platinum/10 text-sm text-luxury-onyx/70">
                                {siteData.clients.slice(0, 5).map((client) => (
                                    <tr key={client.id} className="hover:bg-luxury-platinum/5 transition-colors group cursor-pointer">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-luxury-platinum/50 to-luxury-platinum flex items-center justify-center text-xs font-bold text-luxury-onyx border border-white">
                                                    {client.name.substring(0, 2).toUpperCase()}
                                                </div>
                                                <span className="font-medium text-luxury-onyx">{client.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-luxury-onyx/60">{client.category}</td>
                                        <td className="px-6 py-4 text-luxury-onyx/30">#{client.id.toString().padStart(3, '0')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions Panel */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-luxury-onyx">Quick Actions</h2>
                    <div className="grid gap-4">
                        <button className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-luxury-gold/5 to-transparent border border-luxury-platinum hover:border-luxury-gold/30 group transition-all bg-white shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-luxury-gold/10 rounded-lg text-luxury-gold">
                                    <Server className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-luxury-onyx group-hover:text-luxury-gold transition-colors">Add New Service</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-luxury-onyx/30 group-hover:text-luxury-gold" />
                        </button>

                        <button className="flex items-center justify-between p-4 rounded-2xl bg-white border border-luxury-platinum hover:bg-luxury-platinum/10 group transition-all shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-luxury-onyx">View Analytics</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-luxury-onyx/30 group-hover:text-luxury-onyx" />
                        </button>
                    </div>

                    {/* System Status Card */}
                    <div className="p-6 rounded-3xl bg-white border border-luxury-platinum mt-8 shadow-luxury">
                        <h3 className="text-sm font-bold text-luxury-onyx/40 mb-4 uppercase tracking-wider">System Status</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-luxury-onyx/60">Server Status</span>
                                <span className="flex items-center gap-2 text-emerald-600">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Operational
                                </span>
                            </div>
                            <div className="w-full bg-luxury-platinum/20 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-emerald-500 w-[98%] h-full rounded-full"></div>
                            </div>
                            <div className="flex justify-between text-xs text-luxury-onyx/40">
                                <span>Uptime: 99.9%</span>
                                <span>Ver: 2.4.0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
