// import React from 'react'

import FooterThree from "@/layouts/footers/FooterThree";
import HeaderOne from "@/layouts/headers/HeaderOne";
import MainPage from "@/components/Magazines/MainPage";
import BreadcrumbBlogSidebar from "../breadcrumb/BreadcrumbBlogSidebar";
export default function index() {
  return (
    <div>
        <HeaderOne/>            
         <BreadcrumbBlogSidebar title="Undertaking" subtitle2="Undertaking" style_3={true} />
        <MainPage   pdfUrl="/assets/undertaking.pdf"
  coverImage="/assets/img/academics.JPG"
  title="Undertaking"  />
        <FooterThree/>
        {/* gg */}
    </div>
  )
}
