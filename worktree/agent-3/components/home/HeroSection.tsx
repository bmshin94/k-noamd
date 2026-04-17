import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, CheckCircle2 } from "lucide-react";
import { QUICK_CITIES } from "@/lib/mock-data";

export default function HeroSection() {
  return (
    <section className="relative min-h-[520px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-stone-900/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center text-white">
        <p className="text-sm font-medium text-secondary mb-3 tracking-widest uppercase">
          🌿 Digital Nomad Korea
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4 drop-shadow-md">
          대한민국 노마드 도시를
          <br />
          찾아보세요
        </h1>
        <p className="text-base sm:text-lg text-white/90 mb-8 drop-shadow-sm">
          자연과 함께 일하기 좋은 도시를 발견하고 공유해요
        </p>

        {/* Search Bar */}
        <div className="flex gap-2 max-w-xl mx-auto mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="도시명, 지역, 키워드로 검색하세요..."
              className="pl-10 h-12 bg-white/95 text-foreground border-0 focus-visible:ring-primary rounded-2xl"
              readOnly
            />
          </div>
          <Button className="h-12 px-6 bg-primary hover:bg-primary/90 text-white shrink-0 rounded-2xl shadow-lg">
            검색
          </Button>
        </div>

        {/* Quick city links */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {QUICK_CITIES.map((city) => (
            <button
              key={city.name}
              className="flex items-center gap-1 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-sm font-medium transition-all backdrop-blur-md border border-white/30 hover:scale-105"
            >
              <span>{city.emoji}</span>
              <span>{city.name}</span>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 text-sm font-medium">
          <span className="flex items-center gap-1.5 text-white">
            <CheckCircle2 className="h-4 w-4 text-secondary" />
            등록된 도시 32개
          </span>
          <span className="flex items-center gap-1.5 text-white">
            <CheckCircle2 className="h-4 w-4 text-secondary" />
            누적 리뷰 1,204개
          </span>
        </div>
      </div>
    </section>
  );
}
