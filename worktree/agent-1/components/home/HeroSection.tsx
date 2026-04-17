import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, CheckCircle2 } from "lucide-react";
import { QUICK_CITIES } from "@/lib/mock-data";

export default function HeroSection() {
  return (
    <section className="relative py-24 flex items-center justify-center bg-secondary border-b">
      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center">
        <p className="text-[10px] font-bold text-black mb-6 tracking-[0.3em] uppercase">
          Digital Nomad Korea
        </p>
        <h1 className="text-4xl sm:text-6xl font-light leading-tight mb-6 text-black tracking-tight">
          대한민국 노마드 도시를
          <br />
          찾아보세요
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mb-12 font-light">
          일하기 좋은 도시, 직접 평가하고 함께 발견해요
        </p>

        {/* Search Bar */}
        <div className="flex gap-0 max-w-xl mx-auto mb-12 border border-black p-1 bg-white">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="도시명, 지역, 키워드로 검색하세요..."
              className="pl-12 h-12 bg-transparent text-black border-0 rounded-none focus-visible:ring-0"
              readOnly
            />
          </div>
          <Button className="h-12 px-8 bg-black hover:bg-black/90 text-white rounded-none text-xs font-bold uppercase tracking-widest shrink-0">
            검색
          </Button>
        </div>

        {/* Quick city links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {QUICK_CITIES.map((city) => (
            <button
              key={city.name}
              className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-black hover:text-white text-[11px] font-bold transition-all border border-black/10 hover:border-black uppercase tracking-wider"
            >
              <span>{city.name}</span>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          <span className="flex items-center gap-2">
            등록된 도시 32개
          </span>
          <span className="flex items-center gap-2">
            누적 리뷰 1,204개
          </span>
        </div>
      </div>
    </section>
  );
}
