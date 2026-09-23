import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "lg" | "sm";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white font-semibold shadow-sm hover:bg-accent-hover active:scale-[0.97]",
  secondary:
    "bg-white text-text font-semibold border-2 border-accent hover:bg-surface-2 active:scale-[0.97]",
  ghost:
    "bg-transparent text-text-secondary hover:text-text hover:bg-surface active:scale-[0.97]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  default: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base min-h-[48px]",
};

export function Button({
  variant = "primary",
  size = "default",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[12px] font-medium transition-all duration-200 ease-out cursor-pointer whitespace-nowrap",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
