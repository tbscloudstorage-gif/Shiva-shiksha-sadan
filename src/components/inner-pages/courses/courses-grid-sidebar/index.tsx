

import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import CoursesGridSidebarArea from "@/components/course/CoursesGridSidebarArea";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function CoursesGridSidebar() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Courses Grid Sidebar" subtitle="Courses Grid Sidebar" breadcrumb_img="/assets/img/breadcrumb/course-v1-breadcrumb.jpg" />
        <CoursesGridSidebarArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
