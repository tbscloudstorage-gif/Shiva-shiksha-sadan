import FooterNine from "@/layouts/footers/FooterNine";
import HeaderNine from "@/layouts/headers/HeaderNine";
import Wrapper from "@/layouts/Wrapper";
import AboutNine from "@/components/about/AboutNine";
import BlogNine from "@/components/blog/BlogNine";
import CategoriesNine from "@/components/categories/CategoriesNine";
import BackToTop from "@/components/common/BackToTop";
import CountDownNine from "@/components/countdown/CountDownNine";
import FaqNine from "@/components/faq/FaqNine";
import FeaturesNine from "@/components/features/FeaturesNine";
import HeroNine from "@/components/hero/HeroNine";
import TeamNine from "@/components/team/TeamNine";


export default function QuranLearning() {
  return (
    <Wrapper>
      <HeaderNine />
      <main>
        <HeroNine />
        <FeaturesNine />
        <AboutNine />
        <CategoriesNine />
        <CountDownNine />
        <TeamNine />
        <FaqNine />
        <BlogNine />
      </main>
      <FooterNine />
      <BackToTop />
    </Wrapper>
  )
}
