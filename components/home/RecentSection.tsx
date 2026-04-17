import { MessageSquare, Flame, ThumbsUp, ArrowRight, Pin, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RECENT_REVIEWS, HOT_POSTS } from "@/lib/mock-data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
}

export default function RecentSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Reviews */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-emerald-600" />
              <h2 className="text-xl font-bold">최근 리뷰</h2>
            </div>
            <Button variant="ghost" size="sm" className="text-muted-foreground gap-1">
              더보기 <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>

          <div className="rounded-xl border bg-card divide-y">
            {RECENT_REVIEWS.map((review) => (
              <div key={review.id} className="p-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8 shrink-0">
                    <AvatarFallback className="text-xs bg-emerald-100 text-emerald-700">
                      {review.author.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-medium">{review.author}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-emerald-600 font-medium">
                        {review.cityName}
                      </span>
                      <span className="text-xs text-muted-foreground ml-auto">
                        {review.createdAt}
                      </span>
                    </div>
                    <div className="mt-1">
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hot Community Posts */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-500" />
              <h2 className="text-xl font-bold">HOT 커뮤니티 글</h2>
            </div>
            <Button variant="ghost" size="sm" className="text-muted-foreground gap-1">
              커뮤니티 가기 <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>

          <div className="rounded-xl border bg-card divide-y">
            {HOT_POSTS.map((post) => (
              <div key={post.id} className="p-4 hover:bg-muted/30 transition-colors cursor-pointer">
                <div className="flex items-start gap-2">
                  <Pin className="h-3.5 w-3.5 text-muted-foreground mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium truncate">{post.title}</p>
                      {post.likes >= 100 && (
                        <Badge className="text-[10px] h-4 px-1.5 bg-orange-100 text-orange-600 border border-orange-200 shrink-0">
                          🔥 HOT
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        {post.comments}
                      </span>
                      <span className="ml-auto">{post.createdAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
