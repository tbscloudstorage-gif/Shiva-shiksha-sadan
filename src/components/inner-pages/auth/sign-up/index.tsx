import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";
import BreadcrumbBlogSidebar from "@/components/breadcrumb/BreadcrumbBlogSidebar";
import SignupForm from "@/components/form/SignupForm";
import NewsletterThree from "@/components/newsletter/NewsletterThree";


export default function Signup() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbBlogSidebar title="Registration" subtitle2="Registration" style_3={true} />
        <SignupForm />            
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
