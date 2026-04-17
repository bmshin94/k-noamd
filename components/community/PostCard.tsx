import { CommunityPost } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageSquare, Flame } from "lucide-react";
import Link from "next/link";

interface PostCardProps {
  post: CommunityPost;
}

export default function PostCard({ post }: PostCardProps) {
  const isHot = post.likes >= 100;

  return (
    <Link href={`/community/${post.id}`} className="block group">
      <div className="bg-white border rounded-2xl p-6 transition-all hover:border-primary/30 hover:shadow-lg shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-slate-50 text-slate-600 font-bold border-slate-200">
              {post.category}
            </Badge>
            {isHot && (
              <Badge className="bg-rose-500 text-white font-bold gap-1 border-none">
                <Flame className="w-3 h-3" />
                HOT
              </Badge>
            )}
          </div>
          <span className="text-xs text-muted-foreground font-medium">{post.createdAt}</span>
        </div>

        <h3 className="text-lg font-black text-slate-900 group-hover:text-primary transition-colors line-clamp-1">
          {post.title}
        </h3>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <Avatar className="w-6 h-6 border">
              <AvatarImage src={post.authorAvatar} alt={post.author} />
              <AvatarFallback>{post.author[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-bold text-slate-700">{post.author}</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span className="text-xs font-bold">{post.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="w-4 h-4" />
              <span className="text-xs font-bold">{post.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
