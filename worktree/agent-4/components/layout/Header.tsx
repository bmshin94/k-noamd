import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-1.5 border border-primary group-hover:bg-primary transition-colors">
              <MapPin className="h-5 w-5 text-primary group-hover:text-background" />
            </div>
            <span className="text-xl font-serif tracking-widest uppercase">
              Nomad<span className="text-primary">Korea</span>
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="#"
              className="text-xs uppercase tracking-[0.2em] font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              도시탐색
            </Link>
            <Link
              href="#"
              className="text-xs uppercase tracking-[0.2em] font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              커뮤니티
            </Link>
            <Link
              href="#"
              className="text-xs uppercase tracking-[0.2em] font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              내 즐겨찾기
            </Link>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-xs uppercase tracking-widest hover:text-primary">
              로그인
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-background rounded-none px-6 text-xs uppercase tracking-widest font-bold">
              회원가입
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
