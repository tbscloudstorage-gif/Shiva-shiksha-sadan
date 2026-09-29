// import React from 'react'

import FooterThree from "@/layouts/footers/FooterThree";
import HeaderOne from "@/layouts/headers/HeaderOne";
import MainPage from "@/components/Magazines/MainPage"
import Breadcrumb from "../breadcrumb/Breadcrumb";
export default function index() {
  return (
    <div>
        <HeaderOne/>                <Breadcrumb title="Mandatory Public Disclosure" subtitle="Mandatory Public Disclosure" breadcrumb_img="/assets/img/breadcrumb/course-v1-breadcrumb.jpg" />
        
        <MainPage pdfUrl = "https://docs.google.com/document/d/11AFWVdK7hH334oXHdbE7ZxAXqWQuQUBo3rt7BEhPiaE/edit?usp=sharing"  />
        <FooterThree/>
        
    </div>
  )
}
