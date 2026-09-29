import BreadcrumbCareer from "@/components/breadcrumb/BreadcrumbCareer";
import CareerArea from "@/components/career/CareerArea";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function Career() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbCareer />
        <CareerArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
