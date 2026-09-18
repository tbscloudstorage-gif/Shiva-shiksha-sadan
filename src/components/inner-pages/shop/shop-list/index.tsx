import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import ShopListArea from "@/components/shop/ShopListArea";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function ShopList() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Shop list" subtitle="Shop List"  breadcrumb_img="assets/img/breadcrumb/shop.jpg" />
        <ShopListArea />       
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
