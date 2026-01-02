"use client";

import { useState } from 'react';
import { siteData } from '@/content/siteData';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactClient() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "b3793915-85fb-4808-8f31-14a37ac33aa5");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSuccess(true);
                (e.target as HTMLFormElement).reset();
            } else {
                setError(data.message || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            console.error("Submission Error:", err);
            setError('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <MainLayout>
            <div className="relative min-h-screen pt-24 md:pt-40 pb-20 overflow-hidden bg-luxury-white">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-luxury-gold/5 rounded-full blur-[150px] pointer-events-none" />

                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                        {/* Information Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="pt-10"
                        >
                            <span className="text-xs md:text-sm font-medium tracking-[0.4em] text-luxury-gold uppercase mb-8 block">Private Access</span>
                            <h1 className="font-display text-4xl md:text-7xl font-bold text-luxury-onyx mb-10 leading-[0.9]">
                                Begin the <br />
                                <span className="font-light italic text-luxury-gold-shine">Conversation.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-luxury-onyx/60 max-w-md leading-relaxed mb-12 md:mb-20 font-light">
                                Consultations are available by appointment only. Please submit your preliminary details to initiate a review by our private client team.
                            </p>

                            <div className="space-y-8 md:space-y-12">
                                <div className="flex items-start gap-6 md:gap-8 group">
                                    <div className="w-12 h-12 border border-luxury-platinum rounded-full flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-white transition-all duration-500 shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-luxury-onyx mb-2">Private Office</h3>
                                        <p className="text-luxury-onyx/60 leading-relaxed font-light">{siteData.general.address}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 md:gap-8 group">
                                    <div className="w-12 h-12 border border-luxury-platinum rounded-full flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-white transition-all duration-500 shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-luxury-onyx mb-2">Concierge Line</h3>
                                        <p className="text-luxury-onyx/60 leading-relaxed font-light">{siteData.general.contactPhone}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 md:gap-8 group">
                                    <div className="w-12 h-12 border border-luxury-platinum rounded-full flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-white transition-all duration-500 shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-luxury-onyx mb-2">Priority Mail</h3>
                                        <p className="text-luxury-onyx/60 leading-relaxed font-light">{siteData.general.contactEmail}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form Side */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="bg-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl shadow-luxury-onyx/5 border border-luxury-platinum/50 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-transparent to-luxury-gold/5 pointer-events-none" />

                            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12 relative z-10">
                                <div className="space-y-6 md:space-y-8">
                                    <div className="group">
                                        <label htmlFor="name" className="text-xs font-bold tracking-widest text-luxury-onyx/40 uppercase mb-2 block">Full Name</label>
                                        <input
                                            id="name" name="name" required
                                            placeholder="Ex. Alexander Sterling"
                                            className="w-full bg-transparent border-b border-luxury-platinum py-3 md:py-4 text-lg md:text-2xl text-luxury-onyx placeholder:text-luxury-onyx/20 focus:outline-none focus:border-luxury-gold transition-colors font-display"
                                        />
                                    </div>
                                    <div className="group">
                                        <label htmlFor="email" className="text-xs font-bold tracking-widest text-luxury-onyx/40 uppercase mb-2 block">Work Email</label>
                                        <input
                                            id="email" name="email" type="email" required
                                            placeholder="Ex. alexander@enterprise.com"
                                            className="w-full bg-transparent border-b border-luxury-platinum py-3 md:py-4 text-lg md:text-xl text-luxury-onyx placeholder:text-luxury-onyx/20 focus:outline-none focus:border-luxury-gold transition-colors font-light"
                                        />
                                    </div>
                                    <div className="group">
                                        <label htmlFor="message" className="text-xs font-bold tracking-widest text-luxury-onyx/40 uppercase mb-2 block">Request Details</label>
                                        <textarea
                                            id="message" name="message" required rows={3}
                                            placeholder="Briefly describe your requirements..."
                                            className="w-full bg-transparent border-b border-luxury-platinum py-3 md:py-4 text-lg md:text-xl text-luxury-onyx placeholder:text-luxury-onyx/20 focus:outline-none focus:border-luxury-gold transition-colors font-light resize-none"
                                        />
                                    </div>
                                </div>

                                {error && <p className="text-red-500 text-sm">{error}</p>}
                                {success && <p className="text-emerald-600 text-sm">Request received. Our team will be in touch shortly.</p>}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-5 md:py-6 bg-luxury-onyx text-white font-bold tracking-widest uppercase text-xs md:text-sm hover:bg-luxury-gold transition-colors duration-500 flex items-center justify-between px-6 md:px-8 rounded-full group mt-6 md:mt-8"
                                >
                                    {loading ? 'Processing...' : 'Submit Request'}
                                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-luxury-gold transition-all">
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </Container>
            </div>
        </MainLayout>
    );
}
