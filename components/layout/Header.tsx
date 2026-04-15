import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-emerald-600" />
            <span className="text-lg font-bold tracking-tight">
              Nomad<span className="text-emerald-600">Korea</span>
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              도시탐색
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              커뮤니티
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              내 즐겨찾기
            </Link>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              로그인
            </Button>
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              회원가입
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
