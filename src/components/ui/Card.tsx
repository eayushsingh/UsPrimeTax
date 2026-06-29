import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-[var(--color-gray-soft-2)] bg-white text-[var(--color-text-primary)] shadow-[var(--shadow-card)]",
          hoverEffect && "transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card };
