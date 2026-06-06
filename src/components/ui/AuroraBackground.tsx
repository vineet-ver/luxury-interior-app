"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AuroraBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-luxury-white transition-colors duration-500">
            <div className="absolute top-[-50%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-luxury-platinum/40 blur-[120px] mix-blend-multiply animate-float" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-luxury-gold/10 blur-[100px] mix-blend-multiply animate-[float_8s_ease-in-out_infinite_reverse]" />
            <div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-indigo-50/50 blur-[150px] mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite]" />

            {/* Grain Overlay */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        </div>
    );
}
