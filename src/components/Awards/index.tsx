import FooterThree from '@/layouts/footers/FooterThree'
import HeaderOne from '@/layouts/headers/HeaderOne'
// import React from 'react'
import MainPage from "@/components/Awards/MainPage"
import Breadcrumb from '../breadcrumb/Breadcrumb'

export default function index() {
  return (
    <div>
        <HeaderOne/>
                <Breadcrumb title="Awards & Honors" subtitle="Awards & Honors" breadcrumb_img="/assets/img/about/awards.png" />
        <MainPage />
        <FooterThree/>
    </div>
  )
}
