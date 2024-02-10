import Header from "@/Components/Header";
import HeroSection from "../Components/Home/HeroSection";
import Main from "@/Components/Home/Main";
import OurProduct from "@/Components/Home/OurProduct";
import ExploreMore from "@/Components/Home/ExploreMore";
import ShareSetup from "@/Components/Home/ShareSetup";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Main />
      <OurProduct />
      <ExploreMore />
      <ShareSetup />
    </>
  );
}
