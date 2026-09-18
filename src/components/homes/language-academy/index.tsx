import FooterFive from "@/layouts/footers/FooterFive";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import AboutFive from "@/components/about/AboutFive";
import BlogFive from "@/components/blog/BlogFive";
import BrandFive from "@/components/brand/BrandFive";
import ChooseFive from "@/components/choose/ChooseFive";
import BackToTop from "@/components/common/BackToTop";
import ContactFive from "@/components/contact/ContactFive";
import CourseFive from "@/components/course/CourseFive";
import CtaFive from "@/components/cta/CtaFive";
import EventFive from "@/components/event/EventFive";
import FeaturesFive from "@/components/features/FeaturesFive";
import HeroFive from "@/components/hero/HeroFive";
import TestimonialFive from "@/components/testimonial/TestimonialFive";


export default function LanguageAcademy() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <HeroFive />
        <BrandFive />
        <AboutFive />
        <FeaturesFive />
        <CourseFive />
        <EventFive />
        <ChooseFive />
        <TestimonialFive />
        <ContactFive />
        <BlogFive />
        <CtaFive />
      </main>
      <FooterFive />
      <BackToTop />
    </Wrapper>
  )
}
