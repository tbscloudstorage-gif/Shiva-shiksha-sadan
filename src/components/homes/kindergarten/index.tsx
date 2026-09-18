import FooterFour from "@/layouts/footers/FooterFour";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";
import AboutFour from "@/components/about/AboutFour";
import ActivitiesFour from "@/components/activities/ActivitiesFour";
import BlogFour from "@/components/blog/BlogFour";
import ChooseFour from "@/components/choose/ChooseFour";
import BackToTop from "@/components/common/BackToTop";
import ContactFour from "@/components/contact/ContactFour";
import CountDownFour from "@/components/countdown/CountDownFour";
import CourseFour from "@/components/course/CourseFour";
import GalleryFour from "@/components/gallery/GalleryFour";
import HeroFour from "@/components/hero/HeroFour";
import NewsletterFour from "@/components/newsletter/NewsletterFour";
import TeamFour from "@/components/team/TeamFour";
import GallerySeven from "@/components/gallery/GallerySeven";
import GalleryThirteen from "@/components/gallery/GalleryThirteen";
import GalleryTwelve from "@/components/gallery/GalleryTwelve";

export default function Kindergarten() {
  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <HeroFour />
        <AboutFour />
        <ActivitiesFour />
        <CourseFour />
        <CountDownFour />
        <ChooseFour />
        <TeamFour />
        <ContactFour />
        <GalleryFour />
        <GallerySeven/>
        <GalleryThirteen/>
        <GalleryTwelve/>
        
        <BlogFour />
        <NewsletterFour />
      </main>
      <FooterFour />
      <BackToTop />
    </Wrapper>
  )
}
