"use client";

import { useState } from 'react';
import { siteData } from '@/content/siteData';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import AuroraBackground from '@/components/ui/AuroraBackground';

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            message: formData.get('message') as string,
        };

        try {
            // Simulating API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log("Form Data Submitted:", data);
            setSuccess(true);
            (e.target as HTMLFormElement).reset();
        } catch (err) {
            console.error("Submission Error:", err);
            setError('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <MainLayout>
            <div className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gray-50 dark:bg-obsidian-950 transition-colors duration-500">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-100/50 dark:from-primary-900/10 to-transparent pointer-events-none"></div>
                <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-amber-100/50 dark:bg-metallic-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                            Let's <span className="text-amber-600 dark:text-metallic-gold">Collaborate.</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            {siteData.contact.formDescription} <br />
                            Ready to upgrade your enterprise infrastructure?
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Contact Info Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="glass p-8 rounded-3xl border border-gray-200 dark:border-white/5 hover:border-amber-400/30 dark:hover:border-metallic-gold/30 transition-all duration-300 group bg-white/70 dark:bg-white/5 shadow-xl dark:shadow-none">
                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-amber-50 dark:bg-white/5 rounded-2xl text-amber-600 dark:text-metallic-gold group-hover:bg-amber-600 dark:group-hover:bg-metallic-gold group-hover:text-white dark:group-hover:text-obsidian-950 transition-colors">
                                        <MapPin className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">Headquarters</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{siteData.general.address}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass p-8 rounded-3xl border border-gray-200 dark:border-white/5 hover:border-amber-400/30 dark:hover:border-metallic-gold/30 transition-all duration-300 group bg-white/70 dark:bg-white/5 shadow-xl dark:shadow-none">
                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-amber-50 dark:bg-white/5 rounded-2xl text-amber-600 dark:text-metallic-gold group-hover:bg-amber-600 dark:group-hover:bg-metallic-gold group-hover:text-white dark:group-hover:text-obsidian-950 transition-colors">
                                        <Phone className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">Direct Line</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-lg">{siteData.general.contactPhone}</p>
                                        <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am - 6pm IST</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass p-8 rounded-3xl border border-gray-200 dark:border-white/5 hover:border-amber-400/30 dark:hover:border-metallic-gold/30 transition-all duration-300 group bg-white/70 dark:bg-white/5 shadow-xl dark:shadow-none">
                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-amber-50 dark:bg-white/5 rounded-2xl text-amber-600 dark:text-metallic-gold group-hover:bg-amber-600 dark:group-hover:bg-metallic-gold group-hover:text-white dark:group-hover:text-obsidian-950 transition-colors">
                                        <Mail className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">Email Us</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-lg">{siteData.general.contactEmail}</p>
                                        <p className="text-sm text-gray-500 mt-1">24/7 Enterprise Support</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="relative isolate p-8 md:p-10 rounded-[32px] bg-white/80 dark:bg-gradient-to-b dark:from-white/10 dark:to-transparent border border-gray-200 dark:border-white/10 backdrop-blur-2xl shadow-xl dark:shadow-none">
                                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                                    <MessageSquare className="w-6 h-6 text-amber-600 dark:text-metallic-gold" />
                                    Send a Request
                                </h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Full Name</label>
                                            <input
                                                id="name" name="name" required
                                                placeholder="John Doe"
                                                className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-amber-500/50 dark:focus:border-metallic-gold/50 focus:ring-1 focus:ring-amber-500/50 dark:focus:ring-metallic-gold/50 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Phone</label>
                                            <input
                                                id="phone" name="phone" type="tel"
                                                placeholder="+91..."
                                                className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-amber-500/50 dark:focus:border-metallic-gold/50 focus:ring-1 focus:ring-amber-500/50 dark:focus:ring-metallic-gold/50 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Work Email</label>
                                        <input
                                            id="email" name="email" type="email" required
                                            placeholder="john@company.com"
                                            className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-amber-500/50 dark:focus:border-metallic-gold/50 focus:ring-1 focus:ring-amber-500/50 dark:focus:ring-metallic-gold/50 transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Project Details</label>
                                        <textarea
                                            id="message" name="message" required rows={4}
                                            placeholder="Tell us about your requirements..."
                                            className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-amber-500/50 dark:focus:border-metallic-gold/50 focus:ring-1 focus:ring-amber-500/50 dark:focus:ring-metallic-gold/50 transition-all resize-none"
                                        />
                                    </div>

                                    {error && <p className="text-red-500 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-500/20">{error}</p>}
                                    {success && <p className="text-emerald-500 dark:text-emerald-400 text-sm bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg border border-emerald-200 dark:border-emerald-500/20">Message sent successfully! We will initiate contact shortly.</p>}

                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full h-14 bg-gray-900 dark:bg-white text-white dark:text-black font-bold text-lg rounded-xl hover:bg-amber-600 dark:hover:bg-metallic-gold hover:text-white dark:hover:text-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg active:shadow-none"
                                    >
                                        {loading ? 'Processing...' : 'Submit Inquiry'}
                                        {!loading && <Send className="ml-2 h-5 w-5" />}
                                    </Button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </div>
        </MainLayout>
    );
}
