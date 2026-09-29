// import React from 'react'

import FooterThree from "@/layouts/footers/FooterThree";
import HeaderOne from "@/layouts/headers/HeaderOne";
import MainPage from "@/components/Magazines/MainPage"
import Breadcrumb from "../breadcrumb/Breadcrumb";
export default function index() {
  return (
    <div>
        <HeaderOne/>            
            <Breadcrumb title="Magazines" subtitle="Magazines" breadcrumb_img="/assets/img/breadcrumb/course-v1-breadcrumb.jpg" />
        
        <MainPage pdfUrl="assets/Magazine.pdf" />
        <FooterThree/>
        
    </div>
  )
}
