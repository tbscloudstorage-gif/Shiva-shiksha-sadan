import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Coursesv3Area from "@/components/course/Coursesv3Area";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function Coursesv3() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Courses v3" subtitle="Courses v3" breadcrumb_img="/assets/img/breadcrumb/course-v1-breadcrumb.jpg" />
        <Coursesv3Area />        
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
