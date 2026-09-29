import FooterFourteen from "@/layouts/footers/FooterFourteen";
import HeaderFourteen from "@/layouts/headers/HeaderFourteen";
import Wrapper from "@/layouts/Wrapper";
import AboutFourteen from "@/components/about/AboutFourteen";
import BreadcrumbFive from "@/components/breadcrumb/BreadcrumbFive";
import ChooseFourteen from "@/components/choose/ChooseFourteen";
import BackToTop from "@/components/common/BackToTop";
import CountDownFourteen from "@/components/countdown/CountDownFourteen";
import TeamFourteen from "@/components/team/TeamFourteen";
import TestimonialFourteen from "@/components/testimonial/TestimonialFourteen";
import VideoFourteen from "@/components/videos/VideoFourteen";



export default function Aboutusv3() {
  return (
    <Wrapper>
      <HeaderFourteen />
      <main>
        <BreadcrumbFive title="About Us V3" subtitle="About Us V3" />
        <AboutFourteen />
        <CountDownFourteen />
        <VideoFourteen />
        <ChooseFourteen />
        <TeamFourteen />
        <TestimonialFourteen />
      </main>
      <FooterFourteen />
      <BackToTop />
    </Wrapper>
  )
}
