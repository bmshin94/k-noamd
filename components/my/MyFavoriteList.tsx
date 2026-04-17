import { MY_FAVORITES } from "@/lib/mock-data";
import CityCard from "@/components/home/CityCard";

export default function MyFavoriteList() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-slate-900">즐겨찾는 도시 <span className="text-primary">{MY_FAVORITES.length}</span></h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MY_FAVORITES.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
}
