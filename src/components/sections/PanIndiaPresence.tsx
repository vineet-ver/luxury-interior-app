"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const locations = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Chandigarh"
];

export function PanIndiaPresence() {
    return (
        <section className="relative py-32 bg-luxury-onyx overflow-hidden">
            {/* Background Map */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Image
                    src="/pan_india_map_luxury.png"
                    alt="Pan India Network"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-onyx/90 via-luxury-onyx/20 to-luxury-onyx/90" />
            </div>

            <div className="container relative z-10 mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-luxury-gold text-lg tracking-[0.3em] uppercase mb-4 font-medium">
                        National Footprint
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-display font-medium text-luxury-white mb-8">
                        Delivering Excellence, <br />
                        <span className="italic text-luxury-platinum/80 font-light">Across India.</span>
                    </h3>
                </motion.div>
            </div>

            {/* Marquee Animation */}
            <div className="relative z-10 mt-16 w-full overflow-hidden border-y border-luxury-gold/10 bg-luxury-white/5 backdrop-blur-sm py-6">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 15,
                        ease: "linear",
                    }}
                >
                    {[...locations, ...locations].map((location, i) => (
                        <div key={i} className="flex items-center gap-10 mx-10">
                            <span className="text-3xl md:text-5xl font-display text-luxury-white/80 tracking-wide">
                                {location}
                            </span>
                            <div className="w-2 h-2 rounded-full bg-luxury-gold" />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="container relative z-10 mx-auto px-6 mt-16 text-center max-w-2xl">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-luxury-platinum/60 font-light text-lg leading-relaxed"
                >
                    From corporate hubs in Gurugram to tech parks in Bangalore, our turnkey expertise knows no boundaries. We are where you need us to be.
                </motion.p>
            </div>
        </section>
    );
}
