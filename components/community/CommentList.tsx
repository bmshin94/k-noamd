import { PostComment } from "@/types";
import CommentCard from "./CommentCard";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageSquareText } from "lucide-react";

interface CommentListProps {
  comments: PostComment[];
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2 pb-4 border-b">
        <MessageSquareText className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-bold text-slate-900">
          댓글 <span className="text-primary">{comments.length}</span>
        </h3>
      </div>

      {/* Comment Input */}
      <div className="space-y-3">
        <Textarea 
          placeholder="노마드 동료들과 의견을 나누어보세요!" 
          className="min-h-[120px] rounded-2xl border-slate-200 focus:ring-primary resize-none"
        />
        <div className="flex justify-end">
          <Button className="rounded-xl px-6 font-bold">댓글 등록</Button>
        </div>
      </div>

      {/* Comments View */}
      <div className="divide-y divide-slate-50">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))
        ) : (
          <div className="py-20 text-center space-y-2">
            <p className="text-slate-400 font-bold">아직 댓글이 없습니다.</p>
            <p className="text-sm text-slate-300">첫 번째 댓글의 주인공이 되어보세요!</p>
          </div>
        )}
      </div>
    </div>
  );
}
