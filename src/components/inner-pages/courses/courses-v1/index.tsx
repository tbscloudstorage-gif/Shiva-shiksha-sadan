import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Coursesv1Area from "@/components/course/Coursesv1Area";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function Coursesv1() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Courses v1" subtitle="Courses v1" breadcrumb_img="/assets/img/breadcrumb/course-v1-breadcrumb.jpg" />
        <Coursesv1Area />        
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
