import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
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
        "group relative rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-shadow",
        RANK_STYLES[city.rank ?? 1]
      )}
    >
      <Link href={`/cities/${city.id}`} className="block relative">
        {/* Image */}
        <div className={cn("relative", large ? "h-72" : "h-44")}>
          <Image
            src={city.imageUrl}
            alt={`${city.name} 대표 이미지`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={city.rank === 1}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Medal badge */}
          <div className="absolute top-3 left-3 text-2xl">{medal}</div>

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className={cn("font-bold", large ? "text-xl" : "text-base")}>
              {city.name}
            </h3>

            <div className="flex items-center gap-3 mt-1">
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span className="text-sm font-medium">{city.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-1 text-white/80">
                <Users className="h-3 w-3" />
                <span className="text-xs">리뷰 {city.reviewCount}개</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mt-2">
              {city.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="text-[10px] px-1.5 py-0 bg-white/20 text-white border-white/30 hover:bg-white/30"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "mt-3 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm",
                large ? "w-auto inline-flex" : "w-full text-xs h-8 flex"
              )}
            >
              자세히 보기 <ArrowRight className="ml-1 h-3 w-3" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
