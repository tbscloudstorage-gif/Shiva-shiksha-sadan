import FooterThree from "@/layouts/footers/FooterThree";
import Wrapper from "@/layouts/Wrapper";
import BlogDetailsWithoutSidebarArea from "@/components/blog/BlogDetailsWithoutSidebarArea";
import BreadcrumbBlogSidebar from "@/components/breadcrumb/BreadcrumbBlogSidebar";
import BackToTop from "@/components/common/BackToTop";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import HeaderOne from "@/layouts/headers/HeaderOne";

export default function BlogDetailsWithoutSidebar() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <BreadcrumbBlogSidebar title="How to Make Your Children’s Learning Better Every Single Day?
" style_2={true} />
        <BlogDetailsWithoutSidebarArea />
      
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
