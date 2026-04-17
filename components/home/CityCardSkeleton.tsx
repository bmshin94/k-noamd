import { Skeleton } from "@/components/ui/skeleton";

export default function CityCardSkeleton() {
  return (
    <div className="flex flex-col bg-card rounded-xl border overflow-hidden shadow-sm">
      {/* Image area */}
      <Skeleton className="h-44 w-full rounded-none" />

      {/* Body */}
      <div className="flex flex-col gap-3 p-4 flex-1">
        {/* City name & region */}
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-3 w-1/3" />
        </div>

        {/* Star rating */}
        <Skeleton className="h-4 w-1/2" />

        {/* Score bars */}
        <div className="flex flex-col gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-2 w-full" />
          ))}
        </div>

        {/* Tags */}
        <div className="flex gap-1">
          <Skeleton className="h-5 w-14 rounded-full" />
          <Skeleton className="h-5 w-10 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>

        {/* Button */}
        <Skeleton className="h-8 w-full mt-auto" />
      </div>
    </div>
  );
}
