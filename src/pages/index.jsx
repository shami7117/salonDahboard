// import HomeCarousel from "@/components/home/HomeCarousel";
import HomeHeader from "@/components/home/HomeHeader";
import HomeIntro from "@/components/home/HomeIntro";
import HomeReviews from "@/components/home/HomeReviews";
import HomeCarousel from "@/components/home/HomeCarousel";

export default function Home() {

  return (
    <div>
      <HomeHeader />
      <HomeIntro />
      <HomeCarousel />
      <HomeReviews />
    </div>
  );
}
