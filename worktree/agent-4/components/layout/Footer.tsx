import Link from "next/link";
import { MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-emerald-600" />
              <span className="font-bold">
                Nomad<span className="text-emerald-600">Korea</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              대한민국 디지털 노마드를 위한 도시 평가 플랫폼
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">서비스</p>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                서비스 소개
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                이용약관
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                개인정보처리방침
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">문의</p>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                문의하기
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-xs text-muted-foreground text-center">
          © 2026 NomadKorea. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
