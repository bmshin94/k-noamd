import { City } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Star, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface RelatedCitiesProps {
  cities: City[];
}

export default function RelatedCities({ cities }: RelatedCitiesProps) {
  if (cities.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold flex items-center gap-2">
        <MapPin className="w-5 h-5 text-primary" />
        주변 다른 도시
      </h3>
      
      <div className="flex lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
        {cities.map((city) => (
          <Link key={city.id} href={`/cities/${city.id}`} className="shrink-0 w-[280px] lg:w-full group">
            <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
              <div className="flex">
                <div className="relative w-24 h-24 shrink-0">
                  <Image
                    src={city.imageUrl}
                    alt={city.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-3 flex flex-col justify-center gap-1">
                  <h4 className="font-bold text-sm group-hover:text-primary transition-colors line-clamp-1">
                    {city.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{city.district}</p>
                  <div className="flex items-center gap-1 text-xs">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold">{city.rating}</span>
                    <span className="opacity-70">({city.reviewCount})</span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
