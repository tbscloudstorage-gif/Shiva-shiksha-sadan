import BreadcrumbTeamDetails from "@/components/breadcrumb/BreadcrumbTeamDetails";
import NewsletterThree from "@/components/newsletter/NewsletterThree";
import TeamDetailsArea from "@/components/team/TeamDetailsArea";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderInner from "@/layouts/headers/HeaderInner";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";;


export default function TeamDetails() {
  return (
    <Wrapper>
      <HeaderInner />
      <main>
        <BreadcrumbTeamDetails />
        <TeamDetailsArea />
        <NewsletterThree style_2={true} />
      </main>
      <FooterThree />
      <BackToTop />
    </Wrapper>
  )
}
