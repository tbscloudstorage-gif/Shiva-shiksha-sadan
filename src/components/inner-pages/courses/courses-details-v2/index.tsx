
import BreadcrumbCoursesDetailsv2 from "@/components/breadcrumb/BreadcrumbCoursesDetailsv2";
import CoursesDetailsv2Area from "@/components/course/CoursesDetailsv2Area";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function CoursesDetailsv2() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbCoursesDetailsv2 />        
        <CoursesDetailsv2Area />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
