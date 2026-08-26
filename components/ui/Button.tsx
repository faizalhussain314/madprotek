import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "outline-yellow" | "outline";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  showArrow = false,
  className,
  href,
  onClick,
  type = "button",
  disabled = false,
  ...props
}: ButtonProps) {
  const baseClass = cn(
    "inline-flex items-center justify-center font-bold transition-all duration-300 cursor-pointer active:scale-95 group focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
    // Sizes
    size === "sm" && "px-5 py-2 text-xs rounded-xl h-10",
    size === "md" && "px-7 py-3.5 text-sm sm:text-base rounded-2xl h-[52px]",
    size === "lg" && "px-9 py-4 text-base sm:text-lg rounded-2xl h-[56px]",
    
    // Variants (Yellow, White/Border, Black)
    variant === "primary" && "bg-brand-yellow text-brand-black hover:bg-brand-yellow-bright shadow-sm hover:shadow-md hover:-translate-y-0.5",
    (variant === "secondary" || variant === "outline") && "bg-white text-brand-black border border-brand-black hover:bg-brand-black hover:text-white hover:-translate-y-0.5",
    variant === "dark" && "bg-brand-black text-white hover:bg-brand-yellow hover:text-brand-black hover:-translate-y-0.5",
    variant === "outline-yellow" && "bg-transparent text-brand-yellow border-2 border-brand-yellow hover:bg-brand-yellow hover:text-brand-black hover:-translate-y-0.5",
    
    className
  );

  const content = (
    <span className="inline-flex items-center justify-center space-x-2 whitespace-nowrap">
      {children}
      {showArrow && (
        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={baseClass} onClick={onClick as any} {...(props as any)}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClass} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
