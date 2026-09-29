import BlogSidebarArea from "@/components/blog/BlogSidebarArea";
import BreadcrumbBlogSidebar from "@/components/breadcrumb/BreadcrumbBlogSidebar";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function BlogSidebar() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbBlogSidebar title="Blog Standard" style_2={false} />
        <BlogSidebarArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
