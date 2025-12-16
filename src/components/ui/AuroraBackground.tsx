"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AuroraBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-white dark:bg-obsidian-950 transition-colors duration-500">
            <div className="absolute top-[-50%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-200/40 dark:bg-primary-900/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-float" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-200/40 dark:bg-primary-700/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-[float_8s_ease-in-out_infinite_reverse]" />
            <div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-amber-200/30 dark:bg-metallic-gold/10 blur-[150px] mix-blend-multiply dark:mix-blend-overlay animate-[pulse_8s_ease-in-out_infinite]" />

            {/* Grain Overlay */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        </div>
    );
}
