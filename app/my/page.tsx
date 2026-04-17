import ProfileHeader from "@/components/my/ProfileHeader";
import MyStats from "@/components/my/MyStats";
import MyReviewList from "@/components/my/MyReviewList";
import MyFavoriteList from "@/components/my/MyFavoriteList";
import SettingsForm from "@/components/my/SettingsForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, MessageSquare, Heart, Settings } from "lucide-react";

export default function MyPage() {
  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl space-y-10">
        {/* Profile Header & Stats */}
        <div className="space-y-6">
          <ProfileHeader />
          <MyStats />
        </div>

        {/* Tab Navigation Section */}
        <Tabs defaultValue="info" className="space-y-8">
          <TabsList className="bg-white border p-1 h-auto w-full justify-start overflow-x-auto rounded-2xl shadow-sm">
            <TabsTrigger value="info" className="flex-1 md:flex-none gap-2 px-6 py-3 font-bold rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white">
              <User className="w-4 h-4" />
              내 정보
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1 md:flex-none gap-2 px-6 py-3 font-bold rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white">
              <MessageSquare className="w-4 h-4" />
              내 리뷰
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex-1 md:flex-none gap-2 px-6 py-3 font-bold rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white">
              <Heart className="w-4 h-4" />
              즐겨찾기
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex-1 md:flex-none gap-2 px-6 py-3 font-bold rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white">
              <Settings className="w-4 h-4" />
              설정
            </TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="space-y-6">
            <div className="bg-white border rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">최근 활동 요약</h3>
              <div className="py-20 text-center space-y-2">
                <p className="text-slate-400 font-bold text-lg text-center">반가워요, 노마드 동료님! ✨</p>
                <p className="text-sm text-slate-400">당신의 멋진 워케이션 여정을 노마드 코리아가 응원합니다.</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="max-w-3xl">
              <MyReviewList />
            </div>
          </TabsContent>

          <TabsContent value="favorites">
            <MyFavoriteList />
          </TabsContent>

          <TabsContent value="settings">
            <div className="max-w-2xl">
              <SettingsForm />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
