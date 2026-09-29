// import FooterFour from "@/layouts/footers/FooterFour";
// import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import AboutOne from "@/components/about/AboutOne";
// import BrandOne from "@/components/brand/BrandOne";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import ChooseFive from "@/components/choose/ChooseFive";
import BackToTop from "@/components/common/BackToTop";
import CountDownOne from "@/components/countdown/CountDownOne";
// import CtaFive from "@/components/cta/CtaFive";
// import TeamOne from "@/components/team/TeamOne";
// import TestimonialOne from "@/components/testimonial/TestimonialOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import TestimonialThree from "@/components/testimonial/TestimonialThree";
import FooterThree from "@/layouts/footers/FooterThree";



export default function Aboutusv1() {
  return (
    <Wrapper>
      <HeaderOne
       />
      <main>
        <Breadcrumb title="About School " subtitle="About School " breadcrumb_img="/assets/img/breadcrumb/about-breadcrumb.png" />
        <AboutOne />
        <CountDownOne />
        <ChooseFive style_2={true} />
        <TestimonialThree  />
        {/* <BrandOne style_2={true} /> */}
        {/* <TeamOne style_2={true}/> */}
        {/* <CtaFive /> */}
      </main>
      <FooterThree/>
      <BackToTop />
    </Wrapper>
  )
}
