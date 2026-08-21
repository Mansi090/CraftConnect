import { CategoryGrid } from "@/features/marketing/components/CategoryGrid";
import { FeaturedProviders } from "@/features/marketing/components/FeaturedProviders";
import { Hero } from "@/features/marketing/components/Hero";
import { HowItWorks } from "@/features/marketing/components/HowItWorks";
import { Stats } from "@/features/marketing/components/Stats";
import { Testimonials } from "@/features/marketing/components/Testimonials";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategoryGrid />
      <FeaturedProviders />
      <HowItWorks />
      <Stats />
      <Testimonials />
    </main>
  );
}
