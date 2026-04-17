import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, CheckCircle2 } from "lucide-react";
import { QUICK_CITIES } from "@/lib/mock-data";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden border-b border-primary/20">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1538485399081-7c8272e4bcc6?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center text-foreground">
        <p className="text-xs font-bold text-primary mb-6 tracking-[0.4em] uppercase">
          🇰🇷 The Nomad Collection Korea
        </p>
        <h1 className="text-4xl sm:text-6xl font-serif leading-tight mb-8 drop-shadow-sm italic">
          대한민국에서 가장 우아한
          <br />
          <span className="text-primary not-italic">노마드 경험을</span> 찾아보세요
        </h1>
        <p className="text-base sm:text-xl text-foreground/70 mb-12 tracking-wide font-light">
          엄선된 도시, 품격 있는 워크플레이스
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-0 max-w-2xl mx-auto mb-12 shadow-2xl">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
            <Input
              placeholder="도시명, 지역, 키워드로 검색..."
              className="pl-12 h-16 bg-background text-foreground border-foreground/10 focus-visible:ring-primary rounded-none placeholder:text-foreground/30 text-base"
              readOnly
            />
          </div>
          <Button className="h-16 px-10 bg-primary hover:bg-primary/90 text-background shrink-0 rounded-none text-xs uppercase tracking-widest font-bold">
            검색하기
          </Button>
        </div>

        {/* Quick city links */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {QUICK_CITIES.map((city) => (
            <button
              key={city.name}
              className="group flex flex-col items-center gap-2 text-xs uppercase tracking-widest font-medium text-foreground/50 hover:text-primary transition-colors"
            >
              <span className="text-xl mb-1 grayscale group-hover:grayscale-0 transition-all">{city.emoji}</span>
              <span>{city.name}</span>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40 border-t border-foreground/5 pt-8">
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 bg-primary rounded-full" />
            32 Selected Cities
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 bg-primary rounded-full" />
            1,204 Curated Reviews
          </span>
        </div>
      </div>
    </section>
  );
}
