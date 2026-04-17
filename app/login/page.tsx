import LoginForm from "@/components/auth/LoginForm";
import SocialLoginButtons from "@/components/auth/SocialLoginButtons";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] w-full overflow-hidden">
      {/* Brand Image Panel (Desktop only) */}
      <div className="hidden lg:flex flex-1 relative bg-emerald-600 items-center justify-center p-12 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80"
            alt="Nomad Life"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-md space-y-6">
          <h1 className="text-4xl font-black leading-tight">
            어디서든 자유롭게,<br />노마드 코리아와 함께
          </h1>
          <p className="text-lg opacity-90">
            대한민국 구석구석, 당신의 완벽한 워케이션 스팟을 찾아보세요.
          </p>
          <div className="flex gap-4 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-emerald-600 bg-slate-200 overflow-hidden">
                  <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" width={40} height={40} />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium flex items-center">
              이미 수천 명의 노마드가 활동 중입니다!
            </p>
          </div>
        </div>
      </div>

      {/* Form Panel */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 bg-white">
        <div className="w-full max-w-sm space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-slate-900">로그인</h2>
            <p className="text-muted-foreground">
              당신의 다음 노마드 라이프를 시작해보세요.
            </p>
          </div>

          <SocialLoginButtons />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">또는 이메일로 로그인</span>
            </div>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
}
