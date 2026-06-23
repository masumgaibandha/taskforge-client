import Banner from "@/components/Banner";
import FeaturedTasks from "@/components/FeaturedTasks";
import HowItWorks from "@/components/HowItWorks";
import PlatformStats from "@/components/PlatformStats";
import Testimonials from "@/components/Testimonials";
import TopFreelancers from "@/components/TopFreelancers";
import FadeUp from "@/components/shared/FadeUp";

export default function Home() {
  return (
    <>
      <Banner />

      <FadeUp>
        <FeaturedTasks />
      </FadeUp>

      <FadeUp delay={0.1}>
        <TopFreelancers />
      </FadeUp>

      <FadeUp delay={0.2}>
        <HowItWorks />
      </FadeUp>

      <FadeUp delay={0.3}>
        <PlatformStats />
      </FadeUp>

      <FadeUp delay={0.4}>
        <Testimonials />
      </FadeUp>
    </>
  );
}
