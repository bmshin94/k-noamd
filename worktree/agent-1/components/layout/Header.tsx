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
            <MapPin className="h-5 w-5 text-black" />
            <span className="text-lg font-bold tracking-tight">
              Nomad<span className="text-black">Korea</span>
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="#"
              className="text-xs font-medium text-muted-foreground hover:text-black transition-colors uppercase tracking-widest"
            >
              도시탐색
            </Link>
            <Link
              href="#"
              className="text-xs font-medium text-muted-foreground hover:text-black transition-colors uppercase tracking-widest"
            >
              커뮤니티
            </Link>
            <Link
              href="#"
              className="text-xs font-medium text-muted-foreground hover:text-black transition-colors uppercase tracking-widest"
            >
              내 즐겨찾기
            </Link>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-xs font-medium hover:bg-secondary">
              로그인
            </Button>
            <Button size="sm" className="bg-black hover:bg-black/80 text-white text-xs font-medium px-6">
              회원가입
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
