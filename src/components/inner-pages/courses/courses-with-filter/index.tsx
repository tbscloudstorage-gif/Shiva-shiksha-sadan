import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import CoursesWithFilterArea from "@/components/course/CoursesWithFilterArea";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function CoursesWithFilter() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Courses With Filter" subtitle="Courses With Filter" breadcrumb_img="/assets/img/breadcrumb/course-v1-breadcrumb.jpg" />
        <CoursesWithFilterArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
