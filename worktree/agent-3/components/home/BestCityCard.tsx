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
        "group relative rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1",
        RANK_STYLES[city.rank ?? 1]
      )}
    >
      {/* Image */}
      <div className={cn("relative", large ? "h-80" : "h-52")}>
        <Image
          src={city.imageUrl}
          alt={`${city.name} 대표 이미지`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={city.rank === 1}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />

        {/* Medal badge */}
        <div className="absolute top-4 left-4 text-3xl drop-shadow-lg scale-110">{medal}</div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className={cn("font-extrabold tracking-tight drop-shadow-md", large ? "text-3xl" : "text-xl")}>
            {city.name}
          </h3>

          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-primary/30 backdrop-blur-md rounded-full border border-white/20">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <span className="text-sm font-bold">{city.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/90 drop-shadow-sm font-medium">
              <Users className="h-3.5 w-3.5" />
              <span className="text-sm">리뷰 {city.reviewCount}개</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {city.tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] px-2.5 py-0.5 bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm rounded-full font-semibold"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <Button
            size={large ? "lg" : "sm"}
            variant="secondary"
            className={cn(
              "mt-5 font-bold transition-all backdrop-blur-md hover:scale-105 active:scale-95 shadow-lg",
              large ? "w-auto px-10 bg-white text-primary hover:bg-white/90 rounded-2xl" : "w-full text-xs h-9 bg-white/20 hover:bg-white/30 text-white border-white/30 rounded-xl"
            )}
          >
            자세히 보기 <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}
