import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import CoursesListSidebarArea from "@/components/course/CoursesListSidebarArea";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function CoursesListSidebar() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Courses List Sidebar" subtitle="Courses List Sidebar" breadcrumb_img="/assets/img/breadcrumb/course-v1-breadcrumb.jpg" />
        <CoursesListSidebarArea />        
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
