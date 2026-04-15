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
    <section className="sticky top-16 z-40 bg-background border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter dropdowns */}
        <div className="flex items-center gap-3 py-3 overflow-x-auto scrollbar-none">
          <Select>
            <SelectTrigger className="h-9 w-auto gap-1.5 shrink-0">
              <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
              <SelectValue placeholder="지역" />
            </SelectTrigger>
            <SelectContent>
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
            <SelectTrigger className="h-9 w-auto gap-1.5 shrink-0">
              <Star className="h-3.5 w-3.5 text-muted-foreground" />
              <SelectValue placeholder="평점순" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">평점순</SelectItem>
              <SelectItem value="review">리뷰 많은순</SelectItem>
              <SelectItem value="latest">최신순</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-9 w-auto gap-1.5 shrink-0">
              <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />
              <SelectValue placeholder="물가" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체</SelectItem>
              <SelectItem value="low">저렴 (1~2점)</SelectItem>
              <SelectItem value="mid">보통 (2~3점)</SelectItem>
              <SelectItem value="high">비쌈 (3~5점)</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-9 w-auto gap-1.5 shrink-0">
              <Wifi className="h-3.5 w-3.5 text-muted-foreground" />
              <SelectValue placeholder="인터넷" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체</SelectItem>
              <SelectItem value="excellent">매우 빠름 (4.5+)</SelectItem>
              <SelectItem value="good">빠름 (3.5+)</SelectItem>
              <SelectItem value="normal">보통</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-9 w-auto gap-1.5 shrink-0">
              <Coffee className="h-3.5 w-3.5 text-muted-foreground" />
              <SelectValue placeholder="카페" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체</SelectItem>
              <SelectItem value="many">카페 많음 (4.5+)</SelectItem>
              <SelectItem value="normal">보통 (3.0+)</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="ghost"
            size="sm"
            className="shrink-0 text-muted-foreground hover:text-foreground ml-auto"
          >
            <RotateCcw className="h-3.5 w-3.5 mr-1.5" />
            초기화
          </Button>
        </div>

        {/* Region tabs */}
        <Tabs
          value={activeRegion}
          onValueChange={setActiveRegion}
          className="pb-0"
        >
          <TabsList className="h-auto bg-transparent p-0 gap-1 overflow-x-auto flex-nowrap w-full justify-start">
            {REGION_TABS.map((tab) => (
              <TabsTrigger
                key={tab.label}
                value={tab.label}
                className="shrink-0 rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-600 data-[state=active]:text-emerald-600 data-[state=active]:bg-transparent pb-2 text-sm"
              >
                {tab.label}
                <span className="ml-1 text-xs text-muted-foreground">
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
