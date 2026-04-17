import { Star, ThumbsUp } from "lucide-react";
import { Review } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="py-6 border-b last:border-0">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 border">
            <AvatarImage src={review.avatarUrl} alt={review.author} />
            <AvatarFallback>{review.author[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-0.5">
            <h4 className="font-bold text-sm">{review.author}</h4>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200 fill-slate-200"
                    }`}
                  />
                ))}
              </div>
              <span>•</span>
              <span>{review.createdAt}</span>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="h-8 gap-2 text-slate-500 hover:text-primary">
          <ThumbsUp className="w-4 h-4" />
          <span className="text-xs font-medium">도움됐어요 {review.helpful}</span>
        </Button>
      </div>
      
      <p className="text-slate-700 leading-relaxed text-sm md:text-base">
        {review.content}
      </p>
    </div>
  );
}
