import Banner from "@/components/Banner";
import GlobalDataFetch from "@/components/GlobalDataFetch";
import TopInstructors from "@/components/TopInstructors";


export default function Home() {
  return (
    <div>
      <Banner />
      <GlobalDataFetch />
      <TopInstructors />
    </div>
  );
}
