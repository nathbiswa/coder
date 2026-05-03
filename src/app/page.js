import Banner from "@/components/Banner";
import GlobalDataFetch from "@/components/GlobalDataFetch";
import LearningTips from "@/components/LearningTips";
import TopInstructors from "@/components/TopInstructors";
import TrendingCourses from "@/components/TrendingCourses";


export default function Home() {
  return (
    <div>
      <Banner />
      <GlobalDataFetch />
      <LearningTips />
      <TopInstructors />
      <TrendingCourses />
    </div>
  );
}
