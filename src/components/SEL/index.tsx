import Main from "@/components/SEL/main";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
// import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BreadcrumbBlogSidebar from "../breadcrumb/BreadcrumbBlogSidebar";
import BackToTop from "@/components/common/BackToTop";import HeaderOne from "@/layouts/headers/HeaderOne";
;


export default function EventGrid() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
          <BreadcrumbBlogSidebar title="Social & Emotional Learning" subtitle2="Social & Emotional Learning" style_3={true} />
        <Main/>
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
