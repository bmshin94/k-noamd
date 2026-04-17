import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CalendarDays, Settings } from "lucide-react";
import { USER } from "@/lib/mock-data";

export default function ProfileHeader() {
  return (
    <div className="bg-white border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 shadow-sm">
      <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
        <div className="relative">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-white shadow-md">
            <AvatarImage src={USER.avatarUrl} alt={USER.name} />
            <AvatarFallback>{USER.name[0]}</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="text-center md:text-left space-y-3">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900">{USER.name}</h1>
            <p className="text-sm text-muted-foreground font-medium">{USER.email}</p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-semibold">
            <div className="flex items-center gap-1.5 text-slate-600">
              <CalendarDays className="w-4 h-4" />
              <span>{USER.joinedAt} 가입</span>
            </div>
            <div className="flex gap-3">
              <span className="text-slate-900">팔로워 <span className="text-primary">{USER.followers.toLocaleString()}</span></span>
              <span className="text-slate-900">팔로잉 <span className="text-primary">{USER.following.toLocaleString()}</span></span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex gap-2 w-full md:w-auto">
        <Button variant="outline" className="flex-1 md:flex-none gap-2 rounded-full font-bold">
          <Settings className="w-4 h-4" />
          프로필 수정
        </Button>
      </div>
    </div>
  );
}
