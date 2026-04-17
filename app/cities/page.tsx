import { CITIES } from "@/lib/mock-data";
import CityListHeader from "@/components/cities/CityListHeader";
import CityFilter from "@/components/cities/CityFilter";
import CityGrid from "@/components/cities/CityGrid";
import CityListItem from "@/components/cities/CityListItem";
import Pagination from "@/components/cities/Pagination";
import { SearchX } from "lucide-react";

export default async function CitiesPage({
  searchParams,
}: {
  searchParams: { region?: string; sort?: string; view?: string; q?: string };
}) {
  const { region, sort, view = "grid", q } = searchParams;

  // 1. Filtering Logic (Mock)
  let filteredCities = [...CITIES];

  if (region && region !== "전체") {
    filteredCities = filteredCities.filter((c) => c.region === region);
  }

  if (q) {
    filteredCities = filteredCities.filter((c) => 
      c.name.toLowerCase().includes(q.toLowerCase())
    );
  }

  // 2. Sorting Logic (Mock)
  if (sort === "reviews") {
    filteredCities.sort((a, b) => b.reviewCount - a.reviewCount);
  } else if (sort === "price") {
    filteredCities.sort((a, b) => a.scores.price - b.scores.price);
  } else {
    // Default: rating
    filteredCities.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8 max-w-7xl space-y-8">
        {/* Header Section */}
        <CityListHeader totalCount={filteredCities.length} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filter Area */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <CityFilter />
            </div>
          </aside>

          {/* Main Content - City List Area */}
          <main className="lg:col-span-3 space-y-6">
            {filteredCities.length > 0 ? (
              <>
                {view === "grid" ? (
                  <CityGrid cities={filteredCities} />
                ) : (
                  <div className="space-y-4">
                    {filteredCities.map((city) => (
                      <CityListItem key={city.id} city={city} />
                    ))}
                  </div>
                )}
                
                {/* Pagination */}
                <Pagination />
              </>
            ) : (
              <div className="bg-white border rounded-2xl py-32 flex flex-col items-center justify-center text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
                  <SearchX className="w-8 h-8 text-slate-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">검색 결과가 없습니다</h3>
                  <p className="text-slate-500 font-medium text-sm">
                    필터를 초기화하거나 다른 키워드로 검색해보세요.
                  </p>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
