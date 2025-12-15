"use client";
import { AdminLayout } from '@/components/layout/AdminLayout';
import { Card, CardContent } from '@/components/ui/Card';
import { Users, Server, MessageSquare, Briefcase, TrendingUp, ArrowUpRight, Search, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
    const stats = [
        { title: 'Total Services', value: '12', icon: Server, change: '+2.5%', color: 'from-blue-500/20 to-blue-600/20', text: 'text-blue-400' },
        { title: 'Active Jobs', value: '5', icon: Briefcase, change: '+1 New', color: 'from-purple-500/20 to-purple-600/20', text: 'text-purple-400' },
        { title: 'New Inquiries', value: '28', icon: MessageSquare, change: '+12% this week', color: 'from-emerald-500/20 to-emerald-600/20', text: 'text-emerald-400' },
        { title: 'Monthly Visitors', value: '12.4k', icon: Users, change: '+8.1%', color: 'from-orange-500/20 to-orange-600/20', text: 'text-orange-400' },
    ];

    return (
        <AdminLayout>
            {/* Header Area */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h1 className="text-3xl font-display font-bold text-white mb-1">Dashboard</h1>
                    <p className="text-gray-400">Welcome back, <span className="text-metallic-gold">Administrator</span>.</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white focus:outline-none focus:border-metallic-gold/50 transition-colors w-64"
                        />
                    </div>
                    <button className="p-2 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/20 transition-all relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-obsidian-950"></span>
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
                        className="group p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-metallic-gold/30 hover:bg-white/10 transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} border border-white/5`}>
                                <stat.icon className={`w-6 h-6 ${stat.text}`} />
                            </div>
                            <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
                                {stat.change}
                            </span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-400 mb-1">{stat.title}</p>
                            <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Recent Inquiries Table */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">Recent Inquiries</h2>
                        <button className="text-sm text-metallic-gold hover:text-white transition-colors">View All</button>
                    </div>

                    <div className="bg-white/5 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm">
                        <table className="w-full text-left">
                            <thead className="bg-white/5 text-gray-400 text-xs uppercase tracking-wider font-medium">
                                <tr>
                                    <th className="px-6 py-4">Client</th>
                                    <th className="px-6 py-4">Subject</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-sm text-gray-300">
                                {[1, 2, 3, 4].map((i) => (
                                    <tr key={i} className="hover:bg-white/5 transition-colors group cursor-pointer">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-xs font-bold text-white">
                                                    JD
                                                </div>
                                                <span className="font-medium text-white">John Doe</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-400">Enterprise Security Upgrade...</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 rounded text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">New</span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500">2 hrs ago</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions Panel */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-white">Quick Actions</h2>
                    <div className="grid gap-4">
                        <button className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-metallic-gold/10 to-transparent border border-metallic-gold/20 hover:border-metallic-gold/50 group transition-all">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-metallic-gold/10 rounded-lg text-metallic-gold">
                                    <Server className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-white group-hover:text-metallic-gold transition-colors">Add New Service</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-metallic-gold" />
                        </button>

                        <button className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 group transition-all">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                                    <Briefcase className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-white">Post Job Opening</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white" />
                        </button>

                        <button className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 group transition-all">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-white">View Analytics</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white" />
                        </button>
                    </div>

                    {/* System Status Card */}
                    <div className="p-6 rounded-3xl bg-obsidian-900 border border-white/5 mt-8">
                        <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">System Status</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-400">Server Status</span>
                                <span className="flex items-center gap-2 text-emerald-400">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                    Operational
                                </span>
                            </div>
                            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
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
