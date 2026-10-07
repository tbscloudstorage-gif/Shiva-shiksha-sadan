import FooterThree from "@/layouts/footers/FooterThree";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import AboutThree from "@/components/about/AboutThree";
import BlogThree from "@/components/blog/BlogThree";
import BrandThree from "@/components/brand/BrandThree";
import CampusThree from "@/components/campus/CampusThree";
import BackToTop from "@/components/common/BackToTop";
// import CourseThree from "@/components/course/CourseThree";
import CtaThree from "@/components/cta/CtaThree";
import FeaturesThree from "@/components/features/FeaturesThree";
import HeroThree from "@/components/hero/HeroThree";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
// import TuitionThree from "@/components/tuition/TuitionThree";
import FeaturesTwelve from "@/components/features/FeaturesTwelve";
import GalleryFour from "@/components/gallery/GalleryFour";
import FaqEight from "@/components/faq/FaqEight";
import CourseTwo from "@/components/course/CourseTwo";
import AwardsHome from "@/components/AwardsHome/index"
import TestimonialEight from "@/components/testimonial/TestimonialEight";

export default function University() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <HeroThree />
        <FeaturesThree />
        <AboutThree />
        <CourseTwo />
                <CtaThree />

        <AwardsHome />
        <FeaturesTwelve/>
        {/* <CourseThree /> */}
        <CampusThree />
        {/* <TuitionThree /> */}
        <GalleryFour/>
        <TestimonialEight/>
        {/* <TestimonialThree /> */}
        <BrandThree />
        <BlogThree />
        <FaqEight/>
        <NewsletterThree />               
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
