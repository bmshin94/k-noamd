"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { REGION_TABS } from "@/lib/mock-data";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CityFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentRegion = searchParams.get("region") || "전체";
  const currentSort = searchParams.get("sort") || "rating";
  const currentQuery = searchParams.get("q") || "";

  const updateParams = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "전체" && value !== "rating") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const q = formData.get("q") as string;
    updateParams("q", q);
  };

  const clearFilters = () => {
    router.push(pathname);
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-2xl border shadow-sm">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="relative">
        <Input
          name="q"
          defaultValue={currentQuery}
          placeholder="도시 이름으로 검색해보세요"
          className="pl-10 h-12 rounded-xl border-slate-200 focus:ring-primary"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <Button type="submit" className="absolute right-1.5 top-1/2 -translate-y-1/2 h-9 rounded-lg px-4 font-bold">
          검색
        </Button>
      </form>

      {/* Region Tabs */}
      <div className="space-y-3">
        <Label className="text-sm font-bold text-slate-700">지역별 탐색</Label>
        <Tabs value={currentRegion} onValueChange={(v) => updateParams("region", v)}>
          <TabsList className="bg-slate-100 p-1 w-full justify-start overflow-x-auto h-auto flex-wrap">
            {REGION_TABS.map((tab) => (
              <TabsTrigger key={tab.label} value={tab.label} className="rounded-md px-4 py-2 text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sort Select */}
        <div className="space-y-3">
          <Label className="text-sm font-bold text-slate-700">정렬 기준</Label>
          <Select value={currentSort} onValueChange={(v) => updateParams("sort", v)}>
            <SelectTrigger className="h-11 rounded-xl border-slate-200 font-medium">
              <SelectValue placeholder="정렬 방식 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">평점 높은 순</SelectItem>
              <SelectItem value="reviews">리뷰 많은 순</SelectItem>
              <SelectItem value="price">물가 저렴한 순</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Score Slider (UI only) */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label className="text-sm font-bold text-slate-700">최소 평점</Label>
            <span className="text-sm font-bold text-primary">4.0점 이상</span>
          </div>
          <Slider defaultValue={[40]} max={50} step={5} className="py-4" />
        </div>
      </div>

      {/* Filter Chips */}
      {(currentRegion !== "전체" || currentSort !== "rating" || currentQuery) && (
        <div className="pt-4 border-t flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 mr-2">적용된 필터:</span>
          {currentRegion !== "전체" && (
            <Badge variant="secondary" className="gap-1 pr-1 font-semibold">
              {currentRegion}
              <button onClick={() => updateParams("region", "전체")}><X className="w-3 h-3" /></button>
            </Badge>
          )}
          {currentQuery && (
            <Badge variant="secondary" className="gap-1 pr-1 font-semibold">
              검색: {currentQuery}
              <button onClick={() => updateParams("q", "")}><X className="w-3 h-3" /></button>
            </Badge>
          )}
          <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs font-bold text-slate-500 hover:text-primary h-7 px-2">
            초기화
          </Button>
        </div>
      )}
    </div>
  );
}
