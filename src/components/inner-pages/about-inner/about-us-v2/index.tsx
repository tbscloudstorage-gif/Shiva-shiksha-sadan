import FooterSix from "@/layouts/footers/FooterSix";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import AboutSix from "@/components/about/AboutSix";
import BrandSix from "@/components/brand/BrandSix";
import BreadcrumbFour from "@/components/breadcrumb/BreadcrumbFour";
import ChooseAbout from "@/components/choose/ChooseAbout";
import ChooseSix from "@/components/choose/ChooseSix";
import BackToTop from "@/components/common/BackToTop";
import CountDownSix from "@/components/countdown/CountDownSix";
import TestimonialSix from "@/components/testimonial/TestimonialSix";


export default function Aboutusv2() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbFour title="About us v2" subtitle="About us v2" />
        <AboutSix />
        <BrandSix />
         <CountDownSix style_2={true} />
         <ChooseSix />
         <TestimonialSix style_2={true} />
         <ChooseAbout />
      </main>
      <FooterSix />   
      <BackToTop />  
    </Wrapper>
  )
}
