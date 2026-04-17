"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FavoriteButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="p-1.5 rounded-full bg-white/90 hover:bg-white shadow-sm transition-all"
      aria-label="즐겨찾기"
    >
      <Heart
        className={cn(
          "h-4 w-4 transition-colors",
          liked ? "fill-rose-500 text-rose-500" : "text-muted-foreground"
        )}
      />
    </button>
  );
}
