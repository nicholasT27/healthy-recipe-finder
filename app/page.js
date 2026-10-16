import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecipeSection from "@/components/RecipeSection";
import HealthySection from "@/components/HealthySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <>
    <Navbar />

    <main>
      <Hero />
      <RecipeSection />
      <HealthySection />
    </main>

    <Footer/>
  </>
  )
}
