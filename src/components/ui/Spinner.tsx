"use client";

import React from "react";
import { cn } from "@/utils/cn";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  label?: string;
}

export function Spinner({
  size = "md",
  variant = "primary",
  className,
  label = "Loading...",
}: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-3",
  };

  const variantClasses = {
    primary: "border-blue-500 border-t-transparent",
    secondary: "border-gray-500 border-t-transparent",
    ghost: "border-white border-t-transparent",
  };

  return (
    <div role="status" className="flex items-center gap-2">
      <div
        className={cn(
          "animate-spin rounded-full",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}
