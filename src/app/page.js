import Banner from "@/components/Banner";
import FeaturedTasks from "@/components/FeaturedTasks";
import HowItWorks from "@/components/HowItWorks";
import TopFreelancers from "@/components/TopFreelancers";


export default function Home() {
  return (
    <>
      <Banner />
      <FeaturedTasks/>
      <TopFreelancers/>
      <HowItWorks/>
    </>
  );
}
