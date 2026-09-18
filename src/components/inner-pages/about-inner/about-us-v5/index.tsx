import FooterEleven from "@/layouts/footers/FooterEleven";
import HeaderEleven from "@/layouts/headers/HeaderEleven";
import Wrapper from "@/layouts/Wrapper";
import AboutEleven from "@/components/about/AboutEleven";
import BreadcrumbTwo from "@/components/breadcrumb/BreadcrumbTwo";
import BackToTop from "@/components/common/BackToTop";
import CountDownEleven from "@/components/countdown/CountDownEleven";
import FeaturesAboutus5 from "@/components/features/FeaturesAboutus5";
import PriceEleven from "@/components/price/PriceEleven";
import TeamEleven from "@/components/team/TeamEleven";
import TestimonialEleven from "@/components/testimonial/TestimonialEleven";



export default function Aboutusv5() {
  return (
    <Wrapper>
      <HeaderEleven />
      <main>
        <BreadcrumbTwo title="About us v5" subtitle="About us v5" />
        <AboutEleven />
        <CountDownEleven />
        <FeaturesAboutus5 />
        <TestimonialEleven style_2={true} />
        <TeamEleven />
        <PriceEleven />
      </main>
       <FooterEleven />
       <BackToTop />
    </Wrapper>
  )
}
