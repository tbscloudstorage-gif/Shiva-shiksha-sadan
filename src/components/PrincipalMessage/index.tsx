// import { Link } from "react-router-dom";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import FooterThree from "@/layouts/footers/FooterThree";

export default function AboutEight() {
  return (
    <>
    <HeaderOne/>
            <Breadcrumb title="Chairman's Message" subtitle="Chairman's Message " breadcrumb_img="/assets/img/breadcrumb/Principal-breadcrumb.png" />
    
      {/* <!-- about-area-start --> */}
      <section className="it-about-area it-about-style-3 z-index-1 gray-bg pt-190 pb-130">
        {/* <img className="it-about-shape-8 d-none d-lg-block" src="assets/img/shape/about-9-2.png" alt="" /> */}
        {/* <img className="it-about-shape-9" src="assets/img/shape/about-9-3.png" alt="" /> */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-1 order-lg-0 wow itfadeLeft" data-wow-duration=".9s"
              data-wow-delay=".5s">
              <div className="it-about-left z-index-1">
                {/* <img className="it-about-shape-7" src="assets/img/shape/about-9-1.png" alt="" /> */}
                <div className="row gx-0">
                  <div className="col-lg-6 col-md-6">
                    <div className="it-about-thumb style-1  z-index-1">
                      <img src="assets/img/about/about-9-1.jpg" alt="" />
                      {/* <a className="it-about-thumb-icon pulse-white" href="#">
                        <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 7.93782C11.1667 7.55292 11.1667 6.59067 10.5 6.20577L1.5 1.00962C0.833333 0.624718 0 1.10584 0 1.87564V12.2679C0 13.0378 0.833333 13.5189 1.5 13.134L10.5 7.93782Z" fill="#F8C62F" />
                        </svg>
                      </a> */}
                    </div>
                    <div className="it-about-experience-box mb-20 d-inline-flex align-items-center text-white">
                      <h5 className="text-white">50 +</h5>
                      <span className="text-white">Years of <br />Experience</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="it-about-thumb style-2 z-index-1">
                      <img src="assets/img/about/about-9-2.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-0 order-lg-1 wow itfadeRight" data-wow-duration=".9s"
              data-wow-delay=".7s">
              <div className="it-about-right">
                <div className="it-about-section-title-box mb-25">
                  <span className="it-section-subtitle">Chairman's Message</span>
                  <h4 className="it-section-title">A Message from Our  <br />
                    <span className="z-index-1">
                      Chairman
                     
                    </span>
                    
                  </h4>
                </div>
                <div className="it-about-text">
                  <p className="mb-45">
<strong>Mr. Arun Bansal, Chairman of Shiva Shiksha Sadan</strong>, firmly believes that education goes beyond academics to nurture character, values, and confidence.

At Shiva Shiksha Sadan, our mission is to provide a supportive and inspiring environment where every student can discover their potential, develop essential life skills, and grow into a responsible and compassionate individual.

Through quality education, dedicated mentorship, and strong collaboration with parents, we strive to empower young minds to achieve excellence and build a brighter future.<br/>

We are committed to fostering creativity, curiosity, and independent thinking while instilling strong moral values. Our goal is to prepare students not only for academic success but also for life's challenges, enabling them to become confident leaders and responsible citizens who contribute positively to society.


</p>
                </div>
               
   
              </div>
            </div>
          </div>
        </div>

      </section>
      <FooterThree/>
      {/* <!-- about-area-end --> */}
    </>
  )
}
