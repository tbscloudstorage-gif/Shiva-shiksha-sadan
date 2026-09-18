import FooterTwelve from "@/layouts/footers/FooterTwelve";
import HeaderTwelve from "@/layouts/headers/HeaderTwelve";
import Wrapper from "@/layouts/Wrapper";
import BlogTwelve from "@/components/blog/BlogTwelve";
import BackToTop from "@/components/common/BackToTop";
import CourseTwelve from "@/components/course/CourseTwelve";
import EventTwelve from "@/components/event/EventTwelve";
import FaqTwelve from "@/components/faq/FaqTwelve";
import FeaturesTwelve from "@/components/features/FeaturesTwelve";
import GalleryTwelve from "@/components/gallery/GalleryTwelve";
import HeroTwelve from "@/components/hero/HeroTwelve";
import NewsletterTwelve from "@/components/newsletter/NewsletterTwelve";
import TeamTwelve from "@/components/team/TeamTwelve";


export default function Childcare() {
  return (
    <Wrapper>
      <HeaderTwelve />
      <main>
        <HeroTwelve />
        <FeaturesTwelve />
        <CourseTwelve />
        <EventTwelve />
        <TeamTwelve />
        <FaqTwelve />
        <GalleryTwelve />
        <BlogTwelve />
        <NewsletterTwelve />
      </main>
      <FooterTwelve />
      <BackToTop />
    </Wrapper>
  )
}
