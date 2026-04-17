import { Review } from "@/types";
import ReviewCard from "./ReviewCard";
import { Button } from "@/components/ui/button";
import { MessageSquareText } from "lucide-react";

interface CityReviewListProps {
  reviews: Review[];
}

export default function CityReviewList({ reviews }: CityReviewListProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <MessageSquareText className="w-5 h-5 text-primary" />
          리뷰 <span className="text-primary">{reviews.length}</span>
        </h3>
        <div className="flex gap-4 text-sm font-medium">
          <button className="text-primary">최신순</button>
          <button className="text-muted-foreground hover:text-primary transition-colors">도움순</button>
          <button className="text-muted-foreground hover:text-primary transition-colors">평점순</button>
        </div>
      </div>

      <div className="divide-y">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        ) : (
          <div className="py-20 text-center space-y-3">
            <p className="text-muted-foreground">아직 작성된 리뷰가 없습니다.</p>
            <p className="text-sm text-slate-400">첫 번째 리뷰를 남겨보세요!</p>
          </div>
        )}
      </div>

      {reviews.length > 5 && (
        <div className="pt-4 flex justify-center">
          <Button variant="outline" className="w-full md:w-auto px-12 rounded-full">
            리뷰 10개 더보기
          </Button>
        </div>
      )}
    </div>
  );
}
