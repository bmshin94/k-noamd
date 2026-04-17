import Image from "next/image";
import Link from "next/link";
import { Star, Users, MapPin, Wifi, Coffee, DollarSign, Train } from "lucide-react";
import { City } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface CityListItemProps {
  city: City;
}

export default function CityListItem({ city }: CityListItemProps) {
  return (
    <article className="group flex flex-col md:flex-row bg-card rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition-shadow h-auto md:h-52">
      {/* Thumbnail */}
      <Link href={`/cities/${city.id}`} className="relative w-full md:w-72 h-48 md:h-full overflow-hidden block">
        <Image
          src={city.imageUrl}
          alt={city.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </Link>

      {/* Info Content */}
      <div className="flex-1 p-5 flex flex-col justify-between gap-4">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
          <div className="space-y-1">
            <Link href={`/cities/${city.id}`} className="hover:text-primary transition-colors">
              <h3 className="font-bold text-xl">{city.name}</h3>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {city.district}
              </p>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="font-bold">{city.rating}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>리뷰 {city.reviewCount}개</span>
            </div>
          </div>
        </div>

        {/* Score Grid (Compact) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-3 rounded-lg">
          {[
            { label: "와이파이", score: city.scores.wifi, icon: <Wifi className="w-3 h-3" /> },
            { label: "카페", score: city.scores.cafe, icon: <Coffee className="w-3 h-3" /> },
            { label: "물가", score: city.scores.price, icon: <DollarSign className="w-3 h-3" /> },
            { label: "교통", score: city.scores.transport, icon: <Train className="w-3 h-3" /> },
          ].map((item) => (
            <div key={item.label} className="space-y-1.5">
              <div className="flex justify-between text-[10px] font-bold text-slate-500">
                <span className="flex items-center gap-1">{item.icon}{item.label}</span>
                <span>{item.score.toFixed(1)}</span>
              </div>
              <Progress value={(item.score / 5) * 100} className="h-1" />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {city.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-[10px] px-2 py-0">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
