import BlogSimilar from "@/components/blog/BlogSimilar";
import BreadcrumbEventDetails from "@/components/breadcrumb/BreadcrumbEventDetails";
import EventDetailsArea from "@/components/event/EventDetailsArea";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function EventDetails() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbEventDetails />
        <EventDetailsArea />    
        <BlogSimilar />    
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
