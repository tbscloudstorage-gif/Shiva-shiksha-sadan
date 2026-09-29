import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BlogDetailsLeftSidebarArea from "@/components/blog/BlogDetailsLeftSidebarArea";
import BlogSimilar from "@/components/blog/BlogSimilar";
import BreadcrumbBlogSidebar from "@/components/breadcrumb/BreadcrumbBlogSidebar";
import BackToTop from "@/components/common/BackToTop";
import NewsletterThree from "@/components/newsletter/NewsletterThree";


export default function BlogDetailsLeftSidebar() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbBlogSidebar title="A Step-by-Step Guide to Building <br> Better User Experiences" style_2={true} />
        <BlogDetailsLeftSidebarArea />
        <BlogSimilar />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
