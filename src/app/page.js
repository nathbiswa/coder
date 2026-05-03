import Banner from "@/components/Banner";
import GlobalDataFetch from "@/components/GlobalDataFetch";
import LearningTips from "@/components/LearningTips";
import TopInstructors from "@/components/TopInstructors";


export default function Home() {
  return (
    <div>
      <Banner />
      <GlobalDataFetch />
      <LearningTips />
      <TopInstructors />
    </div>
  );
}
