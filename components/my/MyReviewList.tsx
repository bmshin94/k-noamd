import { MY_REVIEWS } from "@/lib/mock-data";
import { Star, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MyReviewList() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-slate-900">내 리뷰 <span className="text-primary">{MY_REVIEWS.length}</span></h3>
      
      <div className="grid gap-4">
        {MY_REVIEWS.map((review) => (
          <div key={review.id} className="bg-white border rounded-xl p-5 space-y-3 hover:border-primary/30 transition-colors group">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">{review.cityName}</h4>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200 fill-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.createdAt}</span>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
              {review.content}
            </p>
          </div>
        ))}
      </div>
      
      <Button variant="ghost" className="w-full text-muted-foreground font-semibold hover:text-primary">
        리뷰 전체 보기
      </Button>
    </div>
  );
}
