// import React from 'react'

import FooterThree from "@/layouts/footers/FooterThree";
import HeaderOne from "@/layouts/headers/HeaderOne";
import MainPage from "@/components/Magazines/MainPage"
import Breadcrumb from "../breadcrumb/Breadcrumb";
export default function index() {
  return (
    <div>
        <HeaderOne/>                <Breadcrumb title="Mandatory Public Disclosure" subtitle="Mandatory Public Disclosure" breadcrumb_img="/assets/img/breadcrumb/philosophy.JPG" />
        
        <MainPage
          pdfUrl="/assets/Mandatory Disclosure Details _ SARAS 4.pdf"
  coverImage="/assets/img/breadcrumb/contact.jpg"
  title="Mandatory Public Disclosure" />
        <FooterThree/>
        
    </div>
  )
}
