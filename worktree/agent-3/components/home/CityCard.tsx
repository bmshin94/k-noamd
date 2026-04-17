import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Star, Users, Wifi, Coffee, DollarSign, Train } from "lucide-react";
import { City } from "@/types";
import FavoriteButton from "./FavoriteButton";

interface ScoreRowProps {
  icon: React.ReactNode;
  label: string;
  score: number;
}

function ScoreRow({ icon, label, score }: ScoreRowProps) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-muted-foreground w-3">{icon}</span>
      <span className="text-muted-foreground w-8 shrink-0">{label}</span>
      <Progress value={(score / 5) * 100} className="h-1.5 flex-1 bg-muted" />
      <span className="text-muted-foreground w-6 text-right">{score.toFixed(1)}</span>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < Math.floor(rating)
              ? "fill-primary text-primary"
              : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
}

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <article className="group flex flex-col bg-card rounded-2xl border border-border/50 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={city.imageUrl}
          alt={`${city.name} 대표 이미지`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3">
          <FavoriteButton />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-5 flex-1 bg-gradient-to-b from-transparent to-primary/5">
        {/* City name & region */}
        <div>
          <h3 className="font-bold text-lg text-foreground tracking-tight">{city.name}</h3>
          <p className="text-xs text-muted-foreground/80 font-medium">{city.district}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <StarRating rating={city.rating} />
          <span className="text-sm font-bold text-primary">{city.rating.toFixed(1)}</span>
          <span className="text-xs text-muted-foreground flex items-center gap-1 font-medium">
            <Users className="h-3 w-3" />
            {city.reviewCount}개
          </span>
        </div>

        {/* Score bars */}
        <div className="flex flex-col gap-2 my-1">
          <ScoreRow
            icon={<Wifi className="h-3 w-3" />}
            label="연결"
            score={city.scores.wifi}
          />
          <ScoreRow
            icon={<Coffee className="h-3 w-3" />}
            label="작업"
            score={city.scores.cafe}
          />
          <ScoreRow
            icon={<DollarSign className="h-3 w-3" />}
            label="물가"
            score={city.scores.price}
          />
          <ScoreRow
            icon={<Train className="h-3 w-3" />}
            label="교통"
            score={city.scores.transport}
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {city.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-[10px] px-2.5 py-0.5 rounded-full bg-secondary/50 text-secondary-foreground font-semibold border-none"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Button */}
        <Button
          variant="outline"
          size="sm"
          className="mt-4 w-full rounded-xl border-primary/20 text-primary font-bold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
        >
          자세히 보기
        </Button>
      </div>
    </article>
  );
}
