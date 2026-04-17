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
      <span className="text-neon-blue/70 w-3">{icon}</span>
      <span className="text-muted-foreground w-8 shrink-0">{label}</span>
      <Progress value={(score / 5) * 100} className="h-1.5 flex-1 bg-white/10" />
      <span className="text-neon-blue w-6 text-right font-mono">{score.toFixed(1)}</span>
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
              ? "fill-neon-pink text-neon-pink neon-glow-pink"
              : "text-white/10"
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
    <article className="group flex flex-col glass-card rounded-xl border-white/10 overflow-hidden hover:neon-border-blue transition-all duration-300">
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={city.imageUrl}
          alt={`${city.name} 대표 이미지`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent opacity-60" />
        <div className="absolute top-3 right-3">
          <FavoriteButton />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-4 flex-1 bg-cyber-surface/40 backdrop-blur-md">
        {/* City name & region */}
        <div>
          <h3 className="font-semibold text-base text-white group-hover:text-neon-blue transition-colors">{city.name}</h3>
          <p className="text-xs text-white/50">{city.district}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <StarRating rating={city.rating} />
          <span className="text-sm font-bold text-neon-pink">{city.rating.toFixed(1)}</span>
          <span className="text-xs text-white/40 flex items-center gap-1">
            <Users className="h-3 w-3" />
            {city.reviewCount}개
          </span>
        </div>

        {/* Score bars */}
        <div className="flex flex-col gap-1.5">
          <ScoreRow
            icon={<Wifi className="h-3 w-3" />}
            label="와이파이"
            score={city.scores.wifi}
          />
          <ScoreRow
            icon={<Coffee className="h-3 w-3" />}
            label="카페"
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
        <div className="flex flex-wrap gap-1">
          {city.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-[10px] bg-white/5 text-white/70 border-white/10 hover:bg-neon-blue/20 hover:text-neon-blue transition-all px-2 py-0"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Button */}
        <Button
          variant="outline"
          size="sm"
          className="mt-auto w-full border-white/10 hover:border-neon-blue hover:text-neon-blue hover:bg-neon-blue/10 transition-all duration-300"
        >
          자세히 보기
        </Button>
      </div>
    </article>
  );
}
