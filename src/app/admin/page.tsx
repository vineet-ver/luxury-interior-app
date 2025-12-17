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
                    <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-1">Dashboard</h1>
                    <p className="text-gray-500 dark:text-gray-400">Welcome back, <span className="text-amber-600 dark:text-metallic-gold">Administrator</span>.</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm text-gray-900 dark:text-white focus:outline-none focus:border-amber-500/50 dark:focus:border-metallic-gold/50 transition-colors w-64 shadow-sm dark:shadow-none"
                        />
                    </div>
                    <button className="p-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20 transition-all relative shadow-sm dark:shadow-none">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-obsidian-950"></span>
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
                        className="group p-6 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-amber-400/30 dark:hover:border-metallic-gold/30 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 shadow-lg shadow-gray-200/50 dark:shadow-none"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} border border-gray-100 dark:border-white/5`}>
                                <stat.icon className={`w-6 h-6 ${stat.text}`} />
                            </div>
                            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-200 dark:border-emerald-400/20">
                                {stat.change}
                            </span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{stat.title}</p>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Recent Inquiries Table */}
                {/* Client List Table */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Our Clients</h2>
                        <button className="text-sm text-amber-600 dark:text-metallic-gold hover:text-gray-900 dark:hover:text-white transition-colors">View All</button>
                    </div>

                    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm shadow-xl dark:shadow-none">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider font-medium">
                                <tr>
                                    <th className="px-6 py-4">Client Name</th>
                                    <th className="px-6 py-4">Category</th>
                                    <th className="px-6 py-4">ID</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-white/5 text-sm text-gray-600 dark:text-gray-300">
                                {siteData.clients.slice(0, 5).map((client) => (
                                    <tr key={client.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group cursor-pointer">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-xs font-bold text-gray-700 dark:text-white">
                                                    {client.name.substring(0, 2).toUpperCase()}
                                                </div>
                                                <span className="font-medium text-gray-900 dark:text-white">{client.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{client.category}</td>
                                        <td className="px-6 py-4 text-gray-400">#{client.id.toString().padStart(3, '0')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions Panel */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Quick Actions</h2>
                    <div className="grid gap-4">
                        <button className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-transparent dark:from-metallic-gold/10 border border-amber-500/20 dark:border-metallic-gold/20 hover:border-amber-500/50 dark:hover:border-metallic-gold/50 group transition-all bg-white dark:bg-transparent shadow-sm dark:shadow-none">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-amber-100 dark:bg-metallic-gold/10 rounded-lg text-amber-600 dark:text-metallic-gold">
                                    <Server className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-metallic-gold transition-colors">Add New Service</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-amber-600 dark:group-hover:text-metallic-gold" />
                        </button>



                        <button className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 group transition-all shadow-sm dark:shadow-none">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-100 dark:bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-400">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-gray-900 dark:text-white">View Analytics</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" />
                        </button>
                    </div>

                    {/* System Status Card */}
                    <div className="p-6 rounded-3xl bg-gray-900 dark:bg-obsidian-900 border border-gray-800 dark:border-white/5 mt-8 shadow-xl">
                        <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">System Status</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-400">Server Status</span>
                                <span className="flex items-center gap-2 text-emerald-400">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                    Operational
                                </span>
                            </div>
                            <div className="w-full bg-gray-800 dark:bg-white/5 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-emerald-500 w-[98%] h-full rounded-full"></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500">
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
