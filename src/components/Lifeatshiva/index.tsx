// import React from 'react'

import FooterThree from "@/layouts/footers/FooterThree";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Main from "@/components/Lifeatshiva/main"
import Breadcrumb from "../breadcrumb/Breadcrumb";
export default function index() {
  return (
    <div>
        <HeaderOne/>            
            <Breadcrumb title="Life at Shiva" subtitle="Life at Shiva" breadcrumb_img="/assets/img/about/life-at-shiva.jpg" />
        
       <Main/>
        <FooterThree/>
        {/* gg */}
    </div>
  )
}
