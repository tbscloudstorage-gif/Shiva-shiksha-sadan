import FooterFourteen from "@/layouts/footers/FooterFourteen";
import HeaderFourteen from "@/layouts/headers/HeaderFourteen";
import Wrapper from "@/layouts/Wrapper";
import AboutFourteen from "@/components/about/AboutFourteen";
import BlogFourteen from "@/components/blog/BlogFourteen";
import ChooseFourteen from "@/components/choose/ChooseFourteen";
import BackToTop from "@/components/common/BackToTop";
import CountDownFourteen from "@/components/countdown/CountDownFourteen";
import CourseFourteen from "@/components/course/CourseFourteen";
import HeroFourteen from "@/components/hero/HeroFourteen";
import TeamFourteen from "@/components/team/TeamFourteen";
import TestimonialFourteen from "@/components/testimonial/TestimonialFourteen";
import VideoFourteen from "@/components/videos/VideoFourteen";



export default function YogaInstructor() {
  return (
    <Wrapper>
      <HeaderFourteen />
      <main>
        <HeroFourteen />
        <AboutFourteen />
        <CountDownFourteen />
        <CourseFourteen />
        <VideoFourteen />
        <ChooseFourteen />
        <TeamFourteen />
        <TestimonialFourteen />
        <BlogFourteen />
      </main>
      <FooterFourteen />
      <BackToTop />
    </Wrapper>
  )
}
