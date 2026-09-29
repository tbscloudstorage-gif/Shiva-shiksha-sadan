
import BreadcrumbCoursesDetailsv4 from "@/components/breadcrumb/BreadcrumbCoursesDetailsv4";
import CoursesDetailsv4Area from "@/components/course/CoursesDetailsv4Area";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function CoursesDetailsv4() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbCoursesDetailsv4 />        
        <CoursesDetailsv4Area />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
