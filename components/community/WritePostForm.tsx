"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CITIES } from "@/lib/mock-data";
import { Send, Image as ImageIcon, MapPin } from "lucide-react";

export default function WritePostForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    content: "",
    cityId: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("포스트 등록 시도:", formData);
    // 실제 등록 로직은 추후 구현!
    router.push("/community");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white border rounded-3xl p-8 md:p-10 shadow-sm">
      <div className="space-y-6">
        {/* Category & City Select */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-sm font-bold text-slate-700">카테고리</Label>
            <Select onValueChange={(v: string | null) => v && setFormData({ ...formData, category: v })}>
              <SelectTrigger className="h-12 rounded-xl border-slate-200 font-medium">
                <SelectValue placeholder="카테고리 선택" />
              </SelectTrigger>
              <SelectContent>
                {["후기", "질문", "모임", "정보"].map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-bold text-slate-700">연관 도시 (선택)</Label>
            <Select onValueChange={(v: string | null) => v && setFormData({ ...formData, cityId: v })}>
              <SelectTrigger className="h-12 rounded-xl border-slate-200 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <SelectValue placeholder="도시 선택" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {CITIES.map((city) => (
                  <SelectItem key={city.id} value={city.id}>{city.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Title Input */}
        <div className="space-y-2">
          <Label className="text-sm font-bold text-slate-700">제목</Label>
          <Input 
            placeholder="제목을 입력해주세요" 
            className="h-14 text-lg font-bold rounded-xl border-slate-200 focus:ring-primary"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        {/* Content Textarea */}
        <div className="space-y-2">
          <Label className="text-sm font-bold text-slate-700">본문 내용</Label>
          <Textarea 
            placeholder="노마드 동료들과 나누고 싶은 이야기를 적어보세요. (최소 10자 이상)" 
            className="min-h-[300px] text-base rounded-2xl border-slate-200 focus:ring-primary resize-none p-4"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          />
        </div>

        {/* Image Upload Placeholder */}
        <div className="flex items-center gap-4">
          <Button type="button" variant="outline" className="rounded-xl gap-2 font-bold text-slate-500 border-dashed border-2 h-20 w-32 flex-col">
            <ImageIcon className="w-5 h-5" />
            <span className="text-xs">사진 추가</span>
          </Button>
          <p className="text-xs text-slate-400 font-medium leading-relaxed">
            * 최대 5장까지 업로드 가능합니다.<br />
            * 가로형 이미지를 권장합니다.
          </p>
        </div>
      </div>

      <div className="flex gap-3 pt-6 border-t border-slate-50">
        <Button type="button" variant="ghost" className="flex-1 h-14 rounded-2xl font-bold text-slate-500" onClick={() => router.back()}>
          취소
        </Button>
        <Button type="submit" className="flex-[2] h-14 rounded-2xl font-black gap-2 shadow-lg shadow-primary/20">
          <Send className="w-5 h-5" />
          게시글 등록하기
        </Button>
      </div>
    </form>
  );
}
