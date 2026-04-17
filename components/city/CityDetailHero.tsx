import Image from "next/image";
import { Star, Heart, MapPin } from "lucide-react";
import { City } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CityDetailHeroProps {
  city: City;
}

export default function CityDetailHero({ city }: CityDetailHeroProps) {
  return (
    <div className="relative w-full h-[300px] md:h-[450px]">
      {/* Background Image */}
      <Image
        src={city.imageUrl}
        alt={city.name}
        fill
        priority
        className="object-cover"
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end">
        <div className="container mx-auto px-4 pb-8 md:pb-12 text-white">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {city.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold">{city.name}</h1>
              
              <div className="flex items-center gap-4 text-sm md:text-base opacity-90">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{city.district}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold">{city.rating}</span>
                  <span className="opacity-70">({city.reviewCount} 리뷰)</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 rounded-full px-8">
                방문 인증하기
              </Button>
              <Button size="icon" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30 text-white rounded-full backdrop-blur-sm">
                <Heart className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
