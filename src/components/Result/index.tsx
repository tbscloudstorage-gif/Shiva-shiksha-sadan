import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Main from "@/components/Result/Main";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
// import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";import HeaderOne from "@/layouts/headers/HeaderOne";
;


export default function EventGrid() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <Breadcrumb title="Results" subtitle="Results" breadcrumb_img="/assets/img/breadcrumb/media.JPG" />
        <Main/>
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
