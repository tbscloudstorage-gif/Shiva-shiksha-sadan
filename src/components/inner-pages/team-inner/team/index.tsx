import BreadcrumbTeam from "@/components/breadcrumb/BreadcrumbTeam";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import TeamArea from "@/components/team/TeamArea";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;

export default function Team() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbTeam title="Instructor" subtitle="Instructor" />
        <TeamArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
