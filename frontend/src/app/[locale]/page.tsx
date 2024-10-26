import Hero from "@/components/home/Hero";
import Destinations from "@/components/home/Destinations";
import HomeRecommendations from "@/components/home/HomeRecommendations";
import OtherServices from "@/components/home/OtherServices";
import SearchDestination from "@/components/home/SearchDestination";
import XandreExperience from "@/components/home/XandreExperience";
import Navbar from "@/components/navbars/Navbar";
import Footer from "@/components/ui/Footer";
import { useTranslations } from "next-intl";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "jp" }];
}

interface HomePageProps {
  params: {
    locale: string;
  };
}

export default function HomePage({ params }: HomePageProps) {
  const { locale } = params;

  const t = useTranslations("HomePage");
  return (
    <main className="relative w-full overflow-x-hidden ">
      <div className="flex h-[404px] md:h-[605px] justify-center relative z-10 bg-[url('/assets/images/mobile_home_bg.jpg')] md:bg-[url('/assets/homepage_hero.jpg')] bg-center bg-cover before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black/60 before:via-transparent before:to-transparent before:opacity-75 before:z-[-5]">
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
