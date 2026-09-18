 

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";


export default function PortfolioThirteen() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <>
      {/* <!-- portfolio-area-start --> */}
      <div className="it-portfolio-area pt-115 pb-130">
        <div className="container container-1270">
          <div className="it-portfolio-top-wrap mb-60">
            <div className="row align-items-end">
              <div className="col-xl-7 col-lg-7 col-md-8 col-sm-8">
                <div className="it-portfolio-top-box">
                  <h4 className="it-portfolio-section-title wow img-anim-top" data-wow-duration="1.5s" data-wow-delay="0.1">Our Portfolios</h4>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-4 col-sm-4">
                <div className="it-portfolio-btn text-sm-end">
                  <a href="#" className="it-btn-yellow style-2">
                    <span>
                      <span className="text-1">See More</span>
                      <span className="text-2">See More</span>
                    </span>
                    <i>
                      <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7463 2.07463C12.7875 1.66247 12.4868 1.29494 12.0746 1.25372L5.35813 0.582071C4.94597 0.540856 4.57844 0.841563 4.53722 1.25372C4.49601 1.66588 4.79671 2.03341 5.20887 2.07463L11.1791 2.67165L10.5821 8.64187C10.5409 9.05403 10.8416 9.42156 11.2537 9.46278C11.6659 9.50399 12.0334 9.20329 12.0746 8.79113L12.7463 2.07463ZM1 11L1.47493 11.5805L12.4749 2.58047L12 2L11.5251 1.41953L0.525072 10.4195L1 11Z" fill="#CD935A" />
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-end">
            <div className="col-xxl-7 col-xl-8 col-lg-7 col-md-7 col-sm-7">
              <div className="it-portfolio-left">
                <Swiper 
                modules={[Navigation, Thumbs]}
              loop={true}
              speed={1200}
              spaceBetween={15}
              navigation={{
                prevEl: ".arrow-prev",
                nextEl: ".arrow-next",
              }}
              thumbs={{ swiper: thumbsSwiper }}

                className="swiper it-portfolio-active">
                
                    <SwiperSlide className="swiper-slide">
                      <div className="it-portfolio-item">
                        <div className="it-portfolio-big-thumb">
                          <img src="assets/img/portfolio/portfolio-13-1.jpg" alt="" />
                        </div>
                        <div className="it-portfolio-content">
                          <span>Modelling - 2025</span>
                          <h4 className="it-portfolio-title"><a className="border-line" href="#">Siyantika Glory</a></h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="it-portfolio-item">
                        <div className="it-portfolio-big-thumb">
                          <img src="assets/img/portfolio/portfolio-13-3.jpg" alt="" />
                        </div>
                        <div className="it-portfolio-content">
                          <span>Modelling - 2026</span>
                          <h4 className="it-portfolio-title"><a className="border-line" href="#">Sharon Volk</a></h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="it-portfolio-item">
                        <div className="it-portfolio-big-thumb">
                          <img src="assets/img/portfolio/portfolio-13-5.jpg" alt="" />
                        </div>
                        <div className="it-portfolio-content">
                          <span>Modelling - 2025</span>
                          <h4 className="it-portfolio-title"><a className="border-line" href="#">Kimberly Strait</a></h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="it-portfolio-item">
                        <div className="it-portfolio-big-thumb">
                          <img src="assets/img/portfolio/portfolio-13-7.jpg" alt="" />
                        </div>
                        <div className="it-portfolio-content">
                          <span>Modelling - 2025</span>
                          <h4 className="it-portfolio-title"><a className="border-line" href="#">Inez McAlister</a></h4>
                        </div>
                      </div>
                    </SwiperSlide>
           
                </Swiper>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-4 col-lg-5 col-md-5 col-sm-5">
              <div className="it-portfolio-right text-end">
                <div className="it-portfolio-arrow-wrap d-none d-md-block mb-30">
                  <button className="arrow-prev">
                    <svg width="36" height="22" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M35.4244 11.3924C35.8016 11.201 35.9902 10.9307 35.9902 10.5817C35.9902 10.2326 35.8016 9.96235 35.4244 9.77093H4.41418C6.33402 8.3409 7.82035 6.61248 8.87317 4.58566C9.54877 3.28513 9.99355 2.00148 10.2075 0.73472C10.2075 0.67842 10.2159 0.622119 10.2328 0.565819C10.2441 0.515148 10.2497 0.475739 10.2497 0.447588C10.2497 0.149197 9.97947 0 9.43899 0C9.11808 0 8.90977 0.0337809 8.81405 0.101341C8.71834 0.168902 8.64234 0.323727 8.58604 0.565819C8.50722 1.1063 8.36084 1.66086 8.14689 2.2295C7.55011 4.04237 6.56204 5.65819 5.18268 7.07695C3.80333 8.49572 2.19595 9.51476 0.360558 10.1341C0.118465 10.2185 -0.00258255 10.3677 -0.00258255 10.5817C-0.00258255 10.7956 0.118465 10.9448 0.360558 11.0292C2.19595 11.6485 3.80333 12.6676 5.18268 14.0863C6.56204 15.5051 7.55011 17.1209 8.14689 18.9338C8.33269 19.5024 8.47907 20.0429 8.58604 20.5553C8.64234 20.8255 8.71834 20.9944 8.81405 21.062C8.90977 21.1295 9.11808 21.1633 9.43899 21.1633C10.0076 21.1633 10.2919 21.0141 10.2919 20.7157C10.2919 20.6369 10.2103 20.2991 10.047 19.7023C9.20816 16.3243 7.33054 13.5543 4.41418 11.3924H35.4244Z" fill="#CD935A" />
                    </svg>
                  </button>
                  <button className="arrow-next">
                    <svg width="37" height="22" viewBox="0 0 37 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.743553 11.3924C0.36634 11.201 0.177734 10.9307 0.177734 10.5817C0.177734 10.2326 0.36634 9.96235 0.743553 9.77093H31.7538C29.8339 8.3409 28.3476 6.61248 27.2948 4.58566C26.6192 3.28513 26.1744 2.00148 25.9605 0.73472C25.9605 0.67842 25.952 0.622119 25.9351 0.565819C25.9239 0.515148 25.9183 0.475739 25.9183 0.447588C25.9183 0.149197 26.1885 0 26.729 0C27.0499 0 27.2582 0.0337809 27.3539 0.101341C27.4496 0.168902 27.5256 0.323727 27.5819 0.565819C27.6608 1.1063 27.8071 1.66086 28.0211 2.2295C28.6179 4.04237 29.6059 5.65819 30.9853 7.07695C32.3646 8.49572 33.972 9.51476 35.8074 10.1341C36.0495 10.2185 36.1706 10.3677 36.1706 10.5817C36.1706 10.7956 36.0495 10.9448 35.8074 11.0292C33.972 11.6485 32.3646 12.6676 30.9853 14.0863C29.6059 15.5051 28.6179 17.1209 28.0211 18.9338C27.8353 19.5024 27.6889 20.0429 27.5819 20.5553C27.5256 20.8255 27.4496 20.9944 27.3539 21.062C27.2582 21.1295 27.0499 21.1633 26.729 21.1633C26.1603 21.1633 25.876 21.0141 25.876 20.7157C25.876 20.6369 25.9577 20.2991 26.1209 19.7023C26.9598 16.3243 28.8374 13.5543 31.7538 11.3924H0.743553Z" fill="#CD935A" />
                    </svg>
                  </button>
                </div>
                <Swiper
                modules={[FreeMode, Thumbs]}
              onSwiper={setThumbsSwiper}
              loop={true}
              speed={1200}
              spaceBetween={15}
              slidesPerView={1}
              freeMode={true}
              watchSlidesProgress={true}
                 className="swiper it-portfolio-nav-active">
               
                    <SwiperSlide className="swiper-slide">
                      <div className="it-portfolio-small-thumb">
                        <img src="assets/img/portfolio/portfolio-13-2.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="it-portfolio-small-thumb">
                        <img src="assets/img/portfolio/portfolio-13-4.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="it-portfolio-small-thumb">
                        <img src="assets/img/portfolio/portfolio-13-6.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="it-portfolio-small-thumb">
                        <img src="assets/img/portfolio/portfolio-13-8.jpg" alt="" />
                      </div>
                    </SwiperSlide>
        
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- portfolio-area-end --> */}
    </>
  )
}
