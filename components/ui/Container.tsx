import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "large" | "small";
}

export default function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 md:px-12",
        size === "default" && "max-w-[1280px]",
        size === "large" && "max-w-[1440px]",
        size === "small" && "max-w-[960px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
