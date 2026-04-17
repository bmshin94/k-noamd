"use client";

import { Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "NomadKorea",
          text: "여기 워케이션 장소 대박이야! 같이 가볼래?",
          url: window.location.href,
        });
      } catch (err) {
        console.log("공유 실패:", err);
      }
    } else {
      // Fallback: Copy to clipboard
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="rounded-full gap-2 font-bold border-slate-200"
      onClick={handleShare}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-emerald-500" />
          복사됨!
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          공유하기
        </>
      )}
    </Button>
  );
}
