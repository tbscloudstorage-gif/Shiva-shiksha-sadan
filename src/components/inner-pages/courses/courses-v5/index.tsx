import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Coursesv5Area from "@/components/course/Coursesv5Area";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function Coursesv5() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Courses v5" subtitle="Courses v5" breadcrumb_img="/assets/img/breadcrumb/course-v4-breadcrumb.jpg" />
        <Coursesv5Area />        
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
