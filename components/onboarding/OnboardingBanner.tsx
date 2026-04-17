"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OnboardingBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage only after mount to avoid hydration mismatch
    const hasSeenBanner = typeof window !== "undefined" && localStorage.getItem("nomad-onboarding-seen");
    if (!hasSeenBanner) {
      // Use setTimeout to avoid synchronous setState in effect warning
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
    localStorage.setItem("nomad-onboarding-seen", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white relative overflow-hidden group">
      <div className="container mx-auto px-4 py-3 md:py-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-2 font-bold text-sm md:text-base">
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span>반가워요! 당신의 완벽한 워케이션 도시를 지금 찾아보세요.</span>
        </div>
        <Link href="/cities" onClick={closeBanner}>
          <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90 font-black rounded-full h-8 px-5 text-xs gap-1 group-hover:scale-105 transition-transform border-none">
            도시 보러가기
            <ArrowRight className="w-3 h-3" />
          </Button>
        </Link>
        <button 
          onClick={closeBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
        >
          <X className="w-4 h-4" />
          <span className="sr-only">닫기</span>
        </button>
      </div>
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.2)_0,transparent_50%)]" />
    </div>
  );
}
