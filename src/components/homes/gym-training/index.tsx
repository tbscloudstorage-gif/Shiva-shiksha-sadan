import FooterEleven from "@/layouts/footers/FooterEleven";
import HeaderEleven from "@/layouts/headers/HeaderEleven";
import Wrapper from "@/layouts/Wrapper";
import AboutEleven from "@/components/about/AboutEleven";
import CategoriesEleven from "@/components/categories/CategoriesEleven";
import BackToTop from "@/components/common/BackToTop";
import CountDownEleven from "@/components/countdown/CountDownEleven";
import CourseEleven from "@/components/course/CourseEleven";
import FeaturesEleven from "@/components/features/FeaturesEleven";
import HeroEleven from "@/components/hero/HeroEleven";
import PriceEleven from "@/components/price/PriceEleven";
import SocialEleven from "@/components/social/SocialEleven";
import TeamEleven from "@/components/team/TeamEleven";
import TestimonialEleven from "@/components/testimonial/TestimonialEleven";


export default function GymTraining() {
  return (
    <Wrapper>
      <HeaderEleven />
      <main>
        <HeroEleven />
        <CountDownEleven />
        <CategoriesEleven />
        <AboutEleven />
        <CourseEleven />
        <FeaturesEleven />
        <TeamEleven />
        <PriceEleven />
        <TestimonialEleven />
        <SocialEleven />
      </main>
      <FooterEleven />
      <BackToTop />
    </Wrapper>
  )
}
