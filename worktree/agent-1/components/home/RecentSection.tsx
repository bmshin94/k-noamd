import { MessageSquare, Flame, ThumbsUp, ArrowRight, Pin } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";
import { RECENT_REVIEWS, HOT_POSTS } from "@/lib/mock-data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-2.5 w-2.5 ${
            i < rating
              ? "fill-black text-black"
              : "text-black/10"
          }`}
        />
      ))}
    </div>
  );
}

export default function RecentSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Recent Reviews */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-4 w-4 text-black" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">RECENT REVIEWS</h2>
            </div>
            <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-black hover:bg-transparent p-0 h-auto">
              VIEW ALL <ArrowRight className="h-3 w-3 ml-2" />
            </Button>
          </div>

          <div className="rounded-none border-y border-black/10 divide-y divide-black/5">
            {RECENT_REVIEWS.map((review) => (
              <div key={review.id} className="py-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10 shrink-0 rounded-none border border-black/5">
                    <AvatarFallback className="text-[10px] font-bold bg-secondary text-black rounded-none">
                      {review.author.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xs font-bold uppercase tracking-tight">{review.author}</span>
                      <span className="text-[10px] font-bold text-black uppercase tracking-widest">
                        {review.cityName}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-medium ml-auto uppercase tracking-tighter">
                        {review.createdAt}
                      </span>
                    </div>
                    <div className="mt-2">
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 line-clamp-2 font-light italic">
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
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Flame className="h-4 w-4 text-black" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">HOT DISCUSSIONS</h2>
            </div>
            <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-black hover:bg-transparent p-0 h-auto">
              GO TO COMMUNITY <ArrowRight className="h-3 w-3 ml-2" />
            </Button>
          </div>

          <div className="rounded-none border-y border-black/10 divide-y divide-black/5">
            {HOT_POSTS.map((post) => (
              <div key={post.id} className="py-6 hover:bg-secondary/50 transition-colors cursor-pointer group">
                <div className="flex items-start gap-4">
                  <Pin className="h-3.5 w-3.5 text-muted-foreground mt-1 shrink-0 group-hover:text-black" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium tracking-tight group-hover:underline underline-offset-4">{post.title}</p>
                    <div className="flex items-center gap-6 mt-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-black">
                      <span className="flex items-center gap-2">
                        <ThumbsUp className="h-3 w-3" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-2">
                        <MessageSquare className="h-3 w-3" />
                        {post.comments}
                      </span>
                      <span className="ml-auto font-medium tracking-tighter text-muted-foreground">{post.createdAt}</span>
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
