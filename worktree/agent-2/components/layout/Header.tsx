import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <MapPin className="h-5 w-5 text-neon-pink neon-glow-pink" />
            <span className="text-lg font-bold tracking-tight">
              Nomad<span className="text-neon-pink group-hover:neon-glow-pink transition-all">Korea</span>
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-neon-blue hover:neon-glow-blue transition-all"
            >
              도시탐색
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-neon-blue hover:neon-glow-blue transition-all"
            >
              커뮤니티
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-neon-blue hover:neon-glow-blue transition-all"
            >
              내 즐겨찾기
            </Link>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hover:text-neon-pink">
              로그인
            </Button>
            <Button size="sm" className="bg-neon-pink hover:bg-neon-pink/80 text-white neon-glow-pink border-none">
              회원가입
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
