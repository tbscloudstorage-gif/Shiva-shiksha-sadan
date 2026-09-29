import FooterTen from "@/layouts/footers/FooterTen";
import HeaderTen from "@/layouts/headers/HeaderTen";
import Wrapper from "@/layouts/Wrapper";
import AboutTen from "@/components/about/AboutTen";
import CategoriesTen from "@/components/categories/CategoriesTen";
import ChooseTen from "@/components/choose/ChooseTen";
import BackToTop from "@/components/common/BackToTop";
import CountDownTen from "@/components/countdown/CountDownTen";
import CourseTen from "@/components/course/CourseTen";
import FaqTen from "@/components/faq/FaqTen";
import HeroTen from "@/components/hero/HeroTen";
import SocialTen from "@/components/social/SocialTen";
import TestimonialTen from "@/components/testimonial/TestimonialTen";



export default function InstructorShowcase() {
  return (
    <Wrapper>
      <HeaderTen />
      <main>
        <HeroTen />
        <CountDownTen />
        <CategoriesTen />
        <AboutTen />
        <CourseTen />
        <ChooseTen />
        <TestimonialTen />
        <FaqTen />
        <SocialTen />
      </main>
      <FooterTen />
      <BackToTop />
    </Wrapper>
  )
}
