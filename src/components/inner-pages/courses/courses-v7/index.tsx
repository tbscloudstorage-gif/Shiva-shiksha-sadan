import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Coursesv7Area from "@/components/course/Coursesv7Area";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function Coursesv7() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Courses v7" subtitle="Courses v7" breadcrumb_img="/assets/img/breadcrumb/course-v7-breadcrumb.jpg" />
        <Coursesv7Area />        
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
