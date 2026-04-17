"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      size="icon"
      className="fixed bottom-8 left-8 rounded-full w-12 h-12 shadow-2xl bg-white text-slate-900 border hover:bg-slate-50 z-50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
      onClick={scrollToTop}
    >
      <ChevronUp className="w-6 h-6" />
      <span className="sr-only">맨 위로 이동</span>
    </Button>
  );
}
