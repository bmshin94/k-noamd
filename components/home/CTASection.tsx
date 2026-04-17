import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PenLine, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-emerald-600 to-teal-700 py-16">
      <div className="max-w-3xl mx-auto px-4 text-center text-white">
        <MapPin className="h-10 w-10 mx-auto mb-4 text-emerald-200" />
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          당신의 노마드 경험을 공유해주세요!
        </h2>
        <p className="text-emerald-100 text-base mb-8">
          직접 살아본 도시의 솔직한 리뷰가 모두에게 큰 도움이 돼요
        </p>

        {/* Email subscription */}
        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto mb-6">
          <Input
            type="email"
            placeholder="이메일을 입력하세요"
            className="h-11 bg-white/10 border-white/30 text-white placeholder:text-white/50 focus-visible:ring-white"
            readOnly
          />
          <Button className="h-11 shrink-0 bg-white text-emerald-700 hover:bg-emerald-50 font-semibold px-6">
            구독하기
          </Button>
        </div>

        <Button
          size="lg"
          className="bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold px-8 shadow-lg"
        >
          <PenLine className="mr-2 h-4 w-4" />
          도시 평가하러 가기
        </Button>
      </div>
    </section>
  );
}
