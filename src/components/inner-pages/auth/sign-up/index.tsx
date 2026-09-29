import FooterThree from "@/layouts/footers/FooterThree";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";
import BreadcrumbBlogSidebar from "@/components/breadcrumb/BreadcrumbBlogSidebar";
import SignupForm from "@/components/form/SignupForm";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import HeaderOne from "@/layouts/headers/HeaderOne";


export default function Signup() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <BreadcrumbBlogSidebar title="Apply Now" subtitle2="Apply Now" style_3={true} />
        <SignupForm />            
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
