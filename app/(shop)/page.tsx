import CallToAction from "@/components/landing/Cta";
import FeaturedProducts from "@/components/landing/FeaturedProducts";
import Benefits from "@/components/landing/Benefits";
import Popular from "@/components/landing/Popular";
import Hero from "@/components/landing/Hero";
import Testimonials from "@/components/landing/Testimonials";
import Newsletter from "@/components/landing/Newsletter";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Suspense fallback={<div>Loading...</div>}>
        <Popular />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FeaturedProducts />
      </Suspense>
      <Testimonials />
      <CallToAction />
      <Newsletter />
    </main>
  );
}
