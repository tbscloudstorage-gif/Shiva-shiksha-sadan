import FooterThirteen from "@/layouts/footers/FooterThirteen";
import HeaderThirteen from "@/layouts/headers/HeaderThirteen";
import Wrapper from "@/layouts/Wrapper";
import AboutThirteen from "@/components/about/AboutThirteen";
import BrandThirteen from "@/components/brand/BrandThirteen";
import BackToTop from "@/components/common/BackToTop";
import CtaThirteen from "@/components/cta/CtaThirteen";
import FeaturesThirteen from "@/components/features/FeaturesThirteen";
import GalleryThirteen from "@/components/gallery/GalleryThirteen";
import HeroThirteen from "@/components/hero/HeroThirteen";
import PortfolioThirteen from "@/components/portfolio/PortfolioThirteen";
import SocialThirteen from "@/components/social/SocialThirteen";
import TestimonialThirteen from "@/components/testimonial/TestimonialThirteen";


export default function FashionDesign() {
  return (
    <Wrapper>
      <HeaderThirteen />
      <main>
        <HeroThirteen />
        <BrandThirteen />
        <AboutThirteen />
        <PortfolioThirteen />
        <FeaturesThirteen />
        <TestimonialThirteen />
        <GalleryThirteen />
        <SocialThirteen />
        <CtaThirteen />
      </main>
      <FooterThirteen />
      <BackToTop />
    </Wrapper>
  )
}
