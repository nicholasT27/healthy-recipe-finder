import Hero from "@/components/Hero";
import RecipeSection from "@/components/RecipeSection";
import HealthySection from "@/components/HealthySection";
import Features from "@/components/Features";
import RealLife from "@/components/RealLife";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
  <>
    <main>
      <Hero />
      <Features />
      <RealLife />
      <CallToAction />
    </main>
  </>
  )
}
