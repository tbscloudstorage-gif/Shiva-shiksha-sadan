import BreadcrumbCoursesDetailsv1 from "@/components/breadcrumb/BreadcrumbCoursesDetailsv1";
import CoursesDetailsv1Area from "@/components/course/CoursesDetailsv1Area";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function CoursesDetailsv1() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbCoursesDetailsv1 />        
        <CoursesDetailsv1Area />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
