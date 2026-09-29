// import BreadcrumbCareerDetails from "@/components/breadcrumb/BreadcrumbCareerDetails";
import CareerDetailsArea from "@/components/career/CareerDetailsArea";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
// import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
;

export default function CareerDetails() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
                    <Breadcrumb title="Career" subtitle="Career" breadcrumb_img="/assets/img/breadcrumb/career.JPG" />
        <CareerDetailsArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
