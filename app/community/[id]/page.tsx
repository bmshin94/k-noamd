import { getPostById, getCommentsByPostId } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import PostDetail from "@/components/community/PostDetail";
import CommentList from "@/components/community/CommentList";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function PostDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  const comments = getCommentsByPostId(id);

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl space-y-6">
        {/* Back Button */}
        <Link href="/community">
          <Button variant="ghost" className="gap-2 text-slate-500 font-bold hover:text-primary pl-0">
            <ChevronLeft className="w-5 h-5" />
            목록으로 돌아가기
          </Button>
        </Link>

        {/* Main Post Section */}
        <PostDetail post={post} />

        {/* Comment Section */}
        <div className="bg-white border rounded-3xl p-8 md:p-10 shadow-sm">
          <CommentList comments={comments} />
        </div>
      </div>
    </div>
  );
}
