import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Coursesv4Area from "@/components/course/Coursesv4Area";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function Coursesv4() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Courses v4" subtitle="Courses v4" breadcrumb_img="/assets/img/breadcrumb/course-v4-breadcrumb.jpg" />
        <Coursesv4Area />        
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
