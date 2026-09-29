import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Coursesv8Area from "@/components/course/Coursesv8Area";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function Coursesv8() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Courses v8" subtitle="Courses v8" breadcrumb_img="/assets/img/breadcrumb/course-v8-breadcrumb.jpg" />
        <Coursesv8Area />        
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
