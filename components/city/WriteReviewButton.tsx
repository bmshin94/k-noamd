"use client";

import { useState } from "react";
import { PenLine, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export default function WriteReviewButton() {
  const [rating, setRating] = useState(5);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        render={
          <Button
            size="lg"
            className="fixed bottom-8 right-8 rounded-full w-16 h-16 shadow-2xl bg-primary hover:bg-primary/90 p-0 flex items-center justify-center group"
          />
        }
      >
        <PenLine className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        <span className="sr-only">리뷰 작성하기</span>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">리뷰 작성하기</DialogTitle>
          <DialogDescription>
            이 도시는 작업하기 어땠나요? 당신의 경험을 공유해주세요!
          </DialogDescription>
        </DialogHeader>

        <div className="py-6 space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold">별점 선택</p>
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setRating(i + 1)}
                  className="focus:outline-none transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      i < rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-slate-200 fill-slate-200"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label htmlFor="review-content" className="text-sm font-semibold">
              상세 리뷰 (최소 10자 이상)
            </label>
            <Textarea
              id="review-content"
              placeholder="와이파이 속도, 콘센트 위치, 주변 소음 등 노마드에게 유용한 정보를 공유해주세요!"
              className="min-h-[150px] resize-none"
            />
          </div>
        </div>

        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={() => setIsOpen(false)} className="flex-1">
            취소
          </Button>
          <Button onClick={() => setIsOpen(false)} className="flex-1">
            리뷰 등록하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
