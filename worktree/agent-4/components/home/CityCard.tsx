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
    <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-medium">
      <span className="text-primary w-3">{icon}</span>
      <span className="text-foreground/60 w-10 shrink-0">{label}</span>
      <Progress value={(score / 5) * 100} className="h-1 flex-1 bg-foreground/5" />
      <span className="text-foreground/80 w-6 text-right font-bold">{score.toFixed(1)}</span>
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
              ? "fill-primary text-primary"
              : "text-foreground/10"
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
    <article className="group flex flex-col bg-card rounded-none border border-foreground/10 overflow-hidden shadow-none hover:border-primary transition-all duration-500">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={city.imageUrl}
          alt={`${city.name} 대표 이미지`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.9] group-hover:brightness-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        <div className="absolute top-4 right-4">
          <FavoriteButton />
        </div>
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-primary text-background border-none rounded-none text-[10px] uppercase tracking-widest font-bold px-2 py-0.5">
            Featured
          </Badge>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        {/* City name & region */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-serif text-xl mb-1 group-hover:text-primary transition-colors">{city.name}</h3>
            <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">{city.district}</p>
          </div>
          <div className="text-right">
            <span className="block text-xl font-serif text-primary italic leading-none">{city.rating.toFixed(1)}</span>
            <span className="text-[10px] uppercase tracking-tighter text-foreground/30 font-bold">Rating</span>
          </div>
        </div>

        {/* Rating detail */}
        <div className="flex items-center gap-3 py-2 border-y border-foreground/5">
          <StarRating rating={city.rating} />
          <span className="text-[10px] font-bold text-foreground/40 flex items-center gap-1 uppercase tracking-widest">
            <Users className="h-3 w-3 text-primary/50" />
            {city.reviewCount} Reviews
          </span>
        </div>

        {/* Score bars */}
        <div className="flex flex-col gap-2.5">
          <ScoreRow
            icon={<Wifi className="h-3 w-3" />}
            label="WIFI"
            score={city.scores.wifi}
          />
          <ScoreRow
            icon={<Coffee className="h-3 w-3" />}
            label="CAFE"
            score={city.scores.cafe}
          />
          <ScoreRow
            icon={<DollarSign className="h-3 w-3" />}
            label="COST"
            score={city.scores.price}
          />
          <ScoreRow
            icon={<Train className="h-3 w-3" />}
            label="MOVE"
            score={city.scores.transport}
          />
        </div>

        {/* Button */}
        <Button
          variant="outline"
          size="sm"
          className="mt-4 w-full rounded-none border-foreground/20 hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 text-[10px] uppercase tracking-[0.2em] font-bold h-10"
        >
          View Collection
        </Button>
      </div>
    </article>
  );
}
