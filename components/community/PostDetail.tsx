import { CommunityPost } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Share2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PostDetailProps {
  post: CommunityPost;
}

export default function PostDetail({ post }: PostDetailProps) {
  return (
    <div className="bg-white border rounded-3xl overflow-hidden shadow-sm">
      <div className="p-8 md:p-10 space-y-8">
        {/* Post Header */}
        <div className="space-y-6">
          <Badge variant="secondary" className="px-4 py-1 text-sm font-bold bg-primary/10 text-primary border-none">
            {post.category}
          </Badge>
          
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-4 border-y border-slate-100">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10 border">
                <AvatarImage src={post.authorAvatar} alt={post.author} />
                <AvatarFallback>{post.author[0]}</AvatarFallback>
              </Avatar>
              <div className="space-y-0.5">
                <p className="font-bold text-slate-900">{post.author}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                  <Calendar className="w-3 h-3" />
                  <span>{post.createdAt} 작성</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-full gap-2 font-bold border-slate-200">
                <Share2 className="w-4 h-4" />
                공유하기
              </Button>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </p>
        </div>

        {/* Post Footer/Actions */}
        <div className="flex justify-center pt-8">
          <Button variant="outline" size="lg" className="h-14 px-10 rounded-full gap-3 border-2 hover:border-primary hover:text-primary transition-all group">
            <Heart className={`w-6 h-6 group-hover:fill-primary transition-colors`} />
            <span className="text-lg font-black">{post.likes}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
