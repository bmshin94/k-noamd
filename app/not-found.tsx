import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchX, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-4 text-center space-y-8">
      <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center animate-bounce">
        <SearchX className="w-12 h-12 text-slate-400" />
      </div>
      
      <div className="space-y-3">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter italic">404</h1>
        <h2 className="text-2xl font-bold text-slate-800">페이지를 찾을 수 없어요!</h2>
        <p className="text-slate-500 font-medium max-w-md mx-auto">
          길을 잃으셨나요? 걱정 마세요. 노마드 코리아는 언제나 당신을 환영합니다.<br />
          아래 버튼을 눌러 다시 탐색을 시작해보세요!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Link href="/">
          <Button size="lg" className="rounded-2xl h-14 px-8 font-black gap-2 shadow-lg shadow-primary/20">
            <Home className="w-5 h-5" />
            홈으로 돌아가기
          </Button>
        </Link>
        <Link href="/cities">
          <Button variant="outline" size="lg" className="rounded-2xl h-14 px-8 font-bold gap-2">
            도시 탐색하러 가기
          </Button>
        </Link>
      </div>
    </div>
  );
}
