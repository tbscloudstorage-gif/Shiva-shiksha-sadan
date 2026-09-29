import FooterSeven from "@/layouts/footers/FooterSeven";
import HeaderSeven from "@/layouts/headers/HeaderSeven";
import Wrapper from "@/layouts/Wrapper";
import CategoriesSeven from "@/components/categories/CategoriesSeven";
import BackToTop from "@/components/common/BackToTop";
import CtaSeven from "@/components/cta/CtaSeven";
import FeaturesSeven from "@/components/features/FeaturesSeven";
import GallerySeven from "@/components/gallery/GallerySeven";
import HeroSeven from "@/components/hero/HeroSeven";
import ShopSeven from "@/components/shop/ShopSeven";
import ShopSevenTwo from "@/components/shop/ShopSevenTwo";
import TeamSeven from "@/components/team/TeamSeven";
import TestimonialSeven from "@/components/testimonial/TestimonialSeven";


export default function BooksShop() {
  return (
    <Wrapper>
      <HeaderSeven />
      <main>
        <HeroSeven />
        <CategoriesSeven />
        <GallerySeven />
        <CtaSeven />
        <ShopSeven />
        <ShopSevenTwo />
        <TeamSeven />
        <TestimonialSeven />
        <FeaturesSeven />
      </main>
      <FooterSeven />
      <BackToTop />
    </Wrapper>
  )
}
