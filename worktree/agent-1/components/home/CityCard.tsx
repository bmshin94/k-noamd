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
    <div className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-tighter">
      <span className="text-black w-3">{icon}</span>
      <span className="text-muted-foreground w-10 shrink-0">{label}</span>
      <div className="h-1 flex-1 bg-secondary overflow-hidden">
        <div 
          className="h-full bg-black transition-all duration-500" 
          style={{ width: `${(score / 5) * 100}%` }} 
        />
      </div>
      <span className="text-black w-6 text-right font-bold">{score.toFixed(1)}</span>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${
            i < Math.floor(rating)
              ? "fill-black text-black"
              : "text-black/10"
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
    <article className="group flex flex-col bg-white border border-black/5 hover:border-black transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-secondary">
        <Image
          src={city.imageUrl}
          alt={`${city.name} 대표 이미지`}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4">
          <FavoriteButton />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-6 p-6 flex-1">
        {/* City name & region */}
        <div className="space-y-1">
          <h3 className="font-bold text-lg tracking-tight uppercase">{city.name}</h3>
          <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">{city.district}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3 border-y border-black/5 py-3">
          <StarRating rating={city.rating} />
          <span className="text-xs font-bold">{city.rating.toFixed(1)}</span>
          <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider ml-auto flex items-center gap-1.5">
            <Users className="h-3 w-3" />
            {city.reviewCount} REVIEWS
          </span>
        </div>

        {/* Score bars */}
        <div className="flex flex-col gap-3">
          <ScoreRow
            icon={<Wifi className="h-3.5 w-3.5" />}
            label="WIFI"
            score={city.scores.wifi}
          />
          <ScoreRow
            icon={<Coffee className="h-3.5 w-3.5" />}
            label="CAFE"
            score={city.scores.cafe}
          />
          <ScoreRow
            icon={<DollarSign className="h-3.5 w-3.5" />}
            label="PRICE"
            score={city.scores.price}
          />
          <ScoreRow
            icon={<Train className="h-3.5 w-3.5" />}
            label="TRANS"
            score={city.scores.transport}
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {city.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-[9px] font-bold px-2 py-0.5 rounded-none border-black/10 text-muted-foreground uppercase tracking-wider"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Button */}
        <Button
          variant="outline"
          size="sm"
          className="mt-4 w-full h-10 rounded-none border-black hover:bg-black hover:text-white transition-all text-[10px] font-bold uppercase tracking-[0.2em]"
        >
          VIEW DETAILS
        </Button>
      </div>
    </article>
  );
}
