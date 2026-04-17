import { Button } from "@/components/ui/button";

export default function SocialLoginButtons() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <Button
        variant="outline"
        className="w-full h-12 bg-[#FEE500] hover:bg-[#FEE500]/90 text-[#3C1E1E] border-none font-bold relative"
      >
        <div className="absolute left-4">
          {/* 카카오 로고는 텍스트로 대체하거나 추후 아이콘 추가 가능 */}
          <span className="text-xl">💬</span>
        </div>
        카카오로 시작하기
      </Button>
      <Button
        variant="outline"
        className="w-full h-12 bg-white hover:bg-slate-50 text-slate-700 border-slate-200 font-bold relative"
      >
        <div className="absolute left-4">
          <span className="text-xl">G</span>
        </div>
        구글로 시작하기
      </Button>
    </div>
  );
}
