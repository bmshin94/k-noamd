"use client";

import { LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

export default function ViewToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const view = searchParams.get("view") || "grid";

  const setView = (newView: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", newView);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => setView("grid")}
        className={cn(
          "w-8 h-8 transition-all",
          view === "grid" ? "bg-white shadow-sm text-primary" : "text-muted-foreground hover:text-primary"
        )}
      >
        <LayoutGrid className="w-4 h-4" />
        <span className="sr-only">그리드 뷰</span>
      </Button>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => setView("list")}
        className={cn(
          "w-8 h-8 transition-all",
          view === "list" ? "bg-white shadow-sm text-primary" : "text-muted-foreground hover:text-primary"
        )}
      >
        <List className="w-4 h-4" />
        <span className="sr-only">리스트 뷰</span>
      </Button>
    </div>
  );
}
