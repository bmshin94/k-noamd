"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="gap-2 text-slate-500 font-bold hover:text-primary pl-0"
      onClick={() => router.back()}
    >
      <ChevronLeft className="w-5 h-5" />
      뒤로가기
    </Button>
  );
}
