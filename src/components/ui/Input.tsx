import { InputHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
    ({ className, ...props }, ref) => {
        return (
            <input
                ref={ref}
                className={cn(
                    'flex h-11 w-full rounded-md border border-luxury-platinum bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-luxury-onyx/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-luxury-gold/50 disabled:cursor-not-allowed disabled:opacity-50 text-luxury-onyx',
                    className
                )}
                {...props}
            />
        );
    }
);
Input.displayName = 'Input';
