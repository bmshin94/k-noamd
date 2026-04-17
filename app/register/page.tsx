import RegisterForm from "@/components/auth/RegisterForm";
import SocialLoginButtons from "@/components/auth/SocialLoginButtons";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] w-full overflow-hidden">
      {/* Brand Image Panel (Desktop only) */}
      <div className="hidden lg:flex flex-1 relative bg-primary items-center justify-center p-12 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80"
            alt="Nomad Registration"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-md space-y-6">
          <h1 className="text-4xl font-black leading-tight">
            새로운 노마드 시대를<br />지금 시작하세요
          </h1>
          <p className="text-lg opacity-90">
            당신만의 워케이션 기록을 남기고, 전국의 노마드들과 정보를 공유해보세요.
          </p>
          <ul className="space-y-4 pt-4">
            {[
              "전국 200+ 도시의 작업 공간 정보",
              "생생한 실제 노마드 후기 확인",
              "관심 도시 즐겨찾기 및 알림",
              "노마드 커뮤니티 활동 참여"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                  ✔
                </div>
                <span className="text-sm font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Form Panel */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 lg:p-16 bg-white">
        <div className="w-full max-w-sm space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-slate-900">회원가입</h2>
            <p className="text-muted-foreground">
              노마드 코리아의 가족이 되어 더 많은 혜택을 누리세요.
            </p>
          </div>

          <SocialLoginButtons />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">또는 이메일로 가입</span>
            </div>
          </div>

          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
