import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Coursesv6Area from "@/components/course/Coursesv6Area";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function Coursesv6() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Courses v6" subtitle="Courses v6" breadcrumb_img="/assets/img/breadcrumb/course-v6-breadcrumb.jpg" />
        <Coursesv6Area />        
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
