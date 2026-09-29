import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import CartArea from "@/components/cart/CartArea";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function Cart() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Cart" subtitle="Cart" breadcrumb_img="/assets/img/breadcrumb/course-v4-breadcrumb.jpg" />
        <CartArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
