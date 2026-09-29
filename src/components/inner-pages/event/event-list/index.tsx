import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import EventListArea from "@/components/event/EventListArea";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function EventList() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Event List" subtitle="Event List" breadcrumb_img="/assets/img/breadcrumb/event-1.png" />
        <EventListArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
