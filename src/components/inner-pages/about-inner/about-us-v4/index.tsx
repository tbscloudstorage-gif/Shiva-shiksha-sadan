import FooterNine from "@/layouts/footers/FooterNine";
import HeaderNine from "@/layouts/headers/HeaderNine";
import Wrapper from "@/layouts/Wrapper";
import BackToTop from "@/components/common/BackToTop";
import AboutNine from "@/components/about/AboutNine";
import BreadcrumbThree from "@/components/breadcrumb/BreadcrumbThree";
import CountDownNine from "@/components/countdown/CountDownNine";
import FeaturesNine from "@/components/features/FeaturesNine";
import MissionArea from "@/components/mission/MissionArea";
import TeamNine from "@/components/team/TeamNine";


export default function Aboutusv4() {
  return (
    <Wrapper>
      <HeaderNine />
      <main>
        <BreadcrumbThree title="About us v4" subtitle="About us v4" />
        <FeaturesNine />
        <AboutNine />
        <MissionArea />
        <CountDownNine />
         <TeamNine />
      </main>
      <FooterNine />
      <BackToTop />
    </Wrapper>
  )
}
