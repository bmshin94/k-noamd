import { Button } from "@/components/ui/button";
import { PenLine, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-secondary py-32 border-y">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <MapPin className="h-10 w-10 mx-auto mb-6 text-black" />
        <h2 className="text-3xl sm:text-5xl font-light mb-6 text-black tracking-tight">
          당신의 노마드 경험을 공유해주세요
        </h2>
        <p className="text-muted-foreground text-lg mb-12 font-light">
          직접 살아본 도시의 솔직한 리뷰가 모두에게 큰 도움이 돼요
        </p>
        <Button
          size="lg"
          className="bg-black text-white hover:bg-black/90 font-bold px-12 rounded-none text-xs uppercase tracking-[0.2em]"
        >
          <PenLine className="mr-3 h-4 w-4" />
          SHARE YOUR EXPERIENCE
        </Button>
      </div>
    </section>
  );
}
