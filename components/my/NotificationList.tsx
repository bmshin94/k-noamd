import { NOTIFICATIONS, Notification } from "@/lib/mock-data";
import { Bell, Heart, MessageSquare, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotificationList() {
  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "like": return <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />;
      case "comment": return <MessageSquare className="w-5 h-5 text-blue-500 fill-blue-500" />;
      case "new_city": return <Plus className="w-5 h-5 text-emerald-500" />;
      default: return <Bell className="w-5 h-5 text-slate-400" />;
    }
  };

  const unreadCount = NOTIFICATIONS.filter(n => !n.isRead).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          최근 알림
          {unreadCount > 0 && (
            <span className="bg-rose-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
              {unreadCount}
            </span>
          )}
        </h3>
        <Button variant="ghost" size="sm" className="gap-2 text-slate-400 hover:text-primary font-bold">
          <Check className="w-4 h-4" />
          모두 읽음 표시
        </Button>
      </div>

      <div className="space-y-3">
        {NOTIFICATIONS.length > 0 ? (
          NOTIFICATIONS.map((n) => (
            <Link key={n.id} href={n.targetUrl} className="block group">
              <div className={`flex items-start gap-4 p-5 rounded-2xl border transition-all hover:shadow-md ${n.isRead ? "bg-white border-slate-100" : "bg-primary/5 border-primary/20 shadow-sm shadow-primary/5"}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${n.isRead ? "bg-slate-50" : "bg-white shadow-sm"}`}>
                  {getIcon(n.type)}
                </div>
                <div className="flex-1 space-y-1">
                  <p className={`text-sm leading-relaxed ${n.isRead ? "text-slate-600" : "text-slate-900 font-bold"}`}>
                    {n.content}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">{n.createdAt}</p>
                </div>
                {!n.isRead && (
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                )}
              </div>
            </Link>
          ))
        ) : (
          <div className="py-24 text-center space-y-3 bg-white border rounded-3xl">
            <p className="text-slate-400 font-bold">새로운 알림이 없습니다.</p>
            <p className="text-sm text-slate-300">활동을 시작하고 첫 알림을 받아보세요!</p>
          </div>
        )}
      </div>
    </div>
  );
}
