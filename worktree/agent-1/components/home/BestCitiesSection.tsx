import { Trophy } from "lucide-react";
import { BEST_CITIES } from "@/lib/mock-data";
import BestCityCard from "./BestCityCard";

export default function BestCitiesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-12">
        <Trophy className="h-4 w-4 text-black" />
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">BEST CITIES OF THE MONTH</h2>
      </div>

      {/* Grid: 1위가 크게, 2·3위가 옆에 작게 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1위 — spans 2 columns */}
        {BEST_CITIES[0] && (
          <div className="md:col-span-2">
            <BestCityCard city={BEST_CITIES[0]} large />
          </div>
        )}

        {/* 2위, 3위 — stacked in 1 column */}
        <div className="flex flex-col gap-6">
          {BEST_CITIES.slice(1).map((city) => (
            <BestCityCard key={city.id} city={city} />
          ))}
        </div>
      </div>
    </section>
  );
}
