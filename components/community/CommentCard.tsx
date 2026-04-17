import { PostComment } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface CommentCardProps {
  comment: PostComment;
  isReply?: boolean;
}

export default function CommentCard({ comment, isReply = false }: CommentCardProps) {
  return (
    <div className={`flex gap-4 py-6 ${isReply ? "pl-12" : "border-b border-slate-100 last:border-0"}`}>
      <Avatar className="w-10 h-10 border">
        <AvatarImage src={comment.authorAvatar} alt={comment.author} />
        <AvatarFallback>{comment.author[0]}</AvatarFallback>
      </Avatar>
      
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">{comment.author}</span>
            <span className="text-xs text-muted-foreground font-medium">{comment.createdAt}</span>
          </div>
          {!isReply && (
            <Button variant="ghost" size="sm" className="h-7 text-xs font-bold text-slate-400 hover:text-primary">
              답글달기
            </Button>
          )}
        </div>
        
        <p className="text-slate-700 text-[15px] leading-relaxed">
          {comment.content}
        </p>

        {comment.replies && comment.replies.map((reply) => (
          <CommentCard key={reply.id} comment={reply} isReply />
        ))}
      </div>
    </div>
  );
}
