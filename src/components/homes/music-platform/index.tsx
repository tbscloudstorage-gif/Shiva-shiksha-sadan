
import FooterEight from "@/layouts/footers/FooterEight";
import HeaderEight from "@/layouts/headers/HeaderEight";
import Wrapper from "@/layouts/Wrapper";
import AboutEight from "@/components/about/AboutEight";
import BlogEight from "@/components/blog/BlogEight";
import BrandEight from "@/components/brand/BrandEight";
import ChooseEight from "@/components/choose/ChooseEight";
import CountDownEight from "@/components/countdown/CountDownEight";
import CourseEight from "@/components/course/CourseEight";
import CtaEight from "@/components/cta/CtaEight";
import FaqEight from "@/components/faq/FaqEight";
import HeroEight from "@/components/hero/HeroEight";
import TestimonialEight from "@/components/testimonial/TestimonialEight";
import BackToTop from "@/components/common/BackToTop";


export default function MusicPlatform() {
  return (
    <Wrapper>
      <HeaderEight />
      <main>
        <HeroEight />
        <CourseEight />
        <AboutEight />
        <ChooseEight />
        <CountDownEight />
        <TestimonialEight />
        <BrandEight />
        <FaqEight />
        <BlogEight />
        <CtaEight />
      </main>
      <FooterEight />
      <BackToTop />
    </Wrapper>
  )
}
