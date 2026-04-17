import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              Nomad<span className="text-primary">Korea</span>
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              도시탐색
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              커뮤니티
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              내 즐겨찾기
            </Link>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="font-bold text-muted-foreground hover:text-primary hover:bg-primary/5">
              로그인
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold px-5 rounded-xl shadow-md shadow-primary/20">
              회원가입
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
