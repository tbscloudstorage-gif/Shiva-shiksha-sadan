import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Coursesv2Area from "@/components/course/Coursesv2Area";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function Coursesv2() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Courses v2" subtitle="Courses v2" breadcrumb_img="/assets/img/breadcrumb/course-v1-breadcrumb.jpg" />
        <Coursesv2Area />        
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
