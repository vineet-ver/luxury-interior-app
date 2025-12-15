"use client";
import { AdminLayout } from '@/components/layout/AdminLayout';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Users, Server, MessageSquare, Briefcase } from 'lucide-react';

export default function AdminDashboard() {
    const stats = [
        { title: 'Total Services', value: '5', icon: Server, color: 'text-blue-600', bg: 'bg-blue-100' },
        { title: 'Open Positions', value: '3', icon: Briefcase, color: 'text-purple-600', bg: 'bg-purple-100' },
        { title: 'New Inquiries', value: '12', icon: MessageSquare, color: 'text-green-600', bg: 'bg-green-100' },
        { title: 'Site Visits', value: '1.2k', icon: Users, color: 'text-orange-600', bg: 'bg-orange-100' },
    ];

    return (
        <AdminLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-primary-900">Dashboard</h1>
                <p className="text-secondary-600">Welcome back, Administrator.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardContent className="pt-6 flex items-center gap-4">
                            <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-secondary-500">{stat.title}</p>
                                <h3 className="text-2xl font-bold text-primary-900">{stat.value}</h3>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
                {/* Recent Inquiries */}
                <Card>
                    <CardContent className="pt-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-4">Recent Inquiries</h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex justify-between items-center p-3 hover:bg-secondary-50 rounded-lg border border-transparent hover:border-secondary-100 transition-colors">
                                    <div>
                                        <p className="font-medium text-primary-900">John Doe</p>
                                        <p className="text-sm text-secondary-500">Looking for CCTV solution...</p>
                                    </div>
                                    <span className="text-xs text-secondary-400">2h ago</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                    <CardContent className="pt-6">
                        <h3 className="text-lg font-bold text-primary-900 mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            <button className="w-full text-left px-4 py-3 bg-secondary-50 hover:bg-secondary-100 rounded-lg text-sm text-secondary-700 transition-colors font-medium">
                                + Add New Service
                            </button>
                            <button className="w-full text-left px-4 py-3 bg-secondary-50 hover:bg-secondary-100 rounded-lg text-sm text-secondary-700 transition-colors font-medium">
                                + Post New Job Opening
                            </button>
                            <button className="w-full text-left px-4 py-3 bg-secondary-50 hover:bg-secondary-100 rounded-lg text-sm text-secondary-700 transition-colors font-medium">
                                View All Applications
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
