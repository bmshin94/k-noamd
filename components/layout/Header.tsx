import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { signout } from "@/app/auth/actions";
import ScrollAwareHeader from "./ScrollAwareHeader";
import MobileNavMenu from "./MobileNavMenu";

export default async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <ScrollAwareHeader>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-emerald-600" />
            <span className="text-lg font-bold tracking-tight">
              Nomad<span className="text-emerald-600">Korea</span>
            </span>
          </Link>

          {/* Desktop Nav */}
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

          {/* Right: Auth buttons + Mobile menu */}
          <div className="flex items-center gap-2">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground hidden sm:inline-block">
                  {user.email}님 환영해요! ✨
                </span>
                <form action={signout}>
                  <Button variant="outline" size="sm">
                    로그아웃
                  </Button>
                </form>
              </div>
            ) : (
              <>
                <Link href="/login" className="hidden md:inline-flex">
                  <Button variant="ghost" size="sm">
                    로그인
                  </Button>
                </Link>
                <Link href="/register" className="hidden md:inline-flex">
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    회원가입
                  </Button>
                </Link>
              </>
            )}
            <MobileNavMenu />
          </div>
        </div>
      </div>
    </ScrollAwareHeader>
  );
}
