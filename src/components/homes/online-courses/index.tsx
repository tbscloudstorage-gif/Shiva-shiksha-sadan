import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import Wrapper from "@/layouts/Wrapper";
import BlogTwo from "@/components/blog/BlogTwo";
import BrandTwo from "@/components/brand/BrandTwo";
import CategoriesTwo from "@/components/categories/CategoriesTwo";
import BackToTop from "@/components/common/BackToTop";
import CountDownTwo from "@/components/countdown/CountDownTwo";
import CourseTwo from "@/components/course/CourseTwo";
import CtaTwo from "@/components/cta/CtaTwo";
import EventTwo from "@/components/event/EventTwo";
import HeroTwo from "@/components/hero/HeroTwo";
import NewsletterTwo from "@/components/newsletter/NewsletterTwo";
import TeamTwo from "@/components/team/TeamTwo";
import TestimonialTwo from "@/components/testimonial/TestimonialTwo";


export default function OnlineCourses() {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <HeroTwo />
        <CountDownTwo />
        <CategoriesTwo />
        <CourseTwo />
        <CtaTwo />
        <TestimonialTwo />
        <BrandTwo />
        <EventTwo />
        <TeamTwo />
        <BlogTwo />
        <NewsletterTwo />     
      </main>
      <FooterTwo />
      <BackToTop />
    </Wrapper>
  )
}
