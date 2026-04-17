import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Bell } from "lucide-react";
import ScrollAwareHeader from "./ScrollAwareHeader";
import MobileNavMenu from "./MobileNavMenu";
import { USER, NOTIFICATIONS } from "@/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Header() {
  // Mock login state for UI development
  const isLoggedIn = false; 
  const unreadCount = NOTIFICATIONS.filter(n => !n.isRead).length;

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
              href="/cities"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              도시탐색
            </Link>
            <Link
              href="/community"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              커뮤니티
            </Link>
            <Link
              href="/my"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              마이페이지
            </Link>
          </nav>

          {/* Right: Auth buttons + Mobile menu */}
          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                {/* Notification Bell */}
                <Popover>
                  <PopoverTrigger
                    render={
                      <button className="relative p-2 text-slate-400 hover:text-primary transition-colors">
                        <Bell className="w-6 h-6" />
                        {unreadCount > 0 && (
                          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
                        )}
                      </button>
                    }
                  />
                  <PopoverContent className="w-80 p-0 rounded-2xl shadow-xl border-slate-100 overflow-hidden" align="end">
                    <div className="p-4 bg-slate-50/50 border-b flex items-center justify-between">
                      <span className="font-bold text-sm">최근 알림</span>
                      <Link href="/my/notifications" className="text-xs text-primary font-bold hover:underline">
                        전체보기
                      </Link>
                    </div>
                    <div className="divide-y divide-slate-50 max-h-[300px] overflow-y-auto">
                      {NOTIFICATIONS.slice(0, 5).map((n) => (
                        <Link key={n.id} href={n.targetUrl} className="block p-4 hover:bg-slate-50 transition-colors">
                          <p className="text-xs text-slate-800 line-clamp-2 leading-relaxed mb-1">
                            {n.content}
                          </p>
                          <span className="text-[10px] text-slate-400">{n.createdAt}</span>
                        </Link>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>

                <Link href="/my" className="flex items-center gap-2 group">
                  <span className="text-sm text-muted-foreground font-medium group-hover:text-primary transition-colors hidden sm:inline-block">
                    {USER.name}님 환영해요! ✨
                  </span>
                  <Avatar className="w-8 h-8 border group-hover:border-primary transition-colors">
                    <AvatarImage src={USER.avatarUrl} alt={USER.name} />
                    <AvatarFallback>{USER.name[0]}</AvatarFallback>
                  </Avatar>
                </Link>
                <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                  로그아웃
                </Button>
              </div>
            ) : (
              <>
                <Link href="/login" className="hidden md:inline-flex">
                  <Button variant="ghost" size="sm">
                    로그인
                  </Button>
                </Link>
                <Link href="/register" className="hidden md:inline-flex">
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold">
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
