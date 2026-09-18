import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import CoursesOpenFilterArea from "@/components/course/CoursesOpenFilterArea";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function CoursesOpenFilter() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Courses Open Filter" subtitle="Courses Open Filter" breadcrumb_img="/assets/img/breadcrumb/course-v1-breadcrumb.jpg" />
        <CoursesOpenFilterArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
