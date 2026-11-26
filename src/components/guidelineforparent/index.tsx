// import React from 'react'

import FooterThree from "@/layouts/footers/FooterThree";
import HeaderOne from "@/layouts/headers/HeaderOne";
import MainPage from "@/components/Magazines/MainPage"
import BreadcrumbBlogSidebar from "../breadcrumb/BreadcrumbBlogSidebar";
export default function index() {
  return (
    <div>
        <HeaderOne/>            
         <BreadcrumbBlogSidebar title="Guideline for Parent" subtitle2="Guideline for Parent" style_3={true} />
        <MainPage   pdfUrl="/assets/guidelines-for-parent.pdf"
  coverImage="/assets/img/academics.JPG"
  title="guidelines-for-parent"  />
        <FooterThree/>
        {/* gg */}
    </div>
  )
}
