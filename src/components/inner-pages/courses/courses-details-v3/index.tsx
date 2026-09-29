
import BreadcrumbCoursesDetailsv3 from "@/components/breadcrumb/BreadcrumbCoursesDetailsv3";
import CoursesDetailsv3Area from "@/components/course/CoursesDetailsv3Area";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function CoursesDetailsv3() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbCoursesDetailsv3 />        
        <CoursesDetailsv3Area />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
