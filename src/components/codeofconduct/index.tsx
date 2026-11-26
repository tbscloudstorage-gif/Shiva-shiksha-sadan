// import React from 'react'

import FooterThree from "@/layouts/footers/FooterThree";
import HeaderOne from "@/layouts/headers/HeaderOne";
import MainPage from "@/components/Magazines/MainPage"
import BreadcrumbBlogSidebar from "../breadcrumb/BreadcrumbBlogSidebar";
export default function index() {
  return (
    <div>
        <HeaderOne/>            
         <BreadcrumbBlogSidebar title="Code of Conduct" subtitle2="Code of Conduct" style_3={true} />
        <MainPage   pdfUrl="/assets/code-of-conduct.pdf"
  coverImage="/assets/img/academics.JPG"
  title="code-of-conduct"  />
        <FooterThree/>
        {/* gg */}
    </div>
  )
}
