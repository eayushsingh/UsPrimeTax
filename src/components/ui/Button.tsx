import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-[var(--color-red)] text-white hover:bg-[var(--color-red-hover)] hover:-translate-y-0.5 hover:shadow-lg",
      secondary: "bg-white text-[var(--color-navy)] border border-[var(--color-gray-soft-2)] hover:border-gray-300 hover:-translate-y-0.5 hover:shadow-md",
      outline: "border-2 border-[var(--color-red)] text-[var(--color-red)] hover:bg-[var(--color-red)] hover:text-white hover:-translate-y-0.5",
      ghost: "text-[var(--color-text-secondary)] hover:text-[var(--color-red)] hover:bg-red-50",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
