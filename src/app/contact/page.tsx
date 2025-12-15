"use client";

import { useState } from 'react';
import { siteData } from '@/content/siteData';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';

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
            // In a real scenario, we would insert into Supabase here
            // const { error } = await supabase.from('contacts').insert([data]);
            // if (error) throw error;

            // Simulating API call
            await new Promise(resolve => setTimeout(resolve, 1000));

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
            <section className="bg-secondary-50 py-16">
                <Container>
                    <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl mb-6">
                        Contact Us
                    </h1>
                    <p className="text-xl text-secondary-600 max-w-2xl">
                        {siteData.contact.formDescription}
                    </p>
                </Container>
            </section>

            <section className="py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary-100 rounded-lg text-primary-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary-900 mb-1">Our Office</h3>
                                    <p className="text-secondary-600">{siteData.general.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary-100 rounded-lg text-primary-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary-900 mb-1">Phone</h3>
                                    <p className="text-secondary-600">{siteData.general.contactPhone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary-100 rounded-lg text-primary-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary-900 mb-1">Email</h3>
                                    <p className="text-secondary-600">{siteData.general.contactEmail}</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <Card>
                            <CardContent className="pt-6">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">Full Name</label>
                                        <Input id="name" name="name" required placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">Email Address</label>
                                        <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">Phone Number</label>
                                        <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={4}
                                            className="w-full rounded-md border border-secondary-200 bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-secondary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    {error && <p className="text-red-600 text-sm">{error}</p>}
                                    {success && <p className="text-green-600 text-sm">Message sent successfully! We will get back to you soon.</p>}

                                    <Button type="submit" className="w-full" disabled={loading}>
                                        {loading ? 'Sending...' : 'Send Message'}
                                        {!loading && <Send className="ml-2 h-4 w-4" />}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </section>
        </MainLayout>
    );
}
