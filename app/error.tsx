"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Home, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-4 text-center space-y-8 animate-in zoom-in-95 duration-300">
      <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center">
        <AlertCircle className="w-12 h-12 text-rose-500" />
      </div>
      
      <div className="space-y-3">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">앗! 무언가 잘못되었어요.</h2>
        <p className="text-slate-500 font-medium max-w-md mx-auto">
          죄송합니다. 예상치 못한 오류가 발생했습니다.<br />
          아래 버튼을 눌러 다시 시도하거나 홈으로 이동해주세요.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full max-w-xs sm:max-w-none justify-center">
        <Button 
          size="lg" 
          onClick={() => reset()}
          className="rounded-2xl h-14 px-8 font-black gap-2 shadow-lg shadow-primary/20"
        >
          <RefreshCcw className="w-5 h-5" />
          다시 시도하기
        </Button>
        <Link href="/">
          <Button variant="outline" size="lg" className="rounded-2xl h-14 px-8 font-bold gap-2 w-full">
            <Home className="w-5 h-5" />
            홈으로 이동
          </Button>
        </Link>
      </div>
      
      <p className="text-[10px] text-slate-300 font-mono">
        Error Digest: {error.digest || "N/A"}
      </p>
    </div>
  );
}
