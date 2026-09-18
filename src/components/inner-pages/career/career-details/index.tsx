import BreadcrumbCareerDetails from "@/components/breadcrumb/BreadcrumbCareerDetails";
import CareerDetailsArea from "@/components/career/CareerDetailsArea";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function CareerDetails() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbCareerDetails />
        <CareerDetailsArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
