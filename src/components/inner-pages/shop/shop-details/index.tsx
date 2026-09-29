import BreadcrumbShopDetails from "@/components/breadcrumb/BreadcrumbShopDetails";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import ShopDetailsArea from "@/components/shop/ShopDetailsArea";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function ShopDetails() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbShopDetails />
        <ShopDetailsArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
