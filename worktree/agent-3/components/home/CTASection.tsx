import { Button } from "@/components/ui/button";
import { PenLine, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/80 py-20 relative overflow-hidden">
      {/* Decorative organic shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 text-center text-white relative z-10">
        <div className="bg-white/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
          <MapPin className="h-10 w-10 text-secondary" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
          당신의 노마드 경험을 공유해주세요! 🌿
        </h2>
        <p className="text-white/80 text-lg mb-10 font-medium">
          자연과 어우러진 삶, 직접 살아본 도시의 솔직한 이야기가<br className="hidden sm:block" />
          다른 노마드들에게 새로운 영감을 줄 수 있어요.
        </p>
        <Button
          size="lg"
          className="bg-white text-primary hover:bg-white/90 font-bold px-10 py-7 text-lg rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95"
        >
          <PenLine className="mr-2 h-5 w-5" />
          도시 평가하러 가기
        </Button>
      </div>
    </section>
  );
}
