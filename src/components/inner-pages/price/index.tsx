import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import PriceArea from "@/components/price/PriceArea";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function Price() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Membership Plans" subtitle="Pricing" breadcrumb_img="/assets/img/breadcrumb/contact.jpg" />
        <PriceArea />   
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
