"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollAwareHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollAwareHeader({
  children,
  className,
}: ScrollAwareHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm"
          : "bg-transparent border-transparent",
        className
      )}
    >
      {children}
    </header>
  );
}
