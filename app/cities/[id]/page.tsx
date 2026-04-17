import { notFound } from "next/navigation";
import { getCityById, getReviewsByCityId, getRelatedCities, CITIES } from "@/lib/mock-data";
import CityDetailHero from "@/components/city/CityDetailHero";
import CityScorePanel from "@/components/city/CityScorePanel";
import CityReviewList from "@/components/city/CityReviewList";
import RelatedCities from "@/components/city/RelatedCities";
import WriteReviewButton from "@/components/city/WriteReviewButton";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export function generateStaticParams() {
  return CITIES.map((city) => ({
    id: city.id,
  }));
}

export default async function CityDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const city = getCityById(id);

  if (!city) {
    notFound();
  }

  const reviews = getReviewsByCityId(id);
  const relatedCities = getRelatedCities(city);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb Section */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">홈</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/cities">도시 목록</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{city.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <CityDetailHero city={city} />

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content (Left) */}
        <div className="lg:col-span-2 space-y-12">
          {/* Score Panel */}
          <CityScorePanel city={city} />

          {/* Review List */}
          <CityReviewList reviews={reviews} />
        </div>

        {/* Sidebar (Right) */}
        <div className="space-y-8">
          <RelatedCities cities={relatedCities} />
        </div>
      </div>

      {/* Floating Action Button for Writing Review */}
      <WriteReviewButton />
    </div>
  );
}
