import Destinations from "@/components/home/Destinations";
import FeatureCards from "@/components/home/FeatureCards";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import OtherServices from "@/components/home/OtherServices";
import XandreExperience from "@/components/home/XandreExperience";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/navbars/Navbar";
import SearchDestination from "@/components/home/SearchDestination";
import HomeRecommendations from "@/components/home/HomeRecommendations";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden ">
      <div className="flex h-[404px] md:h-[605px] justify-center relative z-10 bg-blue-50 md:bg-[url('/assets/homepage_hero.jpg')] bg-center bg-cover before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black before:via-transparent before:to-transparent before:opacity-75 before:z-[-5]">
        <Navbar />
        <SearchDestination />
      </div>

      <Destinations />
      <HomeRecommendations />
      <OtherServices />
      <XandreExperience />

      <Footer />
    </main>
  );
}
