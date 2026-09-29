// import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import AboutOne from "@/components/about/AboutOne";
import BlogOne from "@/components/blog/BlogOne";
import BrandOne from "@/components/brand/BrandOne";
import CategoriesOne from "@/components/categories/CategoriesOne";
import BackToTop from "@/components/common/BackToTop";
import CountDownOne from "@/components/countdown/CountDownOne";
import CourseOne from "@/components/course/CourseOne";
import CatAreaOne from "@/components/cta/CatAreaOne";
import CtaOne from "@/components/cta/CtaOne";
import HeroOne from "@/components/hero/HeroOne";
// import TeamOne from "@/components/team/TeamOne";
// import TestimonialOne from "@/components/testimonial/TestimonialOne";
import TestimonialThree from "@/components/testimonial/TestimonialThree";
import FooterThree from "@/layouts/footers/FooterThree";


export default function GeneralEducation() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <HeroOne />
        <CategoriesOne />
        <CountDownOne />
        <AboutOne />
        <CourseOne />
        <CtaOne />
        <BrandOne />
        <TestimonialThree />
        {/* <TeamOne /> */}
        <BlogOne />
        <CatAreaOne />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}