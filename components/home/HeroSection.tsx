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
            "url('https://images.unsplash.com/photo-1538485399081-7c8272e4bcc6?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center text-white">
        <p className="text-sm font-medium text-emerald-400 mb-3 tracking-widest uppercase">
          🇰🇷 Digital Nomad Korea
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
          대한민국 노마드 도시를
          <br />
          찾아보세요
        </h1>
        <p className="text-base sm:text-lg text-white/75 mb-8">
          일하기 좋은 도시, 직접 평가하고 함께 발견해요
        </p>

        {/* Search Bar */}
        <div className="flex gap-2 max-w-xl mx-auto mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="도시명, 지역, 키워드로 검색하세요..."
              className="pl-10 h-12 bg-white text-foreground border-0 focus-visible:ring-emerald-500"
              readOnly
            />
          </div>
          <Button className="h-12 px-6 bg-emerald-600 hover:bg-emerald-700 text-white shrink-0">
            검색
          </Button>
        </div>

        {/* Quick city links */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {QUICK_CITIES.map((city) => (
            <button
              key={city.name}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-sm font-medium transition-colors backdrop-blur-sm border border-white/20"
            >
              <span>{city.emoji}</span>
              <span>{city.name}</span>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 text-sm">
          <span className="flex items-center gap-1.5 text-white/80">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            등록된 도시 32개
          </span>
          <span className="flex items-center gap-1.5 text-white/80">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            누적 리뷰 1,204개
          </span>
        </div>
      </div>
    </section>
  );
}
