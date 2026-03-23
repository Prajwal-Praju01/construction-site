"use client";
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg" | "xl";
  asChild?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      loading = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const variants = {
      primary:
        "bg-primary text-white hover:bg-primary-600 focus:ring-primary/30 shadow-md hover:shadow-xl",
      secondary:
        "bg-white text-primary border-2 border-white/90 hover:bg-white/90 focus:ring-white/30 shadow-md",
      outline:
        "bg-transparent text-primary border-2 border-primary/80 hover:bg-primary hover:text-white focus:ring-primary/30",
      ghost:
        "bg-transparent text-primary hover:bg-primary/5 focus:ring-primary/20",
      accent:
        "bg-accent text-white hover:bg-accent-600 focus:ring-accent/30 shadow-md hover:shadow-xl",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm rounded-md gap-1.5",
      md: "px-6 py-3 text-base rounded-lg gap-2",
      lg: "px-8 py-4 text-lg rounded-xl gap-2.5",
      xl: "px-10 py-5 text-xl rounded-xl gap-3",
    };

    const content = loading && !asChild ? (
      <>
        <svg
          className="animate-spin h-4 w-4 mr-2"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
        {children}
      </>
    ) : (
      children
    );

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold font-heading relative overflow-hidden",
          "transition-all duration-300 focus:outline-none focus:ring-4",
          "disabled:opacity-50 disabled:pointer-events-none",
          "active:scale-[0.985]",
          variants[variant],
          sizes[size],
          className
        )}
        disabled={loading || props.disabled}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);

Button.displayName = "Button";
export default Button;
