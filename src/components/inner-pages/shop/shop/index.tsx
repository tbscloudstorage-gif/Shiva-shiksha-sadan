import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import ShopArea from "@/components/shop/ShopArea";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function Shop() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Shop now" subtitle="Shop"  breadcrumb_img="assets/img/breadcrumb/shop.jpg" />
        <ShopArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
