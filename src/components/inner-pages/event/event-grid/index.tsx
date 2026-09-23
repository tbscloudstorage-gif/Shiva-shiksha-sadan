import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import EventGridArea from "@/components/event/EventGridArea";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
// import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";import HeaderOne from "@/layouts/headers/HeaderOne";
;


export default function EventGrid() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <Breadcrumb title="Upcoming Event" subtitle="Upcoming Event" breadcrumb_img="/assets/img/breadcrumb/upcoming-event.JPG" />
        <EventGridArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
