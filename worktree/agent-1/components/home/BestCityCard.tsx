import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, ArrowRight } from "lucide-react";
import { City } from "@/types";
import { cn } from "@/lib/utils";

const RANK_MEDALS: Record<number, string> = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
};

const RANK_STYLES: Record<number, string> = {
  1: "md:col-span-2 md:row-span-2",
  2: "",
  3: "",
};

interface BestCityCardProps {
  city: City;
  large?: boolean;
}

export default function BestCityCard({ city, large = false }: BestCityCardProps) {
  const medal = RANK_MEDALS[city.rank ?? 1];

  return (
    <article
      className={cn(
        "group relative overflow-hidden border border-black/5 hover:border-black transition-all duration-500 bg-white",
        RANK_STYLES[city.rank ?? 1]
      )}
    >
      {/* Image */}
      <div className={cn("relative", large ? "h-80" : "h-48")}>
        <Image
          src={city.imageUrl}
          alt={`${city.name} 대표 이미지`}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={city.rank === 1}
        />
        
        {/* Content overlay - Subtle bottom dark bar instead of full gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white via-white/40 to-transparent" />

        {/* Medal badge */}
        <div className="absolute top-4 left-4 text-3xl z-10">{medal}</div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-black z-10">
          <h3 className={cn("font-bold tracking-tight uppercase", large ? "text-2xl" : "text-lg")}>
            {city.name}
          </h3>

          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1.5 border-r border-black/10 pr-4">
              <Star className="h-3 w-3 fill-black text-black" />
              <span className="text-xs font-bold tracking-tighter">{city.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Users className="h-3 w-3" />
              <span className="text-[10px] font-bold uppercase tracking-wider">{city.reviewCount} REVIEWS</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {city.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-[9px] font-bold px-2 py-0.5 rounded-none bg-white text-black border-black/20 uppercase tracking-widest"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <Button
            size="sm"
            variant="outline"
            className={cn(
              "mt-6 rounded-none border-black hover:bg-black hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest",
              large ? "w-auto px-8" : "w-full h-10"
            )}
          >
            VIEW DETAILS <ArrowRight className="ml-2 h-3 w-3" />
          </Button>
        </div>
      </div>
    </article>
  );
}
