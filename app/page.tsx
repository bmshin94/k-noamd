import HeroSection from "@/components/home/HeroSection";
import FilterBar from "@/components/home/FilterBar";
import BestCitiesSection from "@/components/home/BestCitiesSection";
import CityCardGrid from "@/components/home/CityCardGrid";
import RecentSection from "@/components/home/RecentSection";
import CTASection from "@/components/home/CTASection";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FilterBar />
      <BestCitiesSection />
      <Separator className="max-w-7xl mx-auto" />
      <CityCardGrid />
      <Separator className="max-w-7xl mx-auto" />
      <RecentSection />
      <CTASection />
    </>
  );
}
