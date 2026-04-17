"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RotateCcw, MapPin, Star, DollarSign, Wifi, Coffee } from "lucide-react";
import { REGION_TABS } from "@/lib/mock-data";

export default function FilterBar() {
  const [activeRegion, setActiveRegion] = useState("전체");

  return (
    <section className="sticky top-16 z-40 bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter dropdowns */}
        <div className="flex items-center gap-4 py-4 overflow-x-auto scrollbar-none">
          <Select>
            <SelectTrigger className="h-10 w-auto gap-2 shrink-0 rounded-none border-black/10 hover:border-black transition-all bg-white px-4">
              <MapPin className="h-3.5 w-3.5 text-black" />
              <SelectValue placeholder="REGION" />
            </SelectTrigger>
            <SelectContent className="rounded-none border-black">
              <SelectItem value="all">전체</SelectItem>
              <SelectItem value="수도권">수도권</SelectItem>
              <SelectItem value="경상">경상</SelectItem>
              <SelectItem value="전라">전라</SelectItem>
              <SelectItem value="강원">강원</SelectItem>
              <SelectItem value="충청">충청</SelectItem>
              <SelectItem value="제주">제주</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-10 w-auto gap-2 shrink-0 rounded-none border-black/10 hover:border-black transition-all bg-white px-4">
              <Star className="h-3.5 w-3.5 text-black" />
              <SelectValue placeholder="RATING" />
            </SelectTrigger>
            <SelectContent className="rounded-none border-black">
              <SelectItem value="rating">평점순</SelectItem>
              <SelectItem value="review">리뷰 많은순</SelectItem>
              <SelectItem value="latest">최신순</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-10 w-auto gap-2 shrink-0 rounded-none border-black/10 hover:border-black transition-all bg-white px-4">
              <DollarSign className="h-3.5 w-3.5 text-black" />
              <SelectValue placeholder="PRICE" />
            </SelectTrigger>
            <SelectContent className="rounded-none border-black">
              <SelectItem value="all">전체</SelectItem>
              <SelectItem value="low">저렴 (1~2점)</SelectItem>
              <SelectItem value="mid">보통 (2~3점)</SelectItem>
              <SelectItem value="high">비쌈 (3~5점)</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-10 w-auto gap-2 shrink-0 rounded-none border-black/10 hover:border-black transition-all bg-white px-4">
              <Wifi className="h-3.5 w-3.5 text-black" />
              <SelectValue placeholder="WIFI" />
            </SelectTrigger>
            <SelectContent className="rounded-none border-black">
              <SelectItem value="all">전체</SelectItem>
              <SelectItem value="excellent">매우 빠름 (4.5+)</SelectItem>
              <SelectItem value="good">빠름 (3.5+)</SelectItem>
              <SelectItem value="normal">보통</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-10 w-auto gap-2 shrink-0 rounded-none border-black/10 hover:border-black transition-all bg-white px-4">
              <Coffee className="h-3.5 w-3.5 text-black" />
              <SelectValue placeholder="CAFE" />
            </SelectTrigger>
            <SelectContent className="rounded-none border-black">
              <SelectItem value="all">전체</SelectItem>
              <SelectItem value="many">카페 많음 (4.5+)</SelectItem>
              <SelectItem value="normal">보통 (3.0+)</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="ghost"
            size="sm"
            className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-black hover:bg-transparent ml-auto"
          >
            <RotateCcw className="h-3.5 w-3.5 mr-2" />
            RESET
          </Button>
        </div>

        {/* Region tabs */}
        <Tabs
          value={activeRegion}
          onValueChange={setActiveRegion}
          className="pb-0"
        >
          <TabsList className="h-auto bg-transparent p-0 gap-8 overflow-x-auto flex-nowrap w-full justify-start border-0">
            {REGION_TABS.map((tab) => (
              <TabsTrigger
                key={tab.label}
                value={tab.label}
                className="shrink-0 rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:bg-transparent pb-4 text-[11px] font-bold uppercase tracking-widest transition-all p-0"
              >
                {tab.label}
                <span className="ml-2 text-[10px] text-muted-foreground font-medium tracking-tighter">
                  ({tab.count})
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}
