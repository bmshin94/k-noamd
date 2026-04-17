import NotificationList from "@/components/my/NotificationList";

export default function NotificationsPage() {
  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-2xl space-y-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            내 소식
          </h1>
          <p className="text-slate-500 font-medium">
            나의 활동에 대한 새로운 소식들을 확인해보세요.
          </p>
        </div>

        <NotificationList />
      </div>
    </div>
  );
}
