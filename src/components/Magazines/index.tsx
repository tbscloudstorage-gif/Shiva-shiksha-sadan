// import React from 'react'

import FooterThree from "@/layouts/footers/FooterThree";
import HeaderOne from "@/layouts/headers/HeaderOne";
import MainPage from "@/components/Magazines/MainPage"
import Breadcrumb from "../breadcrumb/Breadcrumb";
export default function index() {
  return (
    <div>
        <HeaderOne/>            
            <Breadcrumb title="Editorial" subtitle="Editorial" breadcrumb_img="/assets/img/breadcrumb/editorial.png" />
        
        <MainPage   pdfUrl="/assets/Magazine.pdf"
  coverImage="/assets/img/academics.JPG"
  title="Editorial"  />
        <FooterThree/>
        {/* gg */}
    </div>
  )
}
