import { CommunityPost } from "@/types";
import PostCard from "./PostCard";

interface PostListProps {
  posts: CommunityPost[];
}

export default function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="bg-white border rounded-2xl py-20 text-center space-y-4 shadow-sm">
        <p className="text-slate-400 font-bold">작성된 게시글이 없습니다.</p>
        <p className="text-sm text-slate-300">새로운 이야기를 먼저 시작해보세요!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
