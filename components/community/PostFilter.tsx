"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export default function PostFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const currentCategory = searchParams.get("category") || "전체";
  const currentSort = searchParams.get("sort") || "latest";

  const updateParams = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "전체" || value === "latest" || !value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`/community?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <Tabs value={currentCategory} onValueChange={(v) => updateParams("category", v)}>
        <TabsList className="bg-slate-100 p-1">
          {["전체", "후기", "질문", "모임", "정보"].map((cat) => (
            <TabsTrigger key={cat} value={cat} className="px-4 py-2 font-bold data-[state=active]:bg-white data-[state=active]:text-primary">
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="flex items-center gap-3">
        <span className="text-xs font-bold text-slate-400">정렬</span>
        <Select value={currentSort} onValueChange={(v) => updateParams("sort", v)}>
          <SelectTrigger className="w-32 h-10 rounded-xl border-slate-200 font-bold">
            <SelectValue placeholder="정렬 방식" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">최신순</SelectItem>
            <SelectItem value="popular">인기순</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
