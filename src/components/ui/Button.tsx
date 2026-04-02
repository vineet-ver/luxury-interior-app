import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
                    {
                        'bg-luxury-onyx text-luxury-white hover:bg-luxury-gold hover:scale-[1.02] active:scale-[0.98]': variant === 'primary',
                        'bg-luxury-gold text-white hover:bg-luxury-gold/80 hover:scale-[1.02] active:scale-[0.98]': variant === 'secondary',
                        'border border-luxury-platinum bg-transparent hover:bg-luxury-platinum/10 hover:text-luxury-onyx hover:border-luxury-gold/50': variant === 'outline',
                        'hover:bg-luxury-platinum/10 text-luxury-onyx/80 hover:text-luxury-onyx': variant === 'ghost',
                        'h-9 px-4 text-sm': size === 'sm',
                        'h-11 px-6 text-base': size === 'md',
                        'h-14 px-8 text-lg': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
