import FooterSix from "@/layouts/footers/FooterSix";
import HeaderSix from "@/layouts/headers/HeaderSix";
import Wrapper from "@/layouts/Wrapper";
import AboutSix from "@/components/about/AboutSix";
import BlogSix from "@/components/blog/BlogSix";
import BrandSix from "@/components/brand/BrandSix";
import CategoriesSix from "@/components/categories/CategoriesSix";
import ChooseSix from "@/components/choose/ChooseSix";
import BackToTop from "@/components/common/BackToTop";
import CountDownSix from "@/components/countdown/CountDownSix";
import CourseSix from "@/components/course/CourseSix";
import CtaSix from "@/components/cta/CtaSix";
import EventSix from "@/components/event/EventSix";
import HeroSix from "@/components/hero/HeroSix";
import TestimonialSix from "@/components/testimonial/TestimonialSix";


export default function CookupAcademy() {
  return (
    <Wrapper>
      <HeaderSix />
      <main>
        <HeroSix />
        <BrandSix />
        <ChooseSix />
        <CourseSix />
        <AboutSix />
        <CategoriesSix />
        <EventSix />
        <CtaSix />
        <TestimonialSix />
        <CountDownSix />
        <BlogSix />
      </main>
      <FooterSix />
      <BackToTop />
    </Wrapper>
  )
}
