import CallToAction from "@/components/landing/Cta";
import FeaturedProducts from "@/components/landing/FeaturedProducts";
import Benefits from "@/components/landing/Benefits";
import Popular from "@/components/landing/Popular";
import Hero from "@/components/landing/Hero";
import Testimonials from "@/components/landing/Testimonials";
import Newsletter from "@/components/landing/Newsletter";
import LogoCloud from "@/components/landing/LogoCloud";
import BrandStory from "@/components/landing/BrandStory";
import FAQ from "@/components/landing/FAQ";
import Support from "@/components/landing/Support";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main>
      <Hero />
      <LogoCloud />
      <Suspense fallback={<div>Loading categories...</div>}>
        <Popular />
      </Suspense>
      <BrandStory />
      <Suspense fallback={<div>Loading products...</div>}>
        <FeaturedProducts />
      </Suspense>
      <Benefits />
      <Testimonials />
      <FAQ />
      <Support />
      <CallToAction />
      <Newsletter />
    </main>
  );
}
