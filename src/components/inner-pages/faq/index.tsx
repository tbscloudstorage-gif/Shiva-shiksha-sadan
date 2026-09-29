import BreadcrumbBlogSidebar from "@/components/breadcrumb/BreadcrumbBlogSidebar";
import FaqArea from "@/components/faq/FaqArea";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
// import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";import HeaderOne from "@/layouts/headers/HeaderOne";
;

export default function Faq() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <BreadcrumbBlogSidebar title="Faq’s" subtitle2="Faq’s" style_3={true} />
        <FaqArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
