import FooterThree from "@/layouts/footers/FooterThree";
import Wrapper from "@/layouts/Wrapper";
import BreadcrumbBlogSidebar from "@/components/breadcrumb/BreadcrumbBlogSidebar";
import BackToTop from "@/components/common/BackToTop";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Main from "@/components/blog/BlogSecond/Main";

export default function BlogDetailsWithoutSidebar() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <BreadcrumbBlogSidebar title="The Golden Jubilee Celebration of Shiva Shiksha Sadan

" style_2={true} />
        <Main/>
      
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
