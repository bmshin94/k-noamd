import { ALL_POSTS } from "@/lib/mock-data";
import PostFilter from "@/components/community/PostFilter";
import PostList from "@/components/community/PostList";
import { Button } from "@/components/ui/button";
import { PenLine } from "lucide-react";
import Link from "next/link";

export default async function CommunityPage({
  searchParams,
}: {
  searchParams: { category?: string; sort?: string };
}) {
  const { category, sort = "latest" } = searchParams;

  // Filtering Logic
  let filteredPosts = [...ALL_POSTS];
  if (category && category !== "전체") {
    filteredPosts = filteredPosts.filter((p) => p.category === category);
  }

  // Sorting Logic
  if (sort === "popular") {
    filteredPosts.sort((a, b) => b.likes - a.likes);
  } else {
    filteredPosts.sort((a, b) => b.id.localeCompare(a.id)); // Mock latest sort
  }

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl space-y-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              노마드 <span className="text-primary">커뮤니티</span>
            </h1>
            <p className="text-slate-500 font-medium">
              전국의 노마드들과 실시간 정보를 공유하고 소통해보세요.
            </p>
          </div>
          
          <Link href="/community/write" className="w-full md:w-auto">
            <Button className="w-full md:w-auto h-12 px-8 rounded-2xl font-black gap-2 shadow-lg shadow-primary/20">
              <PenLine className="w-5 h-5" />
              글쓰기
            </Button>
          </Link>
        </div>

        {/* Filter Section */}
        <PostFilter />

        {/* Post List Section */}
        <PostList posts={filteredPosts} />
      </div>
    </div>
  );
}
