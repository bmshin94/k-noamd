import CityCardSkeleton from "./CityCardSkeleton";

export default function CityCardGridSkeleton() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <CityCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}
