"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-50">
                <div className="w-5 h-5" />
                <span className="sr-only">Loading theme</span>
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center group outline-none focus-visible:ring-2 focus-visible:ring-regal-gold"
            aria-label="Toggle theme"
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-regal-gold" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-regal-gold" />
        </button>
    );
}
