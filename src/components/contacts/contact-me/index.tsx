import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import ContactmeArea from "@/components/contact/ContactmeArea";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function Contactme() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <Breadcrumb title="Contact Me" subtitle="Contact Me" breadcrumb_img="/assets/img/breadcrumb/contact.jpg" />
        <ContactmeArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
