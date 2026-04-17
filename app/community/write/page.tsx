import WritePostForm from "@/components/community/WritePostForm";

export default function CommunityWritePage() {
  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-3xl space-y-10">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            새 게시글 <span className="text-primary">작성하기</span>
          </h1>
          <p className="text-slate-500 font-medium">
            당신의 자유로운 노마드 라이프와 소중한 정보들을 공유해주세요.
          </p>
        </div>

        <WritePostForm />
      </div>
    </div>
  );
}
