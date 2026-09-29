// import React from 'react'

import FooterThree from "@/layouts/footers/FooterThree";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Philosophy from "./Philosophy";

export default function index() {
  return (
    <div>
      <HeaderOne/>
      
                    <Breadcrumb title="Our Philosophy" subtitle="Our Philosophy" breadcrumb_img="/assets/img/breadcrumb/course-v1-breadcrumb.jpg" />
           <Philosophy/>
      <FooterThree/>
    </div>
  )
}
