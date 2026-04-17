import { LayoutGrid, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GRID_CITIES } from "@/lib/mock-data";
import CityCard from "./CityCard";

export default function CityCardGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section header */}
      <div className="flex items-center gap-2 mb-6">
        <LayoutGrid className="h-5 w-5 text-emerald-600" />
        <h2 className="text-xl font-bold">전체 도시 목록</h2>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GRID_CITIES.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>

      {/* Load more */}
      <div className="flex justify-center mt-10">
        <Button variant="outline" size="lg" className="gap-2 px-8">
          <ChevronDown className="h-4 w-4" />
          더 많은 도시 보기 (26)
        </Button>
      </div>
    </section>
  );
}
