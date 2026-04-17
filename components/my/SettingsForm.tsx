"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { USER } from "@/lib/mock-data";
import { Camera, Bell, Shield, Trash2, Save } from "lucide-react";

export default function SettingsForm() {
  const [nickname, setNickname] = useState(USER.name);
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    marketing: false,
  });

  return (
    <div className="space-y-10">
      {/* Profile Section */}
      <section className="space-y-6">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Camera className="w-5 h-5 text-primary" />
          프로필 설정
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-2xl border">
          <div className="relative group">
            <Avatar className="w-24 h-24 border-4 border-slate-50 shadow-sm">
              <AvatarImage src={USER.avatarUrl} alt={USER.name} />
              <AvatarFallback>{USER.name[0]}</AvatarFallback>
            </Avatar>
            <button className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <Camera className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 space-y-4 w-full">
            <div className="space-y-2">
              <Label htmlFor="nickname" className="text-xs font-bold text-slate-400">닉네임</Label>
              <Input 
                id="nickname" 
                value={nickname} 
                onChange={(e) => setNickname(e.target.value)}
                className="h-11 rounded-xl"
              />
            </div>
            <p className="text-xs text-muted-foreground font-medium">
              * 닉네임은 30일에 한 번만 변경할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Notification Section */}
      <section className="space-y-6">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Bell className="w-5 h-5 text-primary" />
          알림 설정
        </h3>
        <div className="bg-white border rounded-2xl overflow-hidden divide-y">
          {[
            { id: "push", label: "앱 푸시 알림", desc: "주요 활동 및 소식을 푸시로 받습니다." },
            { id: "email", label: "이메일 알림", desc: "새로운 댓글이나 추천 정보를 이메일로 받습니다." },
            { id: "marketing", label: "마케팅 정보 수신", desc: "이벤트 및 할인 혜택 정보를 받습니다." },
          ].map((item) => (
            <div key={item.id} className="p-5 flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="font-bold text-slate-900">{item.label}</p>
                <p className="text-xs text-muted-foreground font-medium">{item.desc}</p>
              </div>
              <Switch 
                checked={notifications[item.id as keyof typeof notifications]} 
                onCheckedChange={(checked) => setNotifications({...notifications, [item.id]: checked})}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Account Section */}
      <section className="space-y-6">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          계정 관리
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          <Button variant="outline" className="flex-1 h-12 rounded-xl gap-2 font-bold text-slate-600">
            비밀번호 변경
          </Button>
          <Button variant="ghost" className="flex-1 h-12 rounded-xl gap-2 font-bold text-destructive hover:bg-destructive/5">
            <Trash2 className="w-4 h-4" />
            회원 탈퇴하기
          </Button>
        </div>
      </section>

      <div className="pt-6 border-t">
        <Button className="w-full h-14 rounded-2xl font-black gap-2 shadow-lg shadow-primary/20 text-lg">
          <Save className="w-5 h-5" />
          설정 저장하기
        </Button>
      </div>
    </div>
  );
}
