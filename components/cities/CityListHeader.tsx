import ViewToggle from "./ViewToggle";

interface CityListHeaderProps {
  totalCount: number;
}

export default function CityListHeader({ totalCount }: CityListHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-3">
          도시 탐색
          <span className="text-sm font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
            {totalCount}개
          </span>
        </h1>
        <p className="text-sm text-muted-foreground font-medium">
          전국의 노마드 스팟을 필터링하여 찾아보세요.
        </p>
      </div>
      
      <div className="flex items-center gap-3 self-end md:self-auto">
        <span className="text-xs font-bold text-slate-400">보기 모드</span>
        <ViewToggle />
      </div>
    </div>
  );
}
